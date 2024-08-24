// Install Tailwind CSS with Next.js by following the official guide at https://tailwindcss.com/docs/guides/nextjs

// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-black h- text-white">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex justify-between">
            <div>
              <h2 className="text-green-500 text-xl font-bold">JMC Group</h2>
              <p>JMC Asset Management Ltd.</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>MN Tower, House# F-6/1A,</p>
              <p>Aftabnagar, Road# 6A,</p>
              <p> Dhaka-1212,</p>
              <p>Bangladesh</p>
            </div>
            <div>
              <h3 className="font-semibold">Navigate</h3>
              <a href="#" className="block">About Us</a>
              <a href="#" className="block">Projects</a>
              <a href="#" className="block">Our Achievements</a>
              <a href="#" className="block">Contacts</a>
            </div>
            <div>
              <h3 className="font-semibold">Hotline</h3>
              <p>+880 1234 56789</p>
              <p>jmc.asset@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  