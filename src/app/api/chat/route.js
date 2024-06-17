import { mistral } from '@ai-sdk/mistral';


import { generateText } from 'ai';
import { NextResponse } from 'next/server';

const { text } = await generateText({
    model: mistral('mistral-large-latest'),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });

export function GET(){
    const data={
        data:"Data1",
        test:text,
        version:1
    }
    return NextResponse.json(data)
}

export async function POST(request){
    const req = await request.json()
    const { text } = await generateText({
        model: mistral('mistral-large-latest'),
        prompt: req.text,
      });
    const data = {
        data:"Data2",
        test:text,
        version:1
    }
    return NextResponse.json(data)
}