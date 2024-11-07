"use client";
import { MdDeleteForever } from "react-icons/md";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `api/blog?username=${session?.data?.user.name}`,
    fetcher
  );

  // Handle session loading or unauthenticated states
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
    return null; 
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
       await fetch("api/blog", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
          
        }),
      });
  
      mutate(); 
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`api/blog/${id}`, {
        method: "DELETE",
      });
      mutate(); // Remove from cache
    } catch (err) {
      console.log(err);
    }
  };

  if(session.status==="authenticated"){
    return (
      <div className="flex gap-24">
        <div  className="flex-1">
          {isLoading
            ? "loading"
            : 
              data?.map((post) => (
               
               
             
      
                <div class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden mt-10">
                  <div class="relative">
             
                  <Image src={post.img} alt="loading" class="w-full h-48 " width={150} height={100} />
                   
                 
                    <button onClick={()=>handleDelete(post._id)} class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 focus:outline-none">
                    <MdDeleteForever size={20} />
                    </button>
                  </div>
                  <div class="px-6 py-4">
                 
                    <h2 class="text-2xl font-semibold text-gray-800">{post.title}</h2>
                 
                    <p class="text-sm text-gray-600 mt-2 text-justify">{post.content}</p>
                  </div>
                </div>
              
              ))}
        </div>
        <form className="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold">Add New Post</h1>
          <input   className="p-2 bg-transparent border-2 border-gray-300 rounded-md text-md font-medium" type="text" placeholder="Title" />
          <input   className="p-2 bg-transparent border-2 border-gray-300 rounded-md text-md font-medium" type="text" placeholder="Desc" />
          <input type="text"   className="p-2 bg-transparent border-2 border-gray-300 rounded-md text-md font-medium" placeholder="Image" />
          <textarea placeholder="Content" cols="30" rows="10"   className="p-2 bg-transparent border-2 border-gray-300 rounded-md text-md font-medium"></textarea>
          <button className="p-3 bg-green-400 text-white font-medium rounded-md cursor-pointer">Send</button>
        </form>
      </div>
    );
  }
  
};

export default Dashboard;
