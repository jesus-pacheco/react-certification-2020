import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../providers/Auth';

const NavContainer = styled.div`
  padding: 0px 250px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 64px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-basis: auto;
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const ItemList = styled.ul`
  flex-direction: row;
  display: flex;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  margin-right: auto;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 0 5px;
`;

const NavAction = styled.li`
  display: inline-block;
  padding: 0 5px;
`;

const Title = styled.h2`
  display: inline-block;
  margin-right: 15px;
`;

const Header = styled.header`
  width: 100vw;
`;

const Nav = styled.nav`
  margin-bottom: 30px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const ThemeSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & input:checked + span {
    background-color: #354146;
  }

  & input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  & span:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const activeStyle = {
  color: 'blue',
};

export default ({ theme, onChangeTheme }) => {
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  const renderActionLinks = () => {
    if (authenticated) {
      return (
        <Link to="/" onClick={deAuthenticate}>
          Log Out
        </Link>
      );
    }

    return (
      <NavLink activeStyle={activeStyle} exact to="/login">
        Log in
      </NavLink>
    );
  };

  return (
    <Header>
      <Nav>
        <NavContainer>
          <Title>Youtube Client</Title>
          <LeftContainer>
            <ItemList>
              <NavItem>
                <NavLink activeStyle={activeStyle} exact to="/">
                  Videos
                </NavLink>
              </NavItem>
              <NavItem>|</NavItem>
              <NavItem>
                <NavLink activeStyle={activeStyle} exact to="/fav-videos">
                  Favorites
                </NavLink>
              </NavItem>
            </ItemList>
          </LeftContainer>
          <RightContainer>
            <ItemList>
              <NavAction>{renderActionLinks()}</NavAction>
              <NavAction>
                <ThemeSwitch>
                  <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={(ev) =>
                      onChangeTheme((ev.target.checked && 'dark') || 'light')
                    }
                  />
                  <span />
                </ThemeSwitch>
              </NavAction>
            </ItemList>
          </RightContainer>
        </NavContainer>
      </Nav>
    </Header>
  );
};
