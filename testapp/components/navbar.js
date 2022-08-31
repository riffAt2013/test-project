import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-amber-400">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="flex items-center">
              <div className="text-3xl text-blue-600 font-bold">
                <Link href="/">
                  <a> MakeYourMeal </a>
                </Link>
              </div>

              <div className="hidden lg:block">
                <div className="ml-8 flex space-x-16">
                  <Link href="/about">
                    <a className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                      About Me
                    </a>
                  </Link>

                  <div className="input-group flex">
                    <input
                      className="px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                      type="search"
                      placeholder="Search"
                    />
                    <button
                      className="btn flex px-6 py-2.5 bg-orange-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-orange-800  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out items-center"
                      type="button"
                      id="button-addon2"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        className="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-orange-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-8 text-center sm:px-3"
              >
                <Link href="/">
                  <a className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold">
                    About Me
                  </a>
                </Link>

                <div className="input-group flex justify-center">
                  <input
                    className="px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600  focus:outline-none"
                    type="search"
                    placeholder="Search"
                  />
                  <button
                    className="btn flex px-6 py-2.5 bg-orange-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-orange-800  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
