import { createContext, useContext } from "react";
import { auth, db } from "../firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const PostContext = createContext();
const postsCollectionRef = collection(db, "posts");

export const PostContextProvider = ({ children }) => {
  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const registerPost = async (postComment, roomId) => {
    await addDoc(postsCollectionRef, {
      post_comment: postComment,
      post_owner: auth.currentUser.email,
      post_roomId: roomId,
    });
  };

  const deletePost = async (postId) => {
    const postDocRef = doc(db, "posts", postId);
    await deleteDoc(postDocRef);
  };

  return (
    <PostContext.Provider value={{ getPosts, registerPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostContext);
};
