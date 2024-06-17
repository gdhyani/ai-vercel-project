"use client";
import { useRef, useState ,useEffect } from "react";

export default function Chat() {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(chatInput);
        setChatHistory([
            ...chatHistory,
            {
                text: chatInput ,
                role: "user",
            },
        ]);
        setChatInput("");
        console.log(chatHistory)
    }
    const [chatInput, setChatInput] = useState("");
    const [chatHistory, setChatHistory] = useState([
        {
            text: "Hello Welcome to ChatBot For CodeCloud Testing Using Vercel.",
            role: "agent",
            },
            ]);
            useEffect(scrollToBottom, [chatHistory]);
            return (
        <div className="h-5/6 mt-20 relative  w-[600px] m-auto ">
            <div className="h-5/6 overflow-y-auto">
                {chatHistory.map((ele, index) => (
                <div key={index} className={`max-w-96 mb-2 text-left border-2 rounded px-2 py-2 border-[#183D3D] ${ele.role==="user"?"ml-auto":"mr-auto"}`}>
                <h1 className="">
                    {ele.text}  
                </h1>
            </div>
            ))}
            <div ref={messagesEndRef}></div>
            </div>
            
            <form
                className="w-full absolute bottom-10"
                onSubmit={(evt) => {
                    handleSubmit(evt);
                }}
            >
                <input
                    value={chatInput}
                    onChange={(evt) => {
                        setChatInput(evt.target.value);
                    }}
                    placeholder="Ask Anything....."
                    className="px-2 rounded py-2 text-xl text-black w-full"
                    type="text"
                ></input>
            </form>
        </div>
    );
}
