import React, { useState } from "react";

import styled from "styled-components";
import AvaliableRooms from "../../components/home/AvaliableRooms";
import MyrRooms from "../../components/home/MyRooms";
import { UserAuth } from "../../context/Auth.Context";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 100px;
`;
const Title = styled.h1`
  font-size: 28px;
  color: #282842;
`;

const Home = () => {
  const { user } = UserAuth();

  return (
    <Container>
      <Title>Seja bem vindo, {user && user.email}</Title>
      <AvaliableRooms />
      <MyrRooms />
    </Container>
  );
};

export default Home;
