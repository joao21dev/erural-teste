import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 2rem;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #fff;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const Submenu = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>{item.icon}</div>
        <SidebarLabel>{item.title}</SidebarLabel>
      </SidebarLink>
    </>
  );
};

export default Submenu;
