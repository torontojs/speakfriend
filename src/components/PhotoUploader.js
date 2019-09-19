import React, { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Button as UnstiledButton, Box } from 'rebass'
import { useDropzone } from 'react-dropzone';
import clearCloudinary from '../services/clearCloudinary';
import sendToCloudinary from '../services/sendToCloudinary';

const Figure = styled.figure`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 540px;
    height: 140px;
    margin:0;
    border-radius: 5px;
`
const Div = styled.div`
  display:flex;
  flex-direction: column;
  font-family: inherit;
  font-size: 16px;
  color:${props => props.theme.colors.greyDark};
  padding: 20px 10px;
  border: 2px dashed ${props => props.theme.colors.greyLight};
  cursor: pointer;
  width: 90%;
   
  @media screen and (min-width:  ${props => props.theme.breakpoints[1]}) {
      width: 75%; 
  }

  @media screen and (min-width:  ${props => props.theme.breakpoints[2]}) {
    width: 85%; 
}
`
const Danger = styled.div`
  font-family: inherit;
  font-size: 16px;
  color:${props => props.theme.colors.primary};
  margin-top: 8px;
  cursor: pointer;
`
const keyFrame = keyframes`
  0% {transform: rotate(0deg); }
  100% {transform: rotate(360deg); }
`
const Loader = styled.div`
align-self: center;
border: 4px solid ${props => props.theme.colors.greyLight0};
border-top: 4px solid ${props => props.theme.colors.greyDark};
border-radius: 50%;
width: 20px;
height: 20px;
animation: ${keyFrame} 2s linear infinite;
`

let Button = styled(UnstiledButton)`
    &:hover {
        color: ${props => props.theme.colors.greyLight2};
        border-color: ${props => props.theme.colors.greyLight};
    `

export default ({setImageState, imageUrl, deleteToken}) => {
  let [uploading, setUploading] = useState(false);

  const maxSize = 8388608; //max 8MB 

  const onDrop = useCallback(async acceptedFiles => {
    const file = acceptedFiles[0];

    if(file){
        setUploading(true);
        const res = await sendToCloudinary(file, file.name, true);
        setUploading(false);
    
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
          {uploading && ( <Loader> </Loader>)}
          {isDragActive && !isDragReject && "Drop the file here ..."}
          {isDragReject && "File type not accepted, sorry!"}
          {isFileTooLarge && (
            <Danger>
              File is too large, please select less the 8MB image!
            </Danger>
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


