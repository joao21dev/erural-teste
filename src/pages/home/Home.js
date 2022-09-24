import React, { useEffect, useState } from "react";

import styled from "styled-components";
import AvaliableRooms from "../../components/home/AvaliableRooms";
import MyrRooms from "../../components/home/MyRooms";
import { useAuth } from "../../context/Auth.Context";
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

const Home = () => {
  const [rooms, setRooms] = useState([]);

  const { user } = useAuth();
  const { getRooms } = useRooms();

  const fetchData = async () => {
    const data = await getRooms();
    setRooms(data);
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Container>
      <Title>Seja bem vindo, {user && user.email}</Title>
      <AvaliableRooms rooms={rooms} />
      <MyrRooms rooms={rooms}/>
    </Container>
  );
};

export default Home;
