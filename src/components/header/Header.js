import React from "react";

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="https://twitter.com/knyttneve" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-amber-400 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 font-bold text-xl">SOBHA</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="https://twitter.com/knyttneve" class="mr-5 font-bold hover:text-gray-900">Home</a>
          <a href="https://twitter.com/knyttneve" class="mr-5 font-bold hover:text-gray-900">About</a>
          <a href="https://twitter.com/knyttneve" class="mr-5 font-bold hover:text-gray-900">Payment Plan</a>
          <a href="https://twitter.com/knyttneve" class="mr-5 font-bold hover:text-gray-900">Floor Plan</a>
          <a href="https://twitter.com/knyttneve" class="mr-5 font-bold hover:text-gray-900">Amenities</a>
          <a href="https://twitter.com/knyttneve" class="mr-5 font-bold hover:text-gray-900">Contact</a>
        </nav>
        <button class="inline-flex items-center bg-amber-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Register Now
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
