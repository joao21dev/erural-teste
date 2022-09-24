import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { usePosts } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";
import PostCard from "./PostCard";

const PostsWrapper = styled.div`
  background-color: #e7eaee;
  border-radius: 15px;
  width: 500px;
  min-height: 70vh;
  padding: 30px;
  margin-bottom: 50px;
`;
const PostWrapper = styled.div`
  height: 83%;
`;
const PostInputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 65px;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
`;
const PostCommentInput = styled.input`
  background: none;
  color: inherit;
  border: none;
  border-bottom: 2px solid #e7eaee;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
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
  width: 100px;
  border-radius: 15px;
  height: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postComment, setPostComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  const { getPosts, registerPost } = usePosts();
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        await registerPost(postComment, id);
        fetchData();
        setLoading(false);
        reset();
      }, 1000);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const reset = () => {
    setPostComment("");
  };

  const fetchData = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);
  return (
    <PostsWrapper>
      <PostWrapper>
        {posts
          .filter((post) => post.post_roomId === id)
          .map((post, index) => {
            return (
              <PostCard
                key={index}
                id={post.id}
                roomId={post.post_roomId}
                user={user}
                owner={post.post_owner}
                comment={post.post_comment}
              />
            );
          })}
      </PostWrapper>

      <PostInputWrapper>
        <PostCommentInput
          value={postComment}
          onChange={(e) => setPostComment(e.target.value)}
          placeholder="Escreva um comentário"
        />
      </PostInputWrapper>
      <AddWrapper>
        <AddButton onClick={handleRegister}>
          {" "}
          {!loading && "Comentar"}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </AddButton>
      </AddWrapper>
    </PostsWrapper>
  );
};

export default Posts;
