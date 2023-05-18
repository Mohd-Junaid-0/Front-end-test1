/* eslint-disable react/no-unescaped-entities */
import{Link } from 'react-router-dom'; 

const BlogCard = () => {
  return (
    <div className="max-h-xl mb-10">
      <div>
        <div>
          <div>
            <div className="flex">
              <div className="px-4  ">
                <div className=" bg-gray-200 h-[450px] rounded-md">
                  <img
                    src="/images/blog-1.jpg"
                    alt=" blog image"
                    className="h-[250px] pb-2 "
                  />
                  <p className="font-thin text-sm pl-2"> 11 Jan 2023</p>
                  <p className="font-bold text-lg pl-2">
                    A Beautiful Sunday Morning Renaissance
                  </p>
                  <p className="font-sm text-gray-500 mb-3 pl-2">
                    I am happy after buying my VR from
                    <br />
                    Junni's eComm website.
                    <br />
                    Product is same as shown on the website.
                  </p>
                  <div className="pl-2">
                    <Link
                      to="/"
                      className="bg-black text-white rounded-md py-1 px-2 mb-2 "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" bg-gray-200 h-[450px] rounded-md">
                <img
                  src="/images/blog-2.jpg"
                  alt=" blog image"
                  className="h-[250px] pb-2 "
                />
                <p className="font-thin text-sm pl-2"> 09 Feb 2023</p>
                <p className="font-bold text-lg pl-2">
                  Better UI for great experience
                </p>
                <p className="font-sm text-gray-500 mb-3 pl-2">
                  I am happy user of
                  <br />
                  Junni's eComm website.
                  <br />
                  it easy to use and give a unique feel
                </p>
                <div className="pl-2 pt-6">
                  <Link
                    to="/"
                    className="bg-black text-white rounded-md py-1 px-2 mb-2 "
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className='ml-4'>
                <div className=" bg-gray-200 h-[450px] rounded-md">
                  <img
                    src="/images/blog-3.jpeg"
                    alt=" blog image"
                    className="h-[250px] pb-2 w-[400px] "
                  />
                  <p className="font-thin text-sm pl-2"> 24 Feb 2023</p>
                  <p className="font-bold text-lg pl-2">Happy Customer's</p>
                  <p className="font-sm text-gray-500 mb-3 pl-2">
                    I am happy after using
                    <br />
                    Junni's eComm website.
                    <br />
                    and i am fully satisfied from all the services.
                  </p>
                  <div className="pl-2 pt-6">
                    <Link
                      to="/"
                      className="bg-black text-white rounded-md py-1 px-2 mb-2 "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className='mx-4'>
                <div className=" bg-gray-200 h-[450px] rounded-md">
                  <img
                    src="/images/blog-4.jpg"
                    alt=" blog image"
                    className="h-[250px] pb-2 w-[400px] "
                  />
                  <p className="font-thin text-sm pl-2"> 02 March 2023</p>
                  <p className="font-bold text-lg pl-2">Product Review</p>
                  <p className="font-sm text-gray-500 mb-3 pl-2">
                    I bought a Rolex Watch from 
                    <br />
                    Junni's eComm website.
                    <br />
                    and i received the original one.
                  </p>
                  <div className="pl-2 pt-6">
                    <Link
                      to="/"
                      className="bg-black text-white rounded-md py-1 px-2 mb-2 "
                    >
                      Read More
                    </Link>
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

export default BlogCard