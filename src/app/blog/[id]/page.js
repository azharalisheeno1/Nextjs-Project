
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getBlogData(_id) {
    const res = await fetch(`http://localhost:3000/api/blog/${_id}`);
    
    // Check if the response is okay and handle errors
    if (!res.ok) {
        return notFound()
    }
    
    const Data = await res.json();
    return Data.result; // Return the post directly, since it should be an object
}


async function Page  ({ params })  {
    const data = await getBlogData( params.id ); // Pass params to the function
    console.log(data)
    

    return (
        <>
       

       
       <div className=" w-full mx-auto px-4 py-10">
    <div className="flex flex-col md:flex-row transition-all md:gap-10 duration-300 ease-in-out">
        <div className="flex-1 flex flex-col justify-between p-4 bg-white   transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="text-base md:text-lg text-justify">{data.desc}</p>
            <p className="text-lg font-light">{data.date}</p>
            <div className="flex items-center gap-2 mt-4">
                <Image
                    src={data.img}
                    alt="loading"
                    width={40}
                    height={20}
                    className=" h-10 w-10 rounded-full"
                />
                <span className="text-gray-700">{data.username}</span>
            </div>
        </div>
        <div className="flex-1 h-72 relative mt-4 md:mt-0">
            <Image
                src={data.img}
                alt="loading"
                width={700}
                height={400}
                className="object-cover rounded-lg transition-transform duration-500 hover:scale-110"
            />
        </div>
    </div>
</div>

        </>
    );
};

export default Page;


export function generateMetadata({params}) {
    return { title: params.title,  };}
    