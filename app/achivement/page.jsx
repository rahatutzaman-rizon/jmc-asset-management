// Install Tailwind CSS with Next.js by following the official guide at https://tailwindcss.com/docs/guides/nextjs

// pages/achievements.js
import Image from 'next/image';

export default function Achievement() {
  return (
    <div className=" text-primary">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Our Achievement</h1>
        <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </section>

      <section className="flex flex-col md:flex-row items-center py-10 ml-12 ">
    
        <div className="md:w-1/2 p-4">
          <Image src="https://i.ibb.co/djcTRSS/design1.png" alt="Building" width={500} height={300} className="rounded-lg" />
        </div>

        <div className="md:w-1/2 p-4">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center py-10 ml-12">
       
        <div className="md:w-1/2 p-4 order-2 md:order-2">
          <Image src="https://i.ibb.co/djcTRSS/design1.png" alt="Building" width={500} height={300} className="rounded-lg" />
        </div>

        <div className="md:w-1/2 p-4 order-1 md:order-1">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </section>

 
      
    </div>
  );
}
