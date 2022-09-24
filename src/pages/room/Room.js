import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RoomPlayer from "../../components/room/RoomPlayer";
import { useRooms } from "../../context/RoomContext";

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
  const [room, setRoom] = useState([]);

  const { id } = useParams();

  console.log('id', id)

  const { getSingleRoom } = useRooms();

  const fetchData = async () => {
    const data = await getSingleRoom(id);
    setRoom(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("singleRoom", room);

  return (
    <Container>
      <Title>{room.room_name}</Title>
      <RoomPlayer url={room.room_url}/>
    </Container>
  );
};

export default Room;
