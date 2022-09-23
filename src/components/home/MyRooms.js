import React from "react";
import styled from "styled-components";
import List from "./List";
import RoomCard from "./RoomCard";

const Subtitle = styled.h1`
  font-size: 24px;
  color: #282842;
`;

const MyrRooms = () => {
  return (
    <>
      <Subtitle>Minhas Salas</Subtitle>
      <List>
        <RoomCard />
      </List>
    </>
  );
};

export default MyrRooms;
