import Image from "next/image";
import pic1 from "../../../public/apps.jpg";
import pic2 from "../../../public/illustration.jpg";
import pic3 from "../../../public/websites.jpg";
import Link from "next/link";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      image: pic1,
      name: "Mobile Application Development",
      path: "/portfolio/applications",
    },
    {
      id: 2,
      image: pic2,
      name: "Adobe Illustration",
      path: "/portfolio/illustrations",
    },
    {
      id: 3,
      image: pic3,
      name: "Web Development",
      path: "/portfolio/websites",
    },
  ];
  return (
    <>
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-center mb-4">
          Creative Projects from The Future Code
        </h1>
        <p class="text-center text-gray-600 mb-8">
          Welcome to my creative space where innovation meets functionality. At
          The Future Code, I showcase a curated collection of my work, from
          cutting-edge digital projects to thought-provoking blog content. Here,
          you'll find a diverse range of solutions and ideas designed to inspire
          and challenge the future of technology.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolios.map((portfolio) => (
            <Link key={portfolio.id} href={portfolio.path}>
              <div class="relative">
                <Image
                  src={portfolio.image}
                  alt="loading"
                  width={400}
                  height={400}
                  class="w-full h-72 md:h-96 rounded-lg shadow-md"
                />

                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center rounded-lg">
                  <p class="text-white text-lg pb-2 font-semibold hover:text-green-500 md:text-lx">
                    {portfolio.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

export function generateMetadata() {
  return { title: "Portfolio" };
}
