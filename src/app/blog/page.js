import Image from "next/image";
import Link from "next/link";
import axios from "axios";

async function BlogList() {
  try {
    const response = await axios.get("http://localhost:3000/api/blog");
    return response.data; // Adjust this based on your actual API response structure
   
 
  } catch (error) {
    
    console.error("Error fetching data:", error);
    throw new Error("Error fetching blog data");
  }
}

const page = async () => {
  const data = await BlogList();

  return (
    <>
      <div className="w-full mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-4">My Blog</h1>
        <p className="text-center text-gray-600 mb-10">
          Welcome to my blog! Here are my latest posts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post) => (
            <Link key={post._id} href={`/blog/${post._id}`}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  src={post.img}
                  alt="loading"
                  width={400}
                  height={200}
                  className=" rounded-t-lg"
                />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.date}
                  </p>
                  <button className="bg-green-400 px-3 py-1 rounded-full">
                    See More Detail
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;


export function generateMetadata() {
  return { title: "Blogs",  };}
  