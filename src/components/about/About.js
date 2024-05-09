import React, { useState } from "react";

export const About = () => {
  const [openSection, setOpenSection] = useState(null);
  const data = [
    {
      title: "Starting From AED 1.4M",
      details:
        "Book now with 2% only and get 10% guranteed rental returns and high capital appreciation.",
    },
    {
      title: "The Perfect Residency",
      details:
        "Sobha One is located just 8 minutes away from Burj Khalifa & Dubai and offering world-class services.",
    },
    {
      title: "Elegant And Refined Interiors",
      details:
        "Each Sobha One apartment beckons is studded with all the amenities that come with luxury living.",
    },
  ];

  function handleClick(title) {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === title ? null : title
    );
  }

  return (
    <div className="about">
      <div className="about_content">
        <div className="about_image">
          <img src="./images/about.jpg" alt="about" width="400px" />
        </div>
        <div className="about_text">
          <h1 className="text-amber-500 text-4xl font-bold ">
            Sobha One
            <span className="text-black">
              - Perfect Fusion <br />
              Of Luxury & Golf
            </span>
          </h1>
          <hr className="line1" />
          <p className="text-slate-500 mt-8">
            Introducing exclusive collection of 1 to 4 bedroom apartments and
            each unit is meticulously crafted facing lush green private golf
            course along with leisure amenities nestled at the podium level.
          </p>
          {data.map((item, index) => (
            <div className="mt-7" key={index}>
              <div className="sections">
                <div className="sections-text">
                  <p className="text-blue-600 text-xl font-semibold">
                    {item.title}
                  </p>
                  <span
                    onClick={() => handleClick(item.title)}
                    className="icon"
                  >
                    {openSection === item.title ? " -" : "+"}
                  </span>
                </div>
                <div>{openSection === item.title && <p>{item.details}</p>}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
