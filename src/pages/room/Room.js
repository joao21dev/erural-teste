import React from "react";
import styled from "styled-components";
import RoomPlayer from "../../components/room/RoomPlayer";

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

const Room = () => {
  return (
    <Container>
      <Title>Sala 1</Title>
      <RoomPlayer />
    </Container>
  );
};

export default Room;
