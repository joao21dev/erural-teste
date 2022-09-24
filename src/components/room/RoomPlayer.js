import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  background-color: #e7eaee;
  border-radius: 15px;
  width: 700px;
  height: 43vh;
  padding: 30px;
  margin-right: 50px;
`;

const RoomPlayer = ({ url }) => {
  return (
    <PlayerWrapper>
      <ReactPlayer url={url} />
    </PlayerWrapper>
  );
};

export default RoomPlayer;
