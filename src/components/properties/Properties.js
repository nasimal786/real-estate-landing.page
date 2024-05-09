import React from "react";

const Properties = () => {
  return (
    <section class="text-gray-600 mt-6 body-font p-8">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-amber-500 font-extrabold lg:w-1/3 lg:mb-0 mb-4">
          We ,<span className="text-gray-900">create a safe and enjoyable place for family.  </span> <hr className="line1"/></h1>
          
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-sm">
            Because the homes are placed around the edge of the parks, residents
            will have unobstructed views of the lush vegetation. Choose from
            elegantly built 3 and 4-bedroom townhouses, as well as 3 and
            4-bedroom plus family townhouses, all with open and flowing
            interiors, excellent finishes, and private gardens to begin writing
            the next chapter in your life. You will also have access to the
            social zone, natural play area, activity zone, and wellness hub,
            each with its unique set of amenities.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery-1"
                class="w-full object-cover h-full object-center block"
                src="./images/pro1.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery-2"
                class="w-full object-cover h-full object-center block"
                src="./images/pro2.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery-3"
                class="w-full h-full object-cover object-center block"
                src="./images/pro3.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery-4"
                class="w-full h-full object-cover object-center block"
                src="./images/pro4.jpeg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery-5"
                class="w-full object-cover h-full object-center block"
                src="./images/pro5.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery-6"
                class="w-full object-cover h-full object-center block"
                src="./images/pro6.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
