import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;

  &.active {
    color: #e44848;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 32px;
`;
