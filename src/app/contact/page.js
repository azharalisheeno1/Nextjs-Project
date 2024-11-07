
import Image from "next/image";
import pic from '../../../public/contact.png'
const Contact = () => {
  return (
    <>
    <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold text-center mb-8">Let's Keep In Touch</h1>
    
    <div class="flex flex-col md:gap-20 md:flex-row-reverse items-start">

        <div class="md:w-1/3 animate-pulse mb-6 md:mb-0">
        <Image src={pic} alt="loading"  class="w-full h-auto rounded-lg"  />
           
        </div>

    
        <div class="md:w-1/2 w-full">
            <form class="bg-white p-6 rounded-lg ">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
                </div>
                
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
                </div>
                
                <div class="mb-4">
                    <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea id="message" name="message" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Your Message"></textarea>
                </div>
                
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>

    
    </>
  )
}

export default Contact

export function generateMetadata() {
  return { title: "Contact",  };}