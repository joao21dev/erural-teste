import React, { useState } from "react";
import styled from "styled-components";
import { AiFillDelete, AiOutlineEnter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { usePosts } from "../../context/PostContext";

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  background-color: #fff;
  margin-bottom: 16px;
  border-radius: 15px;
  padding: 20px;
`;
const InfoWrapper = styled.div``;
const PostComment = styled.h1`
  font-size: 14px;
  color: #282842;
`;
const PostOwner = styled.div`
  color: #4b96eb;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
const DeleteButton = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const PostCard = ({ comment, owner, user, id, roomId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { deletePost } = usePosts();

  const handleDelete = async (postId) => {
    try {
      setLoading(true);
      setTimeout(async () => {
        await deletePost(postId);
        setLoading(false);
        window.location.href = `/${roomId}`;
      }, 1000);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <Post>
      <InfoWrapper>
        <PostComment>{comment}</PostComment>
        <PostOwner>{owner}</PostOwner>
      </InfoWrapper>
      {user && user.email === owner && (
        <DeleteButton onClick={() => handleDelete(id)}>
          {!loading && <AiFillDelete size={32} color="#d9534f" />}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </DeleteButton>
      )}
    </Post>
  );
};

export default PostCard;
