import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components'

const SetLinkWrapper = styled.a`
    text-decoration: none;
    list-style: none;
    &:hover,
    &:focus{
        color: inherit;
    }
    &:active{
        color: inherit;
    };
    &:visited{
        color: inherit;
    }
`

export function SetLink({ to, children, ...props }) {
    // active classes and window.location isn't changing when using Link component as the path is no longer accurate as ReactRouter has its own way of handling it using their custom hooks. 
    // const path = window.location.pathname 
    // useResolvedPath takes a relative/absolute path and combines it with current path user is on and provides the full path that's being accessed.
    const resolvedPath = useResolvedPath(to)
    // useMatch hook is used to compare current path to destination path. 'to' is used to define absolute/direct paths with "/" or relative pages that are relative to whatever page user is currently on. 
    // arguments passed can be a string or object, selected defined method.pathname. end: true confirms that the path matches exactly, otherwise any path id inside it will also match which functions the same as 'path === to'
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    
    return (
        <SetLinkWrapper className={ isActive ? "active" : ""}>
            {/* <a to={to}>{children}</a> */}
            <Link style={{textDecoration: 'none'}} to={to}>{children}</Link>
        </SetLinkWrapper>
    )
}