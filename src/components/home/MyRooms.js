import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRooms } from "../../context/RoomContext";
import { auth } from "../../firebase-config";
import List from "./List";
import RoomCard from "./RoomCard";

const Subtitle = styled.h1`
  font-size: 24px;
  color: #282842;
`;
const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #df4759;
  width: 100px;
  border-radius: 15px;
  height: 50px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

const MyrRooms = ({ rooms }) => {
  const { deleteRoom, getRooms } = useRooms();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (roomId) => {
    try {
      setLoading(true);
      setTimeout(async () => {
        await deleteRoom(roomId);
        setLoading(false);
        window.location.href = "/";
      }, 1000);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <>
      <Subtitle>Minhas Salas</Subtitle>
      <List>
        {rooms
          .filter((room) => room.room_owner === auth.currentUser.email)
          .map((room, index) => {
            return (
              <>
                <RoomCard
                  key={index}
                  name={room.room_name}
                  owner={room.room_owner}
                  video={room.room_video}
                />
                <DeleteButton onClick={() => handleDelete(room.id)}>
                  {!loading && "Excluir"}
                  {loading && (
                    <span
                      className="indicator-progress"
                      style={{ display: "block" }}
                    >
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </DeleteButton>
              </>
            );
          })}
      </List>
    </>
  );
};

export default MyrRooms;
