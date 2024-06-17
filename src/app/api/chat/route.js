import { mistral } from "@ai-sdk/mistral";
import { generateText, streamText } from "ai";
import { NextResponse } from "next/server";

// const { text } = await generateText({
//     model: mistral('mistral-large-latest'),
//     prompt: 'Write a vegetarian lasagna recipe for 4 people.',
//   });

export function GET() {
    const data = {
        data: "Data1",
        test: text,
        version: 1,
    };
    return NextResponse.json(data);
}

export async function POST(request) {
    const { messages } = await request.json();
    console.log(messages);

    const result = await streamText({
        model: mistral("mistral-large-latest"),
        system: "You are a helpful assistant.",
        messages,
    });

    return result.toAIStreamResponse();
    // const { text } = await generateText({
    //     model: mistral("mistral-large-latest"),
    //     messages,
    // });
    // const data = {
    //     data: "Data2",
    //     test: text,
    //     version: 1,
    // };
    // return NextResponse.json(data);
}
