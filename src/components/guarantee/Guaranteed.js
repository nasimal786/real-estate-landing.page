import React from "react";

const Guaranteed = () => {
  return (
    <div className="guarantee mt-6">
      <div className="guarantee-container">
        <div className="guarantee-img">
          <img src="./images/guarantee.jpg" />
        </div>
        <div className="guarantee-text ">
          <h1 className="text-5xl font-bold text-amber-500">
            10% Guranteed Rental Returns And High Capital Appreciation
          </h1>
          <p className="w-2/5 mt-5 text-gray-500">
            Get the best out of your investment with a guaranteed 10% annual
            return on investment (ROI) Book your very own Sobha apartment for
            just 2% of its price.
          </p>
          <div className="guarantee-list">
            <li>
              <span className="guarantee-icon"></span>
              Invest and Get 10 Years Golden Visa
            </li>
            <li>
              <span className="guarantee-icon"></span>
              Obtain Golden Visa with "No Minimum Equity Investment"
            </li>
            <li>
              <span className="guarantee-icon"></span>Invest in "Sobha" Renowned
              Developer of Dubai
            </li>
            <li>
              <span className="guarantee-icon"></span>Sponsor Your Family and
              House Help
            </li>
            <li>
              <span className="guarantee-icon"></span>Tax Free Investment and
              Profits
            </li>
            <li>
              <span className="guarantee-icon"></span>Luxury Lifestyle Community
              Facing Golf Course
            </li>
          </div>
          <button className="guarantee-btn">Let's Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Guaranteed;
