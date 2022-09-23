import React from "react";
import styled from "styled-components";
import { AiOutlineEnter } from "react-icons/ai";

const Room = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #fff;
  margin-bottom: 32px;
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
const RoomOwner = styled.div`
  color: #4b96eb;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const AddButton = styled.div`
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

const RoomCard = () => {
  return (
    <Room>
      <InfoWrapper>
        <RoomName>Sala 1</RoomName>
        <RoomOwner>Joao21#ddd</RoomOwner>
      </InfoWrapper>

      <AddButton>
        <AiOutlineEnter size={28} color="#fff" />
      </AddButton>
    </Room>
  );
};

export default RoomCard;
