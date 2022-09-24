import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  background-color: #e7eaee;
  border-radius: 15px;
  width: 700px;
  min-height: 10vh;
  padding: 30px;
  margin-bottom: 50px;
`;

const RoomPlayer = () => {
  return (
    <PlayerWrapper>
      <ReactPlayer url="https://www.youtube.com/watch?v=dh_2hYymgsg" />
    </PlayerWrapper>
  );
};

export default RoomPlayer;
