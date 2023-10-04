import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-white shadow dark:bg-green-500">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              class="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tales of Finice
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {/* <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  class="mr-4 text-white hover:text-black font-bold md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mr-4 text-white hover:text-black font-bold md:mr-6"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mr-4 text-white hover:text-black font-bold md:mr-6"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-black sm:text-center dark:text-black">
            © 2023{" "}
            <a href="/" class="hover:underline">
              Tales of Finice
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
