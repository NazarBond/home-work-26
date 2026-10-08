import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 16px 32px;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  text-decoration: none;

  &.active {
    color: #e50914;
    font-weight: 700;
  }
`;

export const Container = styled.div`
  padding: 20px 32px;
`;
