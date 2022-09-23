import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import List from "../../components/home/List";
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
const RoomInputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
`;
const RoomNameInput = styled.input`
  background: none;
  color: inherit;
  border: none;
  border-bottom: 2px solid #e7eaee;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 50%;
  cursor: text;
`;
const AddWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #5cb85c;
  width: 150px;
  border-radius: 15px;
  height: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { registerRoom } = useRooms();

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        await registerRoom(roomName);
        navigate("/");
        setLoading(false);
      }, 1000);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <Container>
      <Title>Criar Sala</Title>
      <List>
        <RoomInputWrapper>
          <RoomNameInput
            placeholder="Nome da Sala"
            onChange={(e) => setRoomName(e.target.value)}
          />
        </RoomInputWrapper>
        <AddWrapper>
          <AddButton onClick={handleRegister}>
            {" "}
            {!loading && "Criar Sala"}
            {loading && (
              <span className="indicator-progress" style={{ display: "block" }}>
                Carregando...{" "}
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            )}
          </AddButton>
        </AddWrapper>
      </List>
    </Container>
  );
};

export default CreateRoom;
