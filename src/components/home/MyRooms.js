import React from "react";
import styled from "styled-components";
import { auth } from "../../firebase-config";
import List from "./List";
import RoomCard from "./RoomCard";

const Subtitle = styled.h1`
  font-size: 24px;
  color: #282842;
`;

const MyrRooms = ({ rooms }) => {
  return (
    <>
      <Subtitle>Minhas Salas</Subtitle>
      <List>
        {rooms.filter((room) => room.room_owner === auth.currentUser.email).map((room, index) => {
          return (
            <RoomCard
              key={index}
              name={room.room_name}
              owner={room.room_owner}
            />
          );
        })}
      </List>
    </>
  );
};

export default MyrRooms;
