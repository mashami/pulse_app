import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className=" w-full h-1/2 bg-white pb-16">
      <div className="flex flex-col xl:space-y-2">
        <div className="my-0 py-0 flex justify-center px-0 sm:mx-10 lg:mx-8 xl:mx-60">
          <div className="md:w-1/2 h-full  flex flex-col">
            <div className="rounded  my-8 flex justify-end">
              <div className="shadow-lg border">
                <div>
                  <form
                    action=""
                    className="flex flex-col text-p_size  p-8 border"
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center">
                          <label htmlFor="">First Name</label>
                          {/* <p className="hover:invisible peer-invalid:visible font-bold text-red-600 text-sm">
                            REQUIRED{" "}
                          </p> */}
                        </div>
                        <input
                          className="border rounded h-10 w-full hover:border-blue-400 focus:bg-blue-50 px-2"
                          type="text"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Last Name</label>
                        <input
                          className="border rounded h-10 w-full hover:border-blue-400 focus:bg-blue-50 px-2 "
                          type="text"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Email</label>
                        <input
                          className="border rounded h-10 w-full hover:border-blue-400 focus:bg-blue-50 px-2"
                          type="text"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Company Name</label>
                        <input
                          className="border rounded h-10 w-full hover:border-blue-400 focus:bg-blue-50 px-2"
                          type="text"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Create a Password</label>
                        <input
                          className="border rounded h-10 w-full hover:border-blue-400 focus:bg-blue-50 px-2"
                          type="password"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Confirm Password</label>
                        <input
                          className="border rounded h-10 w-full hover:border-blue-400 focus:bg-blue-50 px-2"
                          type="password"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <div className="border-t-2 w-full"></div>
                </div>
                <div className="px-12 space-y-4 bg-gray-100 pb-8">
                  <div className="">
                    <div className="pt-6 ">
                      <h1 className="font-bold">Your Pulse Site Address</h1>
                    </div>
                    <div className="">
                      <p className="text-[12px]">
                        Every Pulse account has its own unique web address where
                        you'll log in. Remember to bookmark it!
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <input
                      className="border rounded h-10 w-1/2 hover:border-blue-400 focus:bg-blue-50 px-2 "
                      type="text"
                    />
                    <p>.pulseapp.com</p>
                  </div>
                  <p>Letters and numbers only, no spaces.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-2 items-center ">
                <p className="font-sans text-[26px] text-gray-500 font-bold ">
                  Billing Information{" "}
                </p>
                <img width={15} height={8} src="/images/locked.png" alt="" />
              </div>
              <div>
                <form
                  action=""
                  className="flex flex-col text-p_size  px-4 py-6 border drop-shadow-sm"
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="">Name on card</label>
                      <input
                        className="border rounded h-10 w-full hover:border-blue-400 focus:bg-blue-50 px-2"
                        type="text"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Credit or debit card</label>
                      <div className="flex justify-between items-center border rounded gap-x-2 pl-2 pr-4 hover:border-blue-400">
                        <svg
                          width={25}
                          height={25}
                          focusable="false"
                          viewBox="0 0 32 21"
                        >
                          <g fill="auto" fillRule="evenodd">
                            <g className="Icon-fill">
                              <g transform="translate(0 2)">
                                <path
                                  d="M26.58 19H2.42A2.4 2.4 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h24.16A2.4 2.4 0 0 1 29 2.38v14.25A2.4 2.4 0 0 1 26.58 19zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z"
                                  opacity=".2"
                                />
                                <path
                                  d="M25 15h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z"
                                  opacity=".3"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>

                        <input
                          className="h-10 w-full outline-none focus:bg-blue-50 px-2"
                          type="text"
                          placeholder="Card number"
                        />

                        <div>
                          <p>MM/YY</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-600">
                        All data and transactions are securely stored and
                        processed using industry standards.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full my-12 ml-16 space-y-[350px] md:block hidden">
            <div className="">
              <div className=" pr-16 space-y-8">
                <div className="">
                  <h1 className="font-bold text-[36px] text-gray-600 font-fontFamily-all">
                    Pulse Plus
                  </h1>
                  <p>Free Trial • $59/mo after</p>
                </div>
                <div>
                  <div className="border-t-2 w-56"></div>
                </div>
                <div className="flex">
                  <div className="space-y-4">
                    <p className="font-bold text-gray-600">
                      " Pulse takes the fear and stress out of cash flow
                      projection and management.”
                    </p>
                    <div>
                      <h1 className="font-bold text-[12.8px] font-fontFamily-all">
                        CASIMIR LOEBER
                      </h1>
                      <p className="text-[12.8px] text-gray-400 font-bold font-fontFamily-all">
                        BASE-10 DESIGN & DEVELOPMENT INC.
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-[75px]">
                    <img src="/images/profile.jpg" alt="" />
                  </div>

                  <div>
                    <h1></h1>
                  </div>
                </div>
                <div>
                  <div className="border-t-2 w-56"></div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div>
                      <h1 className="font-bold font-fontFamily-all text-[20px]">
                        Need more from Pulse?
                      </h1>
                    </div>
                    <div>
                      <p className="font-sans text-gray-500">
                        If you have a complex business with multiple financial
                        accounts, currencies, or auditing needs, you should try
                        our Pulse Unlimited plan for only $30 more per month.
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      className="text-blue-400 font-bold text-[18px] underline"
                      href=""
                    >
                      {" "}
                      Switch now.
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-[20px] text-gray-800 font-bold">
                  Cancel any time.
                </h1>
              </div>
              <div className="space-y-4">
                <p>
                  Your first month is free, but we ask for your credit card
                  upfront to prevent an interruption in service. We won't charge
                  you until the end of your 30-day free trial.
                </p>
                <p>
                  We'll email you reminders before your free trial is up, and
                  we'll send you invoices each month when we charge your card.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8 pt-4 xl:px-60 sm:px-10 px-8 space-y-4">
          <div>
            <p>
              You’re signing up for a free 30-day trial of the Plus plan. At the
              end of the trial on July 5 we’ll charge you $59 a month to keep
              using Pulse, and you can
              <a className="underline pl-1 font-bold" href="">
                cancel any time.
              </a>{" "}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>I have read and agree to Pulse's</p>
              <a className="text-blue-500" href="">
                {" "}
                Terms of Use
              </a>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>I have read and agree to Pulse's</p>
              <a className="text-blue-500" href="">
                {" "}
                Privacy Policy
              </a>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>I want to receive a</p>
              <a className="text-blue-500" href="">
                {" "}
                monthly newsletter
              </a>
              <p>with helpful cash flow advice</p>
            </div>
          </div>
          <div>
            <button className="border px-8 py-4 font-bold bg-BottomBackground block text-xl rounded-lg hover:-translate-y-2 hover:translate-x-2 hover:hover:shadow-bottomShadow">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
