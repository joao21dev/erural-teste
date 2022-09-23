import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

const RoomContext = createContext();
const roomsCollectionRef = collection(db, "rooms");

export const RoomContextProvider = ({ children }) => {
  const getRooms = async () => {
    const data = await getDocs(roomsCollectionRef);
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const registerRoom = async (roomName) => {
    await addDoc(roomsCollectionRef, {
      room_name: roomName,
      room_owner: auth.currentUser.email,
    });
  };

  const deleteRoom = async (roomId) => {
    const roomDocRef = doc(db, "rooms", roomId);
    await deleteDoc(roomDocRef);
  };

  return (
    <RoomContext.Provider value={{ getRooms, registerRoom, deleteRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRooms = () => {
  return useContext(RoomContext);
};
