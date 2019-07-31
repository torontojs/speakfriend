import React from 'react'
import styled from 'styled-components'

const Pill = styled.span`
    display: inline-block;
    background-color: ${props => props.theme.colors.greyLight};
    border-radius: 6px;
    padding: 5px 10px;
    line-height: 1em;
    &:not(:last-child){
        margin-right: 8px;
    }
    @media screen and (max-width:  ${props => props.theme.breakpoints[0]}) {
        margin: 4px 0;  
    }
`
export default ({topics}) => {
    if(topics){
        return topics.split(',')
            .map((topic, index) => <Pill key={index}>{ topic.trim()}</Pill>);
    }
    return null;
}
