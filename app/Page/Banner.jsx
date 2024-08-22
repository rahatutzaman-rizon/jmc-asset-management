const Banner = () => {
    return (
      <div className="relative h-[80vh] flex items-center justify-start px-8 md:px-12 lg:px-24">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://i.ibb.co/HNHYnfW/sophie-Gz3iikctf-Ew-unsplash.jpg')`, opacity: 0.4 }}
        ></div>
  
        {/* Text Content */}
        <div className="relative max-w-2xl ml-24">
          <p className="text-lg font-semibold text-[#4f89c1] uppercase tracking-widest">
            Discover | Dream | Live
          </p>
          <h1 className="mt-2 text-6xl font-bold text-[#001659] leading-tight">
            Unlock Your Ideal Space
          </h1>
          <p className="mt-4 text-lg text-[#4f89c1]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>
          <button className="mt-8 px-6 py-3 border-2 border-[#001659] text-[#001659] font-semibold rounded-lg hover:bg-[#001659] hover:text-white transition-colors">
            See More
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  