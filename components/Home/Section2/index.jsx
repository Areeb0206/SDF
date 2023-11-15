import React from 'react';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from '../../../utils/images';

const Section2 = () => (
    <div className=" bg-[#F7F7F7] px-10 py-12 lg:mx-28 md:mt-16 md:p-0 ">
        <div className=" text-center text-xl text-black md:px-10 md:py-4 md:text-lg">Trusted by Investment Managment and Companies</div>

        <div className="grid grid-cols-8 place-items-center gap-10  lg:my-10 md:grid-cols-2 md:px-10 md:py-2">
            <div className=" col-span-1 ">
                <img
                    src={image1}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1 ">
                <img
                    src={image2}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1  md:col-span-2">
                <img
                    src={image3}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1 ">
                <img
                    src={image4}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1 ">
                <img
                    src={image5}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1 ">
                <img
                    src={image6}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1 ">
                <img
                    src={image7}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1 ">
                <img
                    src={image8}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
            <div className="col-span-1  lg:hidden">
                {' '}
                <img
                    src={image9}
                    style={{
                        width: 120,
                        height: 50,
                        resize: 'contain',
                    }}
                    alt="noimage"
                />
            </div>
        </div>
        <div className="flex w-full items-center justify-center text-center md:hidden">
            <img
                src={image9}
                style={{
                    width: 120,
                    height: 50,
                    resize: 'contain',
                }}
                alt="noimage"
            />
        </div>
    </div>
);

export default Section2;
