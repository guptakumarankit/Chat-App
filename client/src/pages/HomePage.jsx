import React, { useContext } from "react";
import { useState } from "react";
import SideBar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import { ChatContext } from "../../context/ChatContext";

const HomePage = () => {
  
  const {selectedUser , viewProfile} = useContext(ChatContext);

  return (
    <div className="border w-full h-screen ">
      <div
        className={`backdrop-blur-xl border-2 border-grey-600 rounded-2xl overflow-hidden h-[100%] grid relative ${
          (selectedUser && viewProfile )
            ? "md:grid-cols-[1fr_2.5fr_1fr] xl:grid-cols-[1fr_2.5fr_1fr]"
            : "md:grid-cols-[1fr_3.5fr] xl:grid-cols-[1fr_3.5fr]"
        }`}
      >
        <SideBar/>
        <ChatContainer/>
        {viewProfile && <RightSidebar/>}
      </div>
    </div>
  );
};

export default HomePage;
