import React from 'react';

const Section1 = () => (
    <div className=" mt-32 flex w-full  justify-center p-0 ">
        <div className=" flex w-1/2 flex-col items-start px-32">
            <div className="sub_container flex flex-col items-start self-stretch">
                <div className="flex flex-col items-start gap-5 self-stretch">
                    <div className="sub_container-1 flex flex-col items-start self-stretch">
                        <div className="Pro Display'] font-['SF flex items-center gap-2.5 border-b-[3px] border-b-[#e02521] px-0 py-2 text-[1.75rem] font-light capitalize leading-[normal] text-[#1a3129]">
                            Growth | Strategy | ESG | Impact
                        </div>
                        <div className=" font-['SF self-stretch  text-7xl font-semibold leading-[normal] text-[#1a3129]">Driving your financial success -</div>
                        <h1 className="to-pink-600 bg-gradient-to-r from-purple-400 bg-clip-text text-8xl font-extrabold text-transparent">Tailwind CSS</h1>
                    </div>
                    <div className="Pro Display'] font-['SF self-stretch text-lg leading-[150%] text-[#333]">
                        We partner with you to enable your sustainable growth globally and bring your impact solutions to more people.Let us help you navigate
                        new markets, accelerate growth, and build high-performing teams for sustainable success.
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="Pro Display'] font-['SF flex items-center gap-2 rounded-lg bg-[#1a1a1a] px-5 py-4 text-lg font-semibold leading-[150%] text-[#fdfefb]">
                        Get in touch
                    </div>
                    <div className="Pro Display'] font-['SF flex items-center gap-2 rounded-lg border-[1.5px] border-[#656567] px-6 py-4 text-lg font-semibold leading-[150%] text-neutral-800">
                        Our Services
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 self-stretch">
                <div className="container-3 flex items-center rounded-full border-2 border-[#e02521] p-2">
                    <div className="lightgray 50% / cover no-repeat] bg-[url(<path-to-image>), h-[3.125rem] w-[3.125rem] rounded-full" />
                    <div className="lightgray 50% / cover no-repeat] bg-[url(<path-to-image>), h-[3.125rem] w-[3.125rem] rounded-full" />
                    <div className="lightgray 50% / cover no-repeat] bg-[url(<path-to-image>), h-[3.125rem] w-[3.125rem] rounded-full" />
                </div>
                <div className="text-2 Pro Display'] font-['SF bg-[#e02521] text-xl leading-[150%] text-[#234338]">430+ Happy Customers</div>
            </div>
        </div>
        <div className="w-1/2">
            <img
                src={'./assets/image/section1/herosectionimg.png'}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                alt="img"
            />
        </div>
    </div>
);

export default Section1;
