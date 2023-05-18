import React from "react";
import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
const Home = () => {
  return (
    <>
      <section className="">
        <div>
          <div className="flex justify-evenly laptop:grid-cols-3 mobile:grid-cols-2 desktop:grid-cols-4">
            {/* for main banner */}
            <div>
              {/* for getting the text over the image make the div of image position relative and div section of text make position absolute */}
              <div className="relative max-w-[610px] max-h-2xl mb-10 mt-10 ">
                <img
                  src="images/main-banner.jpg"
                  alt=" main banner"
                  className="rounded-lg"
                />
                {/* for getting the text over the image */}
                <div className="absolute  text-gray-700 top-5 left-5">
                  <p className="text-lg text-red-400 font-bold mt-4  mobile:text-red-400 mobile:text-sm mobile:font-thin  mobile:mt-0">
                    Super Charged for Pros
                  </p>
                  <h1 className="text-3xl mb-2 mt-10 mobile:text-sm mobile:mt-0">
                    iPad S13+ Pro
                  </h1>
                  <p className="mt-6 italic mobile:text-sm mobile:mt-0">
                    {" "}
                    From $899.00 or $38.99/mo.
                  </p>
                  <p className="mb-10 italic mobile:text-sm mobile:mt-0">
                    for 24 months
                  </p>
                  <Link className="bg-blue-400 sticky text-white rounded-md pl-2 pr-2 pt-2 pb-2 mt-96 hover:text-white hover:bg-indigo-500 mobile:text-sm mobile:mt-1 text-sm">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
            {/* for side banner 1 */}
            <div>
              <div>
                <div className="relative">
                  <img
                    src="images/catbanner-01.jpg "
                    alt=" cat banner"
                    className="max-w-[300px] max-h-[300px] rounded-md mt-10 ml-4 "
                  />
                  <div className="absolute top-6 left-6 ml-4">
                    <p className="font-bold text-lg text-red-300">Best Sale</p>
                    <p className="font-bold text-xl">Laptop Max</p>
                    <p className="italic">From $1199.00</p>
                    <p className="italic">or $54.99 / Mo.</p>
                  </div>
                </div>
              </div>
              {/* for side banner 2 */}
              <div>
                <div>
                  <div className="relative">
                    <img
                      src="images/catbanner-02.jpg"
                      alt="cat banner 2"
                      className="max-w-[300px] max-h-[300px] rounded-md mt-2 ml-4"
                    />
                    <div className="absolute top-5 left-5 ml-4">
                      <p className="text-red-300 ">New Launches</p>
                      <p className="font-bold text-xl"> iPad Air</p>
                      <p className="italic"> from $899</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* for banner 3 */}
            <div>
              <div>
                <div className="relative mt-10">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="for banner 3"
                    className="max-w-[300px] max-h-[300px] rounded-md mt-10 ml-2"
                  />
                  <div className="absolute top-5 left-5 ml-4 ">
                    <p className="text-red-300"> New Arrivals</p>
                    <p className="font-bold text-xl"> iWatch series 4</p>
                    <p className="italic"> from $ 599</p>
                  </div>
                </div>
                <div>
                  {/* banner 4 */}
                  <div className="relative mt-2">
                    <img
                      src="images/catbanner-04.jpg"
                      alt="for banner 4"
                      className="max-w-[300px] max-h-[300px] rounded-md mt-2 ml-2"
                    />
                    <div className="absolute top-5 left-5 ml-3 ">
                      <p className="text-red-300">New Launches</p>
                      <p className="font-bold text-lg "> airPod Max</p>
                      <p className="italic "> from $ 1999</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section for shipping, support and other services */}
      <section className="bg-gray-200 h-25 mb-5 pl-5">
        <div>
          <div className="">
            <div className=" pt-0 ml-10 ">
              <div className=" flex">
                {/* for shipping image */}
                <div className="flex">
                  <div>
                    <img
                      src="images/service.png"
                      alt="shipping"
                      className="pt-5 mr-2"
                    />
                  </div>
                  <div>
                    <p className="ml-2 pt-2 text-xl">Free Shipping</p>
                    <p className="ml-2 pt-1">From all order over $100</p>
                  </div>
                </div>
                {/* for offer */}
                <div className="flex ml-10">
                  <div>
                    <img
                      src="images/service-02.png"
                      alt="offers"
                      className="pt-5 mr-2"
                    />
                  </div>
                  <div>
                    <p className="ml-2 pt-2 text-xl">Daily Surprise Offer</p>
                    <p className="ml-2 pt-1">Save upto 25% off</p>
                  </div>
                </div>
                {/* for customer support */}
                <div className="flex ml-10">
                  <div>
                    <img
                      src="images/service-03.png"
                      alt="customer support"
                      className="pt-5 mr-2"
                    />
                  </div>
                  <div>
                    <p className="ml-2 pt-2 text-xl">Support 24/7</p>
                    <p className="ml-2 pt-1">Shop with an expert</p>
                  </div>
                </div>
                {/* for prices */}
                <div className="flex ml-10">
                  <div>
                    <img
                      src="images/service-04.png"
                      alt="Prices"
                      className="pt-5 mr-2"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="ml-2 pt-2 text-xl">Affordable Prices</p>
                      <p className="ml-2 pt-1">Get factory direct prices</p>
                    </div>
                  </div>
                </div>
                {/* for secure payments */}
                <div className="flex ml-10">
                  <div>
                    <img
                      src="images/service-05.png"
                      alt="payments"
                      className="pt-5 mr-2"
                    />
                  </div>
                  <div>
                    <p className="ml-2 pt-1 text-xl">Secure Payments</p>
                    <p className="ml-2 pt-0">
                      100% Protected Payment with <br /> 256 bit Encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className=" bg-gray-0 shadow-2xl max-w-fit pl-16 mobile:justify-center">
        <div>
          <div>
            <div className="shadow-lg ">
              <div className="grid grid-cols-5 divide-x-2">
                <div className="flex ">
                  <div>
                    <p className="text-lg ml-2 mt-4">Computer & Laptops</p>
                    <p className="ml-2 mt-2">8 items</p>
                  </div>
                  <div>
                    <img
                      src="images/laptop.jpg"
                      alt="laptop image"
                      className="w-20  h-20 ml-0"
                    />
                  </div>
                </div>
                <div className="flex divide-x-0">
                  <div>
                    <p className="text-lg ml-2 mt-4">Camera & Videos</p>
                    <p className="ml-2 mt-2">10 items</p>
                  </div>
                  <div>
                    <img
                      src="images/camera.jpg"
                      alt="laptop image"
                      className="w-20  h-20 ml-4"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="text-lg ml-4 mt-4">Smart TVs</p>
                    <p className="ml-4 mt-2">13 items</p>
                  </div>
                  <div>
                    <img
                      src="images/tv.jpg"
                      alt="laptop image"
                      className="w-20  h-20 ml-16"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="text-lg ml-2 mt-4">Smart Watches</p>
                    <p className="ml-2 mt-2">21 items</p>
                  </div>
                  <div>
                    <img
                      src="images/watch.jpg"
                      alt="laptop image"
                      className="w-25  h-20 ml-8"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="text-lg ml-2 mt-4">Game & Music</p>
                    <p className="ml-2 mt-2">18 items</p>
                  </div>
                  <div>
                    <img
                      src="images/game.jpeg"
                      alt="laptop image"
                      className=" w-20  h-20 ml-12"
                    />
                  </div>
                </div>
              </div>
              {/* for creating the horizontal line */}
              <hr />
              {/* for second part*/}
              <div className="grid grid-cols-5 divide-x-2">
                <div className="flex">
                  <div>
                    <p className="text-lg ml-2 mt-4">Mobile & Tablates</p>
                    <p className="ml-2 mt-2">10 items</p>
                  </div>
                  <div>
                    <img
                      src="images/mobiles.jpg"
                      alt="laptop image"
                      className="w-30  h-20 ml-4"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="text-lg ml-2 mt-4">Camera & Videos</p>
                    <p className="ml-2 mt-2">10 items</p>
                  </div>
                  <div>
                    <img
                      src="images/headphone.jpg"
                      alt="laptop image"
                      className="w-20  h-20 ml-4"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="text-lg ml-2 mt-4">Camera & Videos</p>
                    <p className="ml-2 mt-2">10 items</p>
                  </div>
                  <div>
                    <img
                      src="images/acc.jpg"
                      alt="laptop image"
                      className=" w-20 w-20 ml-4"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="text-lg ml-2 mt-4">Camera & Videos</p>
                    <p className="ml-2 mt-2">10 items</p>
                  </div>
                  <div>
                    <img
                      src="images/speaker.jpg"
                      alt="laptop image"
                      className="w-20  h-20 ml-4"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="text-lg ml-2 mt-4">Camera & Videos</p>
                    <p className="ml-2 mt-2">10 items</p>
                  </div>
                  <div>
                    <img
                      src="images/homeapp.jpg"
                      alt="laptop image"
                      className="w-20  h-20 ml-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* for featured collection  section 4 */}
      <section className="mt-5">
        {/* use marquee to make the moving content in x-direction */}
        {/* marquee->
                  for creating the card for moving to the along x-axis
                  1. direction="left / right / up / down ";
                  2. behavior="scroll / slide / alternate";
                  for speed->
                  3. scrollamount="10/20 / or any integer";
                  4. scrolldelay="10/ 30/ any integer";
                  5. onmouseover="stop()"
                  5. onmouseout="start()"
                  */}
        <Marquee>
          <div>
            <div className="flex">
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-01.png" alt="Brand" />
              </div>
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-02.png" alt="Brand" />
              </div>
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-03.png" alt="Brand" />
              </div>
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-04.png" alt="Brand" />
              </div>
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-05.png" alt="Brand" />
              </div>
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-06.png" alt="Brand" />
              </div>
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-07.png" alt="Brand" />
              </div>
              <div className="w-20 h-20 ml-5 mr-5">
                <img src="images/brand-08.png" alt="Brand" />
              </div>
            </div>
          </div>
        </Marquee>
      </section>
      {/* SECTION for featured products */}
      <section>
        <div>
          <div>
            <div>
              <div className="my-6">
                <div>
                  <p className="text-xl font-bold mb-4">Featured Collections</p>
                </div>
                <div>
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* for special products */}
      <section>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <p className="text-xl font-bold mt-4">Special Products</p>
                  </div>
                  <div>
                    <SpecialProduct />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* for latest news */}
      <section>
        <div>
          <div>
            <div>
              <div>
                <p className=" font-bold text-xl pb-4 ml-4">Our Latest News</p>
              </div>
              <div className="flex">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home