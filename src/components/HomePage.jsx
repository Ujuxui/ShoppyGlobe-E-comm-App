import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src="src\assets\hero-section.jpg"
          alt="Hero section image"
          className="absolute w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center ml-28 text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            GET UP TO <br/>
            60% DISCOUNT
          </h1>
          <p className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing
            <br /> elit. Neque reprehenderit nemo vero provident,
            <br /> dicta quas recusandae.
          </p>
          <button className="mt-10 text-white text-sm sm:text-xl font-semibold border border-violet-700 rounded bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 scale-100 hover:scale-105">
            <Link to="/products">Buy Now</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
