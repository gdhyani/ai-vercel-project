"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";

export default function Page() {
    const [input1, setInput1] = useState("");
    const [code, setcode] = useState(
        "console.log(22+23=); console.log(23+23+23-23+23=)"
    );
    const { messages, input, setInput, handleInputChange, handleSubmit } =
        useChat({
            api: "api/chat",
            sendExtraMessageFields: true,
            messages: [
                { role: "user", content: input1 },
                { role: "system", content: code },
            ],
        });
    function handleCodeSubmit(e) {
        handleSubmit(e);
    }
    return (
        <>
            {messages.map((message) => (
                <div key={message.id}>
                    {message.role === "user" ? "User: " : "AI: "}
                    {message.content}
                </div>
            ))}
            <form
                className="text-black"
                onSubmit={(e) => {
                    handleCodeSubmit(e);
                }}
            >
                <input
                    name="prompt"
                    value={input1}
                    onChange={handleInputChange}
                    id="input"
                />
                <textarea
                    rows={4}
                    placeholder="Enter your code"
                    value={code}
                    onChange={(e) => {
                        setcode(e.target.value);
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
