import React from 'react';

const Section1 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-1">
            <div className="lg:p-28 md:mt-12">
                <div className=" font-light text-[#1a3129]  lg:mt-5 lg:py-0 lg:text-left   lg:text-[1.5rem] lg:text-base md:text-center">
                    Growth | Strategy | ESG | Impact
                </div>

                <div className=" my-2 text-6xl font-semibold leading-[normal] text-[#1a3129] lg:p-0 lg:pt-5  lg:text-left md:px-10 md:text-center md:text-4xl">
                    Driving your financial success -
                </div>
                <h1 className="bg-gradient-to-r from-[#C5192D]  to-[#FCC30B]  bg-clip-text text-6xl font-extrabold text-transparent lg:text-left md:text-center md:text-4xl ">
                    Substainably
                </h1>
                <div className="mt-5 font-medium text-[#333] md:px-7 md:text-center  md:text-sm  md:text-xs">
                    We partner with you to enable your sustainable growth globally and bring your impact solutions to more people.Let us help you navigate new
                    markets, accelerate growth, and build high-performing teams for sustainable success.
                </div>
                <div className="my-10 lg:block md:hidden">
                    <div className=" flex ">
                        <div className=" flex items-center gap-2 rounded-lg border-[1.5px] border-[#656567] bg-[#1a1a1a] px-5 py-3 text-lg font-semibold leading-[150%] text-[#fdfefb]">
                            Get in touch
                        </div>
                        <div className=" ml-4 flex items-center gap-2 rounded-lg border-[1.5px] border-[#656567] px-6 py-3 text-lg font-semibold leading-[150%] text-neutral-800">
                            Our Services
                        </div>
                    </div>
                </div>
                <div className=" items-center lg:flex  md:hidden">
                    <img src={'./assets/image/section1/customers.png'} className="lg:h-[60px] lg:w-[120px] xxs:h-[70px] xxs:w-[140px]" />
                    <div className="ml-3 flex text-center text-xl font-bold text-[#C5192D] ">
                        <div>430+</div>
                        <div className="text-lg font-light text-black">Happy Customers</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:col-span-1 md:my-10">
            <img src="./assets/image/section1/herosectionimg.png" className="h-auto w-full rounded-b-2xl md:mx-auto md:w-11/12" alt="img" />
        </div>
        <div className=" lg:col-span-1 lg:hidden md:block">
            <div className=" flex ">
                <div className="mx-auto flex">
                    <div className=" flex items-center rounded-lg border-[1.5px] border-[#656567] bg-[#1a1a1a] px-5 py-3 text-lg font-semibold leading-[150%] text-[#fdfefb]">
                        Get in touch
                    </div>
                    <div className=" ml-4 flex items-center rounded-lg border-[1.5px] border-[#656567] px-6 py-3 text-lg font-semibold leading-[150%] text-neutral-800">
                        Our Services
                    </div>
                </div>
            </div>
            <div className=" mt-10 flex w-full items-center lg:flex-row xxs:flex-col">
                <img src={'./assets/image/section1/customers.png'} className="lg:h-[60px] lg:w-[120px] xxs:h-[70px] xxs:w-[140px]" />
                <div className="flex text-center text-xl font-bold text-[#C5192D] lg:ml-5 lg:mt-0 xxs:ml-0 xxs:mt-3">
                    <div>430+</div>
                    <div className="text-lg font-light text-black">Happy Customers</div>
                </div>
            </div>
        </div>
    </div>
);

export default Section1;
