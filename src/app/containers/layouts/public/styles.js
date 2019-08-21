import { Layout, Menu } from 'antd';
import styled from 'styled-components';

export const Container = styled(Layout)`
  min-height: 100vh;
  padding-top: 20px;
  background-color: #111;
  font-family: 'Rubik', sans-serif;
`;

export const Content = styled(Layout.Content)``;

export const Header = styled(Layout.Header)`
  background-color: transparent;
  display: flex;
  padding: 0px;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export const LogoContainer = styled.div`
  width: 120px;
`;

export const Logo = styled.img`
  width: 114px;
  height: 37px;
`;

export const NavContainer = styled(Menu)`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const NavItem = styled(Menu.Item)`
  padding: 0px 5px !important;
  margin: 0px 20px;

  &:hover, &.ant-menu-item-selected {
    background-color: transparent !important;
    border-bottom: 3px solid #2ECC71;
  }

  a {
    color: #fff;
    text-transform: uppercase;

    &:hover {
      color: #fff;
    }
  }
`;
