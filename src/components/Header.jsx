import {NavLink, Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <>
      {/* for  top header like shipping and phone number */}
      <header className="pt-3 bg-black h-10">
        <div>
          {/* for shipping side */}
          <div className="flex text-white ">
            <div className="pl-4">
              <p>Free shipping over $100 free returns</p>
            </div>
            {/* for contact number */}
            <div className="pl-80">
              <p>
                Hotline
                <a
                  href="+91 9578383022"
                  className="hover:bg-lime-500 hover:rounded-lg px-2"
                >
                  +91 9578383022
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* to create the break horizontal line */}
      <hr />
      {/* for logo ,search bar, login and for many activity */}
      <header className="bg-black ">
        <div>
          <div className="flex">
            <div className="flex">
              {/* for logo  */}
              <div className="text-white h-16  mt-4">
                <h1 className=" text-3xl font-bold italic pt-3 pl-3 text-blue-200">
                  Junni
                </h1>
                {/* for paragraph */}
                <p className=" pl-3  text-green-200">e-Comm</p>
              </div>
            </div>
            <div>
              <div>
                {/* for search bar */}
                <div className="flex mt-4">
                  <div className="pt-6 pl-16  box-shadow-none">
                    {" "}
                    <input
                      type="text"
                      placeholder="search product here..."
                      className="w-96 rounded-l-lg pl-2"
                    ></input>
                  </div>{" "}
                  {/* for button */}
                  <button
                    type="submit"
                    className="bg-yellow-200 text-slate-400 h-6 mt-6 pl-2 w-8 rounded-r-md "
                  >
                    <BsSearch />
                  </button>
                </div>
              </div>
            </div>
            {/* for comapre, login, wishlist and other functions */}
            <div>
              <div className="flex">
                {/* for compare */}
                <div>
                  <Link>
                    <img
                      src="/images/compare.svg"
                      alt=" compare your device"
                      className="w-4 h-8 mt-4 ml-16 text-white"
                    />{" "}
                  </Link>
                  <p className="text-white ml-10  text-sm">
                    Compare <br /> Products{" "}
                  </p>
                </div>
                {/* for wishlist */}
                <div>
                  <Link>
                    <img
                      src="/images/wishlist.svg"
                      alt=" wish list"
                      className="w-4 h-8 mt-4 ml-14 text-white"
                    />{" "}
                  </Link>
                  <p className="text-white pl-9 ml-1 text-sm">Wishlist </p>
                </div>
                {/* for login */}
                <div>
                  <Link>
                    <img
                      src="/images/user.svg"
                      alt=" Login"
                      className="w-4 h-8 mt-4 ml-14"
                    />{" "}
                  </Link>
                  <p className="text-white pl-9 ml-2 text-justify">Login</p>
                </div>
                {/* for cart */}
                <div>
                  <Link>
                    <div className="flex">
                      <img
                        src="/images/cart.svg"
                        alt=" cart"
                        className="w-4 h-8 mt-4 ml-14 text-white"
                      />
                      <span className=" bg-white mt-5 pt-0 w-auto ml-1 rounded-md h-6">
                        $-10
                      </span>
                    </div>
                    <div>
                      <p className="text-white ml-14 mt-1 text-sm">Cart</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* for third header for home, contact, blogs, store etc */}
      <header className="bg-gray-900 h-12 pt-2">
        <div className="flex">
          {/* for dropdown list of wish item*/}
          <div className="w-40 bg-gray-900 pl-5 flex items-center" >
              <img src="/images/menu.svg" alt="menu logo" />
            <select id='select Now'>
              <option value="shop" className=" ">
                Shop Catagories
              </option>

              <option value="mens">Mens Fashion</option>
              <option value="women">Women Fashion</option>
              <option value="kids">Kids Fashion</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>

          <div>
            {/*  for list like home , contact, about, blogs etc */}
            <div className="ml-40 text-white">
              <div className="list-none flex ml-2">
                <NavLink to="/home" className="pl-5 ml-5 text-lg">
                  Home
                </NavLink>
                <NavLink to="/ourStore" className="pl-5 ml-5 text-lg">
                  Our Store
                </NavLink>
                <NavLink to="/blogs" className="pl-5 ml-5 text-lg">
                  Blogs
                </NavLink>
                <NavLink to="/contact" className="pl-5 ml-5 text-lg">
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            <div>
              <button className="text-white ml-20 mt-1">Location</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;