import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  // background-color: pink;
`;

const Wraper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 1px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SeacrhContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SeacrhContainer>
            <Input />
            <Search style={{color:"gray", fontSize:16}}/>
          </SeacrhContainer>
        </Left>
        <Center>
          <Logo>NiTiИ</Logo>
        </Center>
        <Right>
          <MenuItem>
        <Link to="/register">
          <button style={{cursor: 'pointer', border: 'none', color: 'black'}}>Register</button>
        </Link>
        <Link to="/login">
          <button style={{cursor: 'pointer', border: 'none'}}>Sign In</button>
        </Link>
        </MenuItem>
          <MenuItem>
          <Link to="/cart">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wraper>
    </Container>
  );
};

export default Navbar;
