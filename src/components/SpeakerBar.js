import React from 'react'
import { Flex as UnstyledFlex } from 'rebass'
import styled from 'styled-components'
import { Link as UnstyledLink } from 'react-router-dom'
import SearchInput from './SearchInput'

let Link = styled(UnstyledLink)`
    color: ${props => props.theme.colors.primary};
    align-self: flex-end;
    
    &:hover {
        color: ${props => props.theme.colors.secondary}
    }

    @media screen and (max-width:  ${props => props.theme.breakpoints[0]}) {
        align-self: center;
        margin-left: 16px;
        margin-bottom: 16px;
    }
    `
let Flex = styled(UnstyledFlex)`
    @media screen and (max-width:  ${props => props.theme.breakpoints[0]}) {
        flex-direction: column;
        align-items: center;
    }
    `

export default ({searchTopic} ) => {

    return (
        <Flex width={[ 1, 1, 2/3, 1/2 ]} mb={3} pl={[0, 3]} justifyContent="space-between">
            <Link to="" >become speaker</Link>
            <SearchInput searchTopic={searchTopic} placeholder="search topic" />
        </Flex>
      );
}