import { NextResponse } from "next/server";
import { DBConeectFuntion } from "@/app/MongDB/Mongodb";
import MyBlogs from "@/app/MongDB/model/MyBlogs";

export const GET = async (request) => {
const url = new URL(request.url);
  
    const username = url.searchParams.get("username");
  
    try {
      await DBConeectFuntion();
  
      const posts = await MyBlogs.find(username && { username });
  
      return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };








  export const POST = async (request) => {
    const body = await request.json();
  
    // Validate that all necessary fields are provided
    const { title, desc, img, content, username } = body;
  
    if (!title || !desc || !img || !content || !username) {
      return new NextResponse("Missing required fields", { status: 400 });
    }
  
    const newPost = new MyBlogs(body);
  
    try {
      await DBConeectFuntion(); // Ensure the connection
      await newPost.save(); // Save to the database
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      console.error("Error saving the post:", err);
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  