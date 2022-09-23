import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const ListWraper = styled.div`
  background-color: #e7eaee;
  border-radius: 15px;
  width: 800px;
  min-height: 40vh;
  padding: 30px;
  margin-bottom: 50px;
`;

const List = ({ children }) => {
  return <ListWraper>{children}</ListWraper>;
};

export default List;
