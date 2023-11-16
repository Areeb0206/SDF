import React from 'react';
import { section5 } from '../../../utils/images';

const Section5 = () => (
    <div className="mt-32 flex w-full md:mt-20">
        <div className="grid w-full grid-cols-2 lg:px-28 md:grid-cols-1 md:px-10">
            <div className="col-span-1">
                <img src={section5} className="h-full w-full" />
            </div>
            <div className="col-span-1 ">
                <div className="lg:-ml-72 md:hidden">
                    <div>
                        <div className="w-[150px] border-b-[3px] border-green-700 py-1 text-2xl">SDGxIndustry</div>
                    </div>
                    <div className="mt-5 text-5xl font-semibold text-black ">We Provide end to end Services for all Major Industrial Sectors</div>
                    <div className="mt-3 w-[120px] rounded-lg border-1 border-black py-3 text-center text-base font-semibold text-black">Learn More</div>
                </div>
                <div className=" -mt-5 w-5/6 px-10 text-lg text-[#737B8F] md:hidden">
                    <div className=" ">
                        In order to thrive, financial institutions must exceed expectations. Should banks integrate ESG considerations into their financial
                        services strategy? Set a new vision for their <u>digital future</u>? Adopt processes for better <u>risk mitigation</u>?
                    </div>
                    <div className="mt-4">
                        SDGx's financial services consulting leaders offer strategic thinking, transformative expertise, and technical know-how. We draw on deep
                        financial sector relationships and inter- disciplinary knowledge across multiple industries, capturing best practices that cut across
                        global markets.
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="mt-10">
                        <div className="w-[150px] border-b-[3px] border-green-700 py-1 text-2xl">SDGxIndustry</div>
                        <div className="mt-5 text-3xl font-semibold text-black ">We Provide end to end Services for all Major Industrial Sectors</div>
                    </div>
                    <div className=" mt-5 line-clamp-3 text-lg text-[#737B8F]">
                        In order to thrive, financial institutions must exceed expectations. Should banks integrate ESG considerations into their financial
                        services strategy? Set a new vision for their <u>digital future</u>? Adopt processes for better <u>risk mitigation</u>?
                    </div>
                    <div className="mt-5  rounded-lg border-1 border-black py-4 text-center text-xl font-semibold text-black">Learn More</div>
                </div>
            </div>
        </div>
    </div>
);

export default Section5;
