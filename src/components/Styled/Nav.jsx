import styled from 'styled-components';

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
  height: 100%;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  margin-left: auto;
  height: 100%;
  align-items: center;
`;

const ItemList = styled.ul`
  flex-direction: row;
  display: flex;
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  margin-right: auto;
  padding: 0;
  height: 100%;
  align-items: center;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 0 5px;
`;

const NavAction = styled.li`
  display: inline-block;
  margin: 0 15px;
`;

const NavBrand = styled.span`
  display: inline-block;
  font-size: 2em;
  font-weight: bolder;
  margin-right: 1em;
  align-self: center;
`;

const Header = styled.header`
  width: 100vw;
`;

const Nav = styled.nav`
  margin-bottom: 30px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #354146;
  }

  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
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

export {
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
};
