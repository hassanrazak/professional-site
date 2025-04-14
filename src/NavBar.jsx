const NavBar = () => {
  return (
    <>
      <section>
        <nav className="relative py-6 bg-gray-400 t z-50">
          <div className="container px-4 mx-auto">
            <div className="flex items-center">
              <div className="lg:hidden ml-auto">
                <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-900 hover:bg-gray-200 rounded-md transition duration-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 6H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 18H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-14">
                <li>
                  <a
                    className="inline-block text-xl text-gray-900 hover:text-orange-900 font-semibold"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="inline-block text-xl text-gray-900 hover:text-orange-900 font-semibold"
                    href="#"
                  >
                    Projects
                  </a>
                  <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
                    <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="w-full max-w-xs bg-gray-400 border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                      <a
                        className="block py-3 px-4 text-lg text-gray-900 hover:bg-orange-50 rounded-lg"
                        href="#"
                      >
                        Project 1
                      </a>
                      <a
                        className="block py-3 px-4 text-lg text-gray-900 hover:bg-orange-50 rounded-lg"
                        href="#"
                      >
                        Project 2
                      </a>
                      <a
                        className="block py-3 px-4 text-lg text-gray-900 hover:bg-orange-50 rounded-lg"
                        href="#"
                      >
                        Project 3
                      </a>
                      <a
                        className="block py-3 px-4 text-lg text-gray-900 hover:bg-orange-50 rounded-lg"
                        href="#"
                      >
                        Project 4
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    className="inline-block text-xl text-gray-900 hover:text-orange-900 font-semibold"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
