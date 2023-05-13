import React from "react";
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
      <section className="bg-gray-200">
        <div>
          <div>
            {/* for main banner */}
            <div>
              {/* for getting the text over the image make the div of image position relative and div section of text make position absolute */}
              <div className="relative max-w-lg max-h-lg mb-10 mt-10 ml-10 ">
                <img src="images/main-banner.jpg" alt=" main banner" className="rounded-lg" />
                {/* for getting the text over the image */}
                <div className="absolute  text-gray-700 top-5 left-5">
                  <p className="text-lg font-bold">Super Charged for Pros</p>
                  <h1>iPad S13+ Pro</h1>
                  <p> From $899.00 or $38.99/mo.</p>
                  <p>for 24 months</p>
                  <Link>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home