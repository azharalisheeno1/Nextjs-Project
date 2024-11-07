import Image from "next/image";
import pic from "../../public/code.png";
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-600 via-green-500 to-black inline-block text-transparent bg-clip-text ">
            Welcome to The Future Code Unlocking Tomorrow’s Technology Today
          </h1>
          <p className="text-lg mb-6 text-justify">
            At The Future Code, we explore the latest innovations and trends
            shaping the world of technology. From artificial intelligence and
            blockchain to programming and the digital transformation of
            industries, our blog offers insightful articles for tech
            enthusiasts, developers, and entrepreneurs. Stay updated with
            cutting-edge developments and gain valuable insights into the future
            of tech.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            See our works
          </button>
        </div>
        <div className="md:w-1/3   mt-8 md:mt-0">
          <Image
            src={pic} // Replace with your image path
            alt="Descriptive alt text"
            width={400} // Set desired width
            height={300} // Set desired height
            className="object-cover   h-auto"
          />
        </div>
      </div>
    </>
  );
}

export function generateMetadata() {
  return { title: "Home Page" };
}
