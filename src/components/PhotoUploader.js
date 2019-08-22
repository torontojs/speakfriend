import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Button as UnstiledButton, Box } from 'rebass'
import { useDropzone } from 'react-dropzone';
import clearCloudinary from '../services/clearCloudinary';
import sendToCloudinary from '../services/sendToCloudinary';

const Figure = styled.figure`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    margin:0;
    border-radius: 5px;
`
const Div = styled.div`
  font-family: inherit;
  font-size: 16px;
  color:${props => props.theme.colors.greyDark};
  padding: 28px;
  border: 2px dashed ${props => props.theme.colors.greyLight};
  cursor: pointer;

`
let Button = styled(UnstiledButton)`
    &:hover {
        color: ${props => props.theme.colors.greyLight2};
        border-color: ${props => props.theme.colors.greyLight};
    `

export default ({setImageState, imageUrl, deleteToken}) => {

  const maxSize = 6291456; //max 6MB 

  const onDrop = useCallback(async acceptedFiles => {
    const file = acceptedFiles[0];

    if(file){
        const res = await sendToCloudinary(file);
    
        if (res.secure_url !== '' && res.secure_url !== undefined ) {
            setImageState(res.secure_url, res.delete_token);
        }
    }
  }, []);

  const onDelete = async () => {
    const res = await clearCloudinary(deleteToken);

    if(res.statusText === "OK") {
        setImageState(null, null);
    }
  }

  const { isDragActive, getRootProps, getInputProps, isDragReject, rejectedFiles } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
    minSize: 0,
    maxSize,
  }); 


  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
  
  return (
    <div>
      {imageUrl === '' ? 
        <Div {...getRootProps()}>
          <input {...getInputProps()} />
          {!isDragActive && !imageUrl && 'Click here or drop a file to upload!'}
          {isDragActive && !isDragReject && "Drop the file here ..."}
          {isDragReject && "File type not accepted, sorry!"}
          {isFileTooLarge && (
            <div className="">
              File is too large, please select less the 6MB image!
            </div>
          )}
        </Div> :

        <Flex alignItems="flex-end" >
          <Figure>
            <img src= {imageUrl} height='140px' alt="" />
          </Figure>
          <Box pl={4}>
            <Button variant='outline' type="button" onClick={onDelete}>remove </Button>
          </Box>
          
        </Flex> 
      }
    </div>
  );
};

