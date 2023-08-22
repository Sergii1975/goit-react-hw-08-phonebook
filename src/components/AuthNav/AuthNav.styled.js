import styled from "styled-components";

import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;
export const AuthItem = styled.li``;
export const AuthLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  font-size: 18px;

  padding: 22px 28px;

  color: #ffffff;
  background-color: #000000;

  border-radius: 14px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  // &:hover,
  // :focus {
  //   color: #000000;
  //   background-color: rgba(250, 187, 24, 0.1);
  // }

&:hover,
 :focus {
    color: yellow;
    background-color: #3d5de0;
  }

  `;