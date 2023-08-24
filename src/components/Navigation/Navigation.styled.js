import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  margin-right: 114px;
  color: #000000;
  > span {
    // color: #fabb18;
    color: green;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    // color: #fabb18;
    color: green;
    > span {
      color: #000000;
    }
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul``;
export const MainNavItem = styled.li``;
export const MainNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 22px 28px;
  color: #000000;
  background-color: rgb(239, 239, 239);
  border: 1px solid #000000;
  border-radius: 18px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    font-weight: 600;
     color: yellow;
    background-color: #3d5de0;
  }
`;