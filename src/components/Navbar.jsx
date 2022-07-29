import { Link, Route } from 'react-router-dom';
// import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { SetLink } from './SetLink'
import React from 'react'
// run npm install styled-components
import styled from 'styled-components'
// run npm install @mui/icons-material
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
// run npm install @mui/material
import { Badge } from '@mui/material'
import Register from '../pages/Register';


//styled-components are a nice way of implementing classes without conflicting class names with children
const Container = styled.div`
  height: 60px;
  // background-color: black;
`;

//Parent
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  // align-items: center;
`;

//Left
const Left = styled.div`
  flex: 1;
  // same as width: 33.3%
  display: flex;
  align-items: center;
`
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  margin-left: 25px;
  border: 0.5px solid lightgray;
  border-radius: 2.5px;
  padding: 5px;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  border: none;
  `

//Center
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;  
`

//Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:"gray", fontSize:16}}/>{/* icon imported, fontSize is implied pixels */}
          </SearchContainer>
        </Left>
        <Center>          
          <Link style={{textDecoration: 'none'}} to='/'><Logo>PeaStore.</Logo></Link>
        </Center>
        <Right>          
          <SetLink to="./register">
            <MenuItem>Register</MenuItem>
          </SetLink>
          <SetLink to='./login'>
            <MenuItem>Sign In</MenuItem>
          </SetLink>
          <SetLink to='./cart'>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
          </SetLink>
        </Right>
      </Wrapper>
    </Container>

    // same as
    // <div className="Container"></div>

    // with .css file
    // .Container {
    //   height: 60px;
    //   background-color: black;
    // }
  )
}

export default Navbar;