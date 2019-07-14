import React,{ useState } from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'

let Input = styled.input`
    font-family: inherit;
    font-size: 16px;
    color: inherit;
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.greyLight2};
    padding: 4px 12px;
    border-radius: 100px;
    outline: none;
    width:75%;
    transition:all .2s;
    &:focus {
        width:90%;
    }
    `

let FlexForm = styled.form`
    display:flex;
    align-items: center;
    @media screen and (max-width:  ${props => props.theme.breakpoints[0]}) {
        flex-direction: column;
        width: 100%;
       & > {
        &:not(:last-child){
            margin-bottom:10px;
        }
    }   
}
`

export default ( ) => {
    let [sortWord, setSortWord] = useState("");

    const handleChange = (event) => {
        setSortWord(event.target.value);
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(sortWord)

      }

    return (
        <Flex width={[ 1, 1, 2/3, 1/2 ]} mb={3}  justifyContent="flex-end">
            <FlexForm onSubmit={handleSubmit}>
                <Box>
                    search topic:
                </Box>
                <Flex width={ [1, '150px']} ml={[0,2]} justifyContent="center">
                    <Input type="text" value={sortWord} onChange={handleChange} />
                </Flex>
            </FlexForm>
        </Flex>
      );
  
}