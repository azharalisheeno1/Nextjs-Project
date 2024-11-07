import AboutPic from '../../../public/about.jpg'
import Image from 'next/image'
const About = () => {
  return (
    <>
    
    
    <div class="flex flex-col md:flex-col p-4">
    <div class="relative w-full md:w-full">
        <Image src={AboutPic} alt="loading" width={800} height={800} className="w-full h-64 object-cover rounded-lg"/>
        
        <div className="absolute inset-0 left-0 flex items-end justify-start bg-black bg-opacity-30 text-white text-lg font-bold">
            <h1 className="mx-4 my-4 bg-[#53c28b] p-2 rounded">Digital Storytellers <br />
                <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aliquid?</span>
            </h1>
        </div>
    </div>
    

    <div className="w-full mt-4 md:mt-5 flex gap-20 flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Who Are We?</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify text-md md:text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?</p>
        </div>
        
        <div className="md:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-2">What We Do?</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify text-md md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur. Enim, beatae explicabo voluptas repellendus odit inventore nobis unde corporis.</p>
            
           - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
            <br />        <br />
          
                <button className="bg-green-500 mx-2 text-white py-2 px-4 rounded hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600">Contact </button>
          
        </div>
    </div>
</div>

    
    </>
  )
}

export default About

export function generateMetadata() {
  return { title: "About",  };}