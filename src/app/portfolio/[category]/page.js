
import { notFound } from "next/navigation";
import { items } from "./data";
import Image from "next/image";

const getData=(cat)=>{
const Data=items[cat]
if(Data){
  return Data
}
  return notFound()
}

function page({ params }) {
const ItemsData=getData(params.category)
  return (
    <>
     
    
      <div className=" w-full mx-auto  py-8 p-3">
        <h1 className="text-2xl md:text-5xl  font-bold  mb-4">Our Work</h1>
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-gray-600 via-green-500 to-gray-400 inline-block text-transparent bg-clip-text">
          {params.category}
        </h2>

        <div className="space-y-20 ">
        {ItemsData.map((item,index)=>
         <div key={item.id} className={`flex flex-col gap-10   items-center  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
         <div className="md:w-1/2 mb-4 md:mb-0 ">
           <Image src={item.image} alt={item.title} width={500} className="w-full h-80" height={500} />
    
         </div>
         <div className="md:w-1/2 md:pl-0">
           <h3 className="text-xl font-bold mb-2">
            {item.title}
           </h3>
           <p className="text-gray-700 mb-4">
            {item.desc}
           </p>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
             Learn More
           </button>
         </div>
       </div>
        
        )}
         
         

        
        </div>
      </div>
    </>
  );
}

export default page;
export function generateMetadata({params}) {
  return { title: params.category,  };}
  