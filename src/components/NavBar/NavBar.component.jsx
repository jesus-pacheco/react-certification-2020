import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../providers/Auth';

import {
  NavContainer,
  LeftContainer,
  RightContainer,
  ItemList,
  NavItem,
  NavAction,
  NavBrand,
  Header,
  Nav,
  Toggle,
  ToggleInput,
  ToggleSpan,
} from '../Styled/Nav';

const StyledNavLink = styled(NavLink)`
  &.${'active'} {
    color: ${(props) => props.theme.activeLink};
  }
`;

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
        <Link to="/" onClick={deAuthenticate} data-testid="nav-logout">
          Logout
        </Link>
      );
    }

    return (
      <StyledNavLink exact to="/login" data-testid="nav-login">
        Login
      </StyledNavLink>
    );
  };

  return (
    <Header>
      <Nav data-testid="nav-bar">
        <NavContainer>
          <NavBrand data-testid="nav-brand">Youtube Client</NavBrand>
          <LeftContainer>
            <ItemList>
              <NavItem>
                <StyledNavLink exact to="/">
                  Videos
                </StyledNavLink>
              </NavItem>
              <NavItem>|</NavItem>
              <NavItem>
                <StyledNavLink exact to="/fav-videos">
                  Favorites
                </StyledNavLink>
              </NavItem>
            </ItemList>
          </LeftContainer>
          <RightContainer>
            <ItemList>
              <NavAction>{renderActionLinks()}</NavAction>
              <NavAction>
                <Toggle>
                  <ToggleInput
                    checked={theme === 'dark'}
                    onChange={({ target: { checked } }) => {
                      onChangeTheme((checked && 'dark') || 'light');
                    }}
                    data-testid="nav-toggle-input"
                  />
                  <ToggleSpan />
                </Toggle>
              </NavAction>
            </ItemList>
          </RightContainer>
        </NavContainer>
      </Nav>
    </Header>
  );
};
