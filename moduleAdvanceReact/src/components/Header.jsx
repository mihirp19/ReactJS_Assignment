import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fdfdfd;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    font-size: 1rem;
    color: #555;
    text-decoration: none;

    &:hover {
      color: #28a745;
    }
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 200px;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 8px 16px;
    font-size: 1rem;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>NEST</Logo>
    <Nav>
      <SearchWrapper>
        <input type="text" placeholder="Search for products" />
        <button>Search</button>
      </SearchWrapper>
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
    </Nav>
  </HeaderWrapper>
);

export default Header;
