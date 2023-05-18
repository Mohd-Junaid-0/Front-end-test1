/* eslint-disable react/no-unescaped-entities */
/* esLinknt-disable no-unused-vars */
/* esLinknt-disable react/no-unescaped-entities */

import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link} from 'react-router-dom'; 
const Footer = () => {
  return (
    <>
      {/* footer one */}
      <footer className="bg-gray-700 h-20">
        <div>
          <div>
            <div className="flex text-white pt-6 justify-center">
              <img
                src="/images/newsletter.png"
                alt="new latter"
                className="mr-4"
              />
              <h2 className="mt-3 text-lg">SignUp for News Latter</h2>
              <div className="ml-32 mt-2">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-96 h-8 pl-2 rounded-md text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      {/* footer 2 */}
      <footer className="bg-gray-700 h-80 pt-4">
        <div>
          <div>
            <div className="text-white font-bold flex">
              <h1 className="ml-20  text-lg">Information</h1>
              <h1 className="ml-40 text-lg">Account</h1>
              <h1 className="ml-40 text-lg">Quick Links</h1>
              <h1 className="ml-32 text-lg">Contact Us</h1>
            </div>
          </div>
          {/* for information  */}
          <div className="flex text-white pb-4">
            <div>
              <div className="grid grid-rows-5 ml-20  mt-6">
                <Link className="mt-2" to="/privacyPolicy">
                  Privacy Policy
                </Link>
                <Link className="mt-2" to="/refundPolicy">
                  Refund Policy
                </Link>
                <Link className="mt-2" to="/shoppingPolicy">
                  Shopping Policy
                </Link>
                <Link className="mt-2" to="/serviceTerms">
                  Terms of Service
                </Link>
                <Link className="mt-2" to="/Blog">
                  Blogs
                </Link>
              </div>
            </div>
            {/* for account info */}
            <div>
              <div className="grid grid-gap-0 grid-cols-1 grid-rows-5 ml-36 mt-6">
                <Link className="pt-2" to="/Search">
                  Search
                </Link>
                <Link className="pt-2" to="/aboutUs">
                  About Us
                </Link>
                <Link className="pt-2" to="/faq">
                  Faq
                </Link>
                <Link className="pt-2" to="/contact">
                  Contact
                </Link>
                <Link className="pt-2" to="/sizeChart">
                  Size Chart
                </Link>
              </div>
            </div>
            {/* for quick links */}
            <div>
              <div>
                <div className="grid grid-gap-0 grid-cols-1 grid-rows-5 ml-36 mt-6">
                  <Link className="pt-2" to="/accessories">
                    Accessories
                  </Link>
                  <Link className="pt-2" to="/laptop">
                    Laptops
                  </Link>
                  <Link className="pt-2" to="/headPhones">
                    HeadPhones
                  </Link>
                  <Link className="pt-2" to="/smartWatches">
                    Smart Watches
                  </Link>
                  <Link className="pt-2" to="/tablet">
                    Tablets
                  </Link>
                </div>
              </div>
            </div>
            {/* for contact */}
            <div>
              <div>
                <div className="text-white ml-28 mt-8">
                  <address >
                    <p>Okhla</p>
                    <p>New delhi, 110025</p>
                    
                  </address>
                  <a href="tel: +91 9030858492">+91 9030858492</a>
                  <br/>
                  <a href="mailto:alijunaisd899@gmail.com">
                  alijunaisd899@gmail.com
                  </a>
                </div>
                {/* for social media links */}
                <div className="flex ml-28 mt-4">
                  <a href="http://www.linkedin.com/in/mohd-junaid-982039175"><BsLinkedin className="mr-4 text-blue-200 w-6 h-6"/></a>
                  <a href="http://www.github.com/Mohd-Junaid-0"><BsGithub className="mr-4 text-gray-400 w-6 h-6"/></a>
                  <a href=""><BsYoutube className="mr-4 text-red-500 w-8 h-6" /></a>
                  <a href=""><BsInstagram className="mr-4 text-red-300 w-6 h-6"/></a>

                </div>
              </div>
            </div>
          </div>
          <hr/>
          {/* for our app */}
          <div >
            <div className="text-white font-bold text-center">
              <h1>Our App</h1>
            </div>
            <div className=" text-center">
              <p className="mt-2 text-white" to="/privacyPolicy">
                Download our app get 10% Off on First Order
              </p>
              
            </div>
          </div>
        </div>
      </footer>
      <hr className="bg-gray-400" />
      {/* footer 3 */}
      <footer className="bg-gray-700 h-20">
        <div>
          <div className="flex ">
            <div>
              <p className="text-white ml-96 pt-3">
                {/* &copy; use for copy right */}
                &copy; {new Date().getFullYear()}; Powered by Junn's Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer