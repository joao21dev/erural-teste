import React from "react";
import styled from "styled-components";
import List from "./List";
import RoomCard from "./RoomCard";

const Subtitle = styled.h1`
  font-size: 24px;
  color: #282842;
`;

const AvaliableRooms = () => {
  return (
    <>
      <Subtitle>Salas Disponíveis</Subtitle>
      <List>
        <RoomCard />
      </List>
    </>
  );
};

export default AvaliableRooms;
