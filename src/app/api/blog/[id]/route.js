
import { DBConeectFuntion } from "@/app/MongDB/Mongodb"
import { NextResponse } from "next/server"
import MyBlogs from "@/app/MongDB/model/MyBlogs"

export async function GET(request,content) {
  const Blogid=content.params.id.trim()
  const Record={_id:Blogid}
  await DBConeectFuntion()
  const result= await MyBlogs.findById(Record)
  return NextResponse.json({result,success:true});  
}



export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await DBConeectFuntion();

    await MyBlogs.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


// export const GET = async (request) => {
//   const url = new URL(request.url);

//   const username = url.searchParams.get("username");

//   try {
//     await DBConeectFuntion();

//     const posts = await MyBlogs.find(username && { username });

//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error shows", { status: 500 });
//   }
// };

// export const POST = async (request) => {
//   const body = await request.json();

//   const newPost = new MyBlogs(body);

//   try {
//     await DBConeectFuntion();

//     await newPost.save();

//     return new NextResponse("Post has been created", { status: 201 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };