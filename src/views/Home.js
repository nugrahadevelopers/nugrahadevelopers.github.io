import { Link } from "react-router-dom";

function Home() {
  const widthStyle = {
    width: "50px",
  };

  // const heightStyle = {
  //   height: "1.125rem",
  // };

  return (
    <div className="p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:mx-24 mt-14">
          <div className="mb-6 md:w-1/2 md:mr-4">
            <h4 className="text-3xl md:text-6xl font-bold text-gray-700">
              Hi,
            </h4>
            <h4 className="text-3xl md:text-6xl font-bold text-gray-700">
              I'm{" "}
              <span className="text-4xl md:text-8xl font-bold text-gray-700">
                <span className="text-gray-900 bg-gray-100 hover:bg-gray-900 hover:text-gray-100 transition-colors duration-200">
                  R
                </span>
                eno,
              </span>
            </h4>
            <h4 className="text-3xl md:text-6xl font-bold text-gray-700 mb-5">
              web developer
            </h4>
            <h4 className="text-lg md:text-2xl font-fira font-semibold text-gray-400 mb-4 md:mb-16">
              Full-Stack Developer || Tech Enthusiast{""}
              <span className="animate-ping">|</span>
            </h4>
            <Link to="/contact">
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 transition ease-in-out duration-200 text-lg font-bold py-2 px-4 focus:outline-none">
                <span>Contact me!</span>
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="mx-auto">
              <div className="relative overflow-hidden rounded-xl shadow-2xl flex bg-light-blue-500 pb-0">
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                <div className="relative w-full flex flex-col">
                  <div className="flex-none h-11 flex items-center px-4">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                      <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
                      <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                    </div>
                  </div>
                  <div className="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col">
                    <div
                      className="block absolute inset-y-0 left-0 bg-black bg-opacity-25"
                      style={widthStyle}
                    ></div>
                    <div className="w-full flex-auto flex min-h-0 overflow-auto">
                      <div className="w-full relative flex-auto">
                        <div className="flex min-h-full text-sm">
                          <div
                            className="block text-white text-opacity-50 flex-none py-4 pr-4 text-right select-none"
                            style={widthStyle}
                          >
                            01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16
                          </div>
                          <div className="flex relative text-white pt-4 pb-4 px-4 css-type-scroll">
                            <div className="css-typing font-fira text-sm">
                              <p>
                                {
                                  "<div className='text-6xl font-bold text-gray-700'>Hai,</div>"
                                }
                              </p>
                              <p className="ml-4">
                                {
                                  "<div className='text-6xl font-bold text-gray-700'>I'm"
                                }
                              </p>
                              <p className="ml-4">
                                {
                                  "<span className='text-8xl font-bold text-gray-700'>"
                                }
                              </p>
                              <p className="ml-8">
                                {
                                  "<span className='text-gray-900 bg-gray-100 hover:bg-gray-900 hover:text-gray-100 transition-colors duration-200'>"
                                }
                              </p>
                              <p className="ml-8 text-red-500">{"Reno,"}</p>
                              <p className="ml-4">{"</span>"}</p>
                              <p className="ml-4">
                                {
                                  "<h4 className='text-6xl font-bold text-gray-700 mb-5'>"
                                }
                              </p>
                              <p className="ml-8 text-red-500">
                                {"web developer"}
                              </p>
                              <p className="ml-4">{"</h4>"}</p>
                              <p className="ml-4">
                                {
                                  "<h4 className='text-2xl font-fira font-semibold text-gray-400 mb-16'>"
                                }
                              </p>
                              <p className="ml-8 text-red-500">
                                {"Full-Stack Developer || Tech Enthusiast"}
                              </p>
                              <p className="ml-4">{"</h4>"}</p>
                              <p className="ml-4">
                                {
                                  "<button className='border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 transition ease-in-out duration-200 text-lg font-bold py-2 px-4 focus:outline-none'>"
                                }
                              </p>
                              <p className="ml-8 text-red-500">
                                {"Contact me!"}
                              </p>
                              <p className="ml-4">{"</button>"}</p>
                              <p>{"</div>"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
