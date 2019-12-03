import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass'
import TopicsPill from '../components/TopicsPill';
import StyledButton from '../components/StyledButton';


let FlexCard = styled(Flex)`
    @media screen and (max-width:  ${props => props.theme.breakpoints[0]}) {
            flex-direction: column;  
    }
    `

// const Figure = styled.figure`
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 140px;
//     height: 140px;
//     margin:0;
//     border-radius: 5px;
// `

export default ({fields}) => {
    // const {Name, Topics, Picture} = fields;
    // const {url} = Picture ? Picture[0] : {url: 'image.png'};

    // const Name = fields["Speaker"]
    const Topics = fields["Topics"]
    const Email = fields["Email"]

    return (
        <FlexCard alignItems='center' width={'100%'}>
            {/* <Figure>
                <img src= {url} height='140px' alt="" />
            </Figure> */}
            <Box px={[2,3]} mt={[3,0]} alignSelf="stretch" flex="1">
                {/* <Text fontSize={3} fontWeight='700' textAlign="center" >
                    {Name} 
                </Text> */}
                <Flex py={2} mt={2}  alignItems="center" >
                    <Text fontSize={2} width={1/3}>
                        Topics:
                    </Text>
                    <Text fontSize={2}  textAlign="right" width={2/3}>
                        <TopicsPill topics={Topics} />
                    </Text>
                </Flex>
                <Flex  mt={4} alignItems="center" justifyContent="flex-end" >
                    <StyledButton 
                    text={<a href={`mailto:${Email}`} target="_blank" style={{color: 'inherit', textDecoration: 'none'}}>request availability</a>}/>
                </Flex>
            </Box>
        </FlexCard> 
    )
}