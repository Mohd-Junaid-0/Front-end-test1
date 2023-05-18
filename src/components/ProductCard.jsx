/* eslint-disable react/no-unescaped-entities */
import ReactStars,{ratingChanged} from 'react-rating-stars-component'
import {Link}  from 'react-router-dom'
const ProductCard = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <div className=" ">
              <div className="grid grid-flow-cols  grid-cols-6 mx-4  ">
                <Link className="bg-white mx-2 ">
                  <div className="relative ">
                    <div className="flex relative">
                      <img
                        src="/images/headphone-1.jpeg"
                        alt="headphone"
                        className="mt-6 w-56 h-32"
                      />
                      <div className="absolute ">
                        <Link className="items-right">
                          <img
                            src="images/wish.svg"
                            alt="wishlist"
                            className="mt-4 ml-44"
                          />
                        </Link>
                      </div>
                      <div className="absolute ml-4 mt-8">
                        <Link>
                          <img
                            src="images/prodcompare.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/add-cart.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/view.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[50px] absolute">
                    <p className="text-red-500 pl-4 font-bold text-lg">
                      Sony MFX-900
                    </p>
                    <p className="pl-4">Industry leading ANC</p>
                    <p className="ml-4">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </p>
                    <p className="pl-4 font-bold ">$ 899.99</p>
                  </div>
                </Link>
                <Link className="bg-white mx-2">
                  <div>
                    <div className="flex relative">
                      <img
                        src="/images/camera-01.jpeg"
                        alt="camera"
                        className="w-[150px] h-[150px] mt-4 ml-8"
                      />
                      <div className="absolute ">
                        <Link className="items-right">
                          <img
                            src="images/wish.svg"
                            alt="wishlist"
                            className="mt-4 ml-44"
                          />
                        </Link>
                      </div>
                      <div className="absolute ml-4 mt-8">
                        <Link>
                          <img
                            src="images/prodcompare.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/add-cart.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/view.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="text-red-500 pl-4 font-bold text-lg">
                      Canon Px-400
                    </p>
                    <p className="pl-4">with 20 MP lance</p>
                    <p className="ml-4">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </p>
                    <p className="pl-4 font-bold ">$ 499.49</p>
                  </div>
                </Link>
                <Link className="bg-white mx-2">
                  <div>
                    <div className="flex relative">
                      <img
                        src="/images/tab.jpg"
                        alt="tablate"
                        className="w-[200px] h-[200px] ml-8"
                      />
                      <div className="absolute ">
                        <Link className="items-right">
                          <img
                            src="images/wish.svg"
                            alt="wishlist"
                            className="mt-4 ml-44"
                          />
                        </Link>
                      </div>
                      <div className="absolute ml-4 mt-8">
                        <Link>
                          <img
                            src="images/prodcompare.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/add-cart.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/view.svg"
                            alt="add to cart"
                            className="py-2 "
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-0">
                    <p className="text-red-500 pl-4 font-bold text-lg">
                      Samsung tab A 7
                    </p>
                    <p className="pl-4">8 GB ram and 128 Memory</p>
                    <p className="ml-4">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </p>
                    <p className="pl-4 font-bold ">$ 399.00</p>
                  </div>
                </Link>
                <Link className="bg-white mx-2">
                  <div>
                    <div className="flex relative">
                      <img
                        src="/images/speaker-01.jpeg"
                        alt="speaker"
                        className="w-[150px] h-[100px] mt-8 ml-12"
                      />
                      <div className="absolute ">
                        <Link className="items-right">
                          <img
                            src="images/wish.svg"
                            alt="wishlist"
                            className="mt-4 ml-44"
                          />
                        </Link>
                      </div>
                      <div className="absolute ml-4 mt-8">
                        <Link>
                          <img
                            src="images/prodcompare.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/add-cart.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/view.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16">
                    <p className="text-red-500 pl-4 font-bold text-lg">
                      JBL S-493
                    </p>
                    <p className="pl-4">JBL waterproof portable speaker</p>
                    <p className="ml-4">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </p>
                    <p className="pl-4 font-bold ">$ 459.00</p>
                  </div>
                </Link>
                <Link className="bg-white mx-2">
                  <div>
                    <div className="flex relative">
                      <img
                        src="/images/watch-01.jpeg"
                        alt="watch="
                        className="w-32 h-44 mt-4 ml-12"
                      />
                      <div className="absolute ">
                        <Link className="items-right">
                          <img
                            src="images/wish.svg"
                            alt="wishlist"
                            className="mt-4 ml-44"
                          />
                        </Link>
                      </div>
                      <div className="absolute ml-4 mt-8">
                        <Link>
                          <img
                            src="images/prodcompare.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/add-cart.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/view.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-red-500 pl-4 font-bold text-lg">
                      Fossil Watch D-32g4
                    </p>
                    <p className="pl-4">
                      Fossil digital watch with 2.8'' Amolad Display
                    </p>
                    <p className="ml-4">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </p>
                    <p className="pl-4 font-bold ">$ 599.99</p>
                  </div>
                </Link>
                <Link className="bg-white mx-2">
                  <div>
                    <div className="flex relative">
                      <img
                        src="/images/portableSpeaker-1.jpeg"
                        alt="portable speaker"
                        className="w-32 h-44 ml-8"
                      />
                      <div className="absolute ">
                        <Link className="items-right">
                          <img
                            src="images/wish.svg"
                            alt="wishlist"
                            className="mt-4 ml-44"
                          />
                        </Link>
                      </div>
                      <div className="absolute ml-4 mt-8 ">
                        <Link >
                          <img
                            src="images/prodcompare.svg"
                            alt="add to cart"
                            className="py-2 "
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/add-cart.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                        <Link>
                          <img
                            src="images/view.svg"
                            alt="add to cart"
                            className="py-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-red-500 pl-4 font-bold text-lg">
                      Boat gr-892
                    </p>
                    <p className="pl-4">Boat waterproof portable speaker</p>
                    <p className="ml-4">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </p>
                    <p className="pl-4 font-bold ">$ 249</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard