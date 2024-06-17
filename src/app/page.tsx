import Chat from "../components/chat/Chat";
import Chat2 from"../components/chat2/Chat2";

export default function Home(){
return(
  <div className="text-center h-full overflow-hidden flex flex-col">
    <h1 className="text-4xl bg-gradient-to-l from-[#183D3D] bg-clip-text p-1 text-transparent to-[#5C8374] font-extrabold">Welcome to ChatBot using API - Testing for CodeCloud Ai</h1>
    {/* <Chat/> */}
    <Chat2/>
  </div>
)
}