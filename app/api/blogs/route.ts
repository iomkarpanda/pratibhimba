import { NextResponse } from "next/server";


export async function GET(){
    return NextResponse.json({"article":"How to work with AI Agents"})
}

export async function POST(request:Request){

    const body = await request.json()

    const {title,des,blog} = body

    return NextResponse.json({
        "title":title,
        "des":des,
        "blog":blog
    })
}