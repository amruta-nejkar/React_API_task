import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const Ul = styled.ul`
   display: flex;
   color:white;
  text-decoration: none;
  list-style:none;

`
const Li = styled.li`
 list-style: none;
 text-decoration: none;
 margin:10px;
 color:white;
`
const Header = () => {

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Ul className="container">
             <Li><Link to="">UserList</Link></Li>
             <Li><Link to="/Profile">UserProfile</Link></Li>
            </Ul>
          </Toolbar>

        </Container>
      </AppBar>
    
    </>
  );
}
export default Header;
