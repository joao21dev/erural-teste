import React from "react";
import styled from "styled-components";
import { AiOutlineEnter } from "react-icons/ai";
import { Link } from "react-router-dom";

const Room = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  background-color: #fff;
  margin-bottom: 16px;
  border-radius: 15px;
  padding: 20px;
`;
const InfoWrapper = styled.div`
  width: 85%;
`;
const RoomName = styled.h1`
  font-size: 24px;
  color: #282842;
`;
const RoomVideo = styled.h1`
  font-size: 18px;
  color: #282842;
`;
const RoomOwner = styled.div`
  color: #4b96eb;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const EnterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #5cb85c;
  width: 100px;
  border-radius: 15px;
  height: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const RoomCard = ({ name, owner, video, roomId }) => {
  return (
    <Room>
      <InfoWrapper>
        <RoomName>{name}</RoomName>
        <RoomVideo>{video}</RoomVideo>
        <RoomOwner>{owner}</RoomOwner>
      </InfoWrapper>
      <Link style={{ textDecoration: "none" }} to={`/room/${roomId}`}>
        <EnterButton>Entrar</EnterButton>
      </Link>
    </Room>
  );
};

export default RoomCard;
