import React from 'react';
import { raise, impact, expand } from '../../../utils/images';

const Section3 = () => (
    <div className="mt-32 w-full md:mt-24">
        <div className="text-center text-5xl  font-semibold text-[#E75322] md:text-4xl">Our Services</div>
        <div className="my-10 text-center text-lg font-light text-black md:my-4 md:px-7 md:text-sm">
            Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness{' '}
        </div>
        <div className="grid grid-cols-2 gap-6 px-28 md:grid-cols-1 md:px-7">
            <div className="order-1 col-span-1 rounded-xl bg-[#F7F7F7] px-10 py-5 md:px-3 md:py-6  ">
                <div className="flex items-center space-x-4">
                    <img src={raise} className="h-[60px] w-[60px]" />
                    <div className="text-2xl font-bold text-black">SDGx Raise</div>
                </div>
                <div className="font-regular mt-4  text-sm text-black md:line-clamp-2">
                    We partner with high growth startups with the shared goal of achieving global growth and making a positive impact towards the attainment of
                    the Sustainable Development Goals. Together, we strive to build a partnership that not only supports fundraising endeavors but also drives
                    sustainable and responsible growth, contributing to a better future for all.
                </div>
            </div>
            <div className="order-2 col-span-1 rounded-xl bg-[#F7F7F7] px-10 py-5 md:order-3 md:px-3 md:py-6  ">
                <div className="flex items-center space-x-4">
                    <img src={expand} className="h-[60px] w-[60px]" />
                    <div className="text-2xl font-bold text-black">SDGx Expand</div>
                </div>
                <div className="font-regular mt-4 text-sm text-black md:line-clamp-2">
                    Our expansion services enable businesses to enter new markets and achieve growth seamlessly. With comprehensive support in market entry,
                    strategy development, regulatory compliance, and sales and marketing, we help clients capitalize on opportunities and navigate complexities
                    for successful business expansion.
                </div>
            </div>
            <div className="order-3 col-span-2 rounded-xl bg-[#F7F7F7] px-10 py-5 md:order-2 md:col-span-1 md:px-3 md:py-6  ">
                <div className="flex items-center space-x-4">
                    <img src={impact} className="h-[60px] w-[60px]" />
                    <div className="text-2xl font-bold text-black">SDGx ESG & Impact</div>
                </div>
                <div className="font-regular mt-4 text-sm text-black md:line-clamp-2">
                    We work closely with companies and investors to develop comprehensive ESG and Impact strategies, implement measurable initiatives, and
                    enhance stakeholder engagement, fostering a culture of responsible and purpose-driven business practices.
                </div>
            </div>
        </div>
    </div>
);

export default Section3;
