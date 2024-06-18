// app/chat/page.js
"use client";

import { useChat } from "@ai-sdk/react";
import { mistral } from "@ai-sdk/mistral";
import { useState } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  const [code, setCode] = useState("");

  const handleSubmitWithCode = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleSubmit(e, {
        options: {
          body: {
            messages: [
              ...messages,
              {
                role: "user",
                content: `Message: ${input}, Code: ${code}`,
              },
            ],
          },
        },
      });
    }
  };

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>{m.content}</div>
      ))}

      <form onSubmit={handleSubmitWithCode}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
