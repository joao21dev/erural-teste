import { AiFillHome } from "react-icons/ai";

import { GrAdd } from "react-icons/gr";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Nova Sala",
    path: "/create-room",
    icon: <GrAdd />,
  },
];
