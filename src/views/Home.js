function Home() {
  return (
    <div className="p-4">
      <div className="container mx-auto px-4">
        <div className="flex mx-24 mt-14">
          <div>
            <h4 className="text-6xl font-bold text-gray-700">Hi,</h4>
            <h4 className="text-6xl font-bold text-gray-700">
              I'm{" "}
              <span className="text-8xl font-bold text-gray-700">
                <span className="text-gray-900 bg-gray-100 hover:bg-gray-900 hover:text-gray-100 transition-colors duration-200">
                  R
                </span>
                eno,
              </span>
            </h4>
            <h4 className="text-6xl font-bold text-gray-700 mb-5">
              web developer
            </h4>
            <h4 className="text-2xl font-fira font-semibold text-gray-400 mb-16">
              Full-Stack Developer || Tech Enthusiast{""}
              <span className="animate-ping">|</span>
            </h4>
            <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 transition ease-in-out duration-200 text-lg font-bold py-2 px-4 focus:outline-none">
              <span>Contact me!</span>
            </button>
          </div>
          <div>
            <span>Test</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
