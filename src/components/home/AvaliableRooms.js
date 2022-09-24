import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRooms } from "../../context/RoomContext";
import List from "./List";
import RoomCard from "./RoomCard";

const Subtitle = styled.h1`
  font-size: 24px;
  color: #282842;
`;

const AvaliableRooms = ({ rooms }) => {
  return (
    <>
      <Subtitle>Salas Disponíveis</Subtitle>
      <List>
        {rooms.map((room, index) => {
          return (
            <RoomCard
              key={index}
              name={room.room_name}
              owner={room.room_owner}
              video={room.room_video}
              roomId={room.id}
            />
          );
        })}
      </List>
    </>
  );
};

export default AvaliableRooms;
