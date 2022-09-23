import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

const RoomContext = createContext();
const roomsCollectionRef = collection(db, "rooms");

export const RoomContextProvider = ({ children }) => {
  const getRooms = async () => {
    const data = await getDocs(roomsCollectionRef);
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };



  return (
    <RoomContext.Provider value={{ getRooms }}>{children}</RoomContext.Provider>
  );
};

export const useRooms = () => {
  return useContext(RoomContext);
};
