import {Link} from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div className="mb-4 ml-8">
                      <img
                        src="images/note10.png"
                        alt="note 10"
                        className="w-[200px] h-[200px]"
                      />
                    </div>
                    <div className="absolute ">
                      <Link className="items-right">
                        <img
                          src="images/wish.svg"
                          alt="wishlist"
                          className="mt-4 ml-44"
                        />
                      </Link>
                    </div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div className=" flex ">
                              <Link>
                                {" "}
                                <a
                                  href="/"
                                  alt="note 10"
                                  className="mx-6 relative"
                                />
                                <img
                                  src="images/note10-1.png"
                                  alt="note 10"
                                  className="mx-6 w-[60px] h-[100px]"
                                />
                              </Link>

                              <Link>
                                {" "}
                                <a href="/" alt="note 10" className="mx-6" />
                                <img
                                  src="images/note10-3.png"
                                  alt="note 10"
                                  className="mx-6 w-[60px] h-[100px]"
                                />
                              </Link>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProduct