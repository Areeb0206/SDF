/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '../../store';
import { toggleTheme, toggleDirection } from '../../store/themeConfigSlice';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { jotaiIndustry, jotaiServices } from '../../jotaiStore/navbar';

const Header = (props: any) => {
    const router = useRouter();

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const [openIndustry, setOpenIndustry] = useAtom(jotaiIndustry);
    const [openServices, setOpenServices] = useAtom(jotaiServices);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setOpenIndustry(false);
        setOpenServices(false);
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };
    console.log('openServices', openServices, openIndustry);

    return (
        <header className={`z-100 sticky top-0 bg-white  ${props.className}`}>
            <div className="  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex w-full items-center justify-between  py-5  lg:px-12 lg:py-0 md:px-4 xs:px-4">
                    <Link href="/">
                        <img src="/assets/image/logo/sdglogo.png" alt="plurk" className="w-full lg:h-[60px] md:h-[40px]" />
                    </Link>
                    <div className="flex items-center ">
                        <div onClick={() => toggleMenu()} className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? '' : 'hidden'}`}></div>
                        <div onClick={() => {}} className={`menus  ${showMenu ? 'overflow-y-auto ltr:!right-0 rtl:!left-0' : 'flex'}`}>
                            <div onClick={() => {}} className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                                <button onClick={() => toggleMenu()} type="button" className="p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-black dark:text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ul className="h-full " onClick={() => {}}>
                                <li>
                                    <Link onClick={toggleMenu} href="/">
                                        <span className="text-black hover:bg-[#11578F] hover:text-white lg:p-2">Home</span>
                                    </Link>
                                </li>
                                <li
                                    className={` relative ${openIndustry ? 'group ' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenIndustry(!openIndustry);
                                        setOpenServices(false);
                                    }}
                                >
                                    <Link href="#" className=" text-black">
                                        <div
                                            className={` ${
                                                openIndustry ? 'lg:bg-[#4B8F33] lg:text-white' : ''
                                            } flex w-full items-center justify-between lg:p-2 lg:hover:bg-[#4B8F33] lg:hover:text-white`}
                                        >
                                            Industry
                                            <div className=" ltr:ml-2 rtl:mr-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                    <div
                                        className={`${
                                            openIndustry
                                                ? 'lg-w-full z-10 grid bg-white  p-4 lg:absolute lg:-mt-4 lg:w-[150px] lg:gap-0 lg:rounded-xl lg:p-2 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:gap-y-5 md:p-0  md:pl-10'
                                                : 'hidden'
                                        }`}
                                        onClick={() => toggleMenu()}
                                    >
                                        <div className=" flex w-full  cursor-pointer items-center justify-between  px-2 py-2 text-xs text-black hover:bg-[#9E1841] hover:text-white">
                                            Digital
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center  justify-between px-2 py-2 text-xs text-black hover:bg-[#C5192D]  hover:text-white">
                                            Education
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center  justify-between px-2 py-2 text-xs text-black hover:bg-[#FCC30B]  hover:text-white">
                                            Energy
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center justify-between px-2 py-2 text-xs text-black hover:bg-[#A21942]  hover:text-white">
                                            Financial Services
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center justify-between px-2 py-2 text-xs text-black hover:bg-[#4C9F38]  hover:text-white">
                                            Health Care
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center  justify-between px-2 py-2 text-xs text-black hover:bg-[#BF8B2E]  hover:text-white">
                                            Mobility
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center  justify-between px-2 py-2 text-xs text-black hover:bg-[#FD6925]  hover:text-white">
                                            Manufacturing
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center justify-between px-2 py-2 text-xs text-black hover:bg-[#FD9D24]  hover:text-white">
                                            Real Estate
                                        </div>
                                        <div className="flex  w-full cursor-pointer items-center justify-between px-2 py-2 text-xs text-black hover:bg-[#FD6925]  hover:text-white ">
                                            Recycling
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link onClick={toggleMenu} href="/">
                                        <span className="text-black hover:bg-[#2186C9] hover:text-white lg:p-2">About</span>
                                    </Link>
                                </li>
                                <li
                                    className={` relative ${openServices ? 'group ' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenIndustry(false);
                                        setOpenServices(!openServices);
                                    }}
                                >
                                    <Link href="#" className=" text-black">
                                        <div
                                            className={` ${
                                                openServices ? 'lg:bg-[#E75322] lg:text-white' : ''
                                            } flex w-full items-center justify-between lg:p-2 lg:hover:bg-[#E75322] lg:hover:text-white`}
                                        >
                                            Services
                                            <div className=" ltr:ml-2 rtl:mr-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                    <div
                                        className={`${
                                            openServices
                                                ? 'lg-w-full z-10 grid  bg-white p-4  lg:absolute lg:-mt-4 lg:w-[200px] lg:gap-0 lg:rounded-xl lg:p-2 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:gap-y-5 md:p-0  md:pl-10'
                                                : 'hidden'
                                        }`}
                                        onClick={() => toggleMenu()}
                                    >
                                        <div className=" flex w-full  cursor-pointer items-center justify-between  px-2 py-2 text-xs text-black hover:bg-[#9E1841]  hover:text-white">
                                            Country Manager as service
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center  justify-between px-2 py-2 text-xs text-black hover:bg-[#C5192D]  hover:text-white">
                                            ESG Stratergy
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center  justify-between px-2 py-2 text-xs text-black hover:bg-[#FD9D24]  hover:text-white">
                                            Interim Management
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center justify-between px-2 py-2 text-xs text-black hover:bg-[#4C9F38]  hover:text-white">
                                            Market Research
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link onClick={toggleMenu} href="/">
                                        <span className="text-black hover:bg-[#61A630] hover:text-white lg:p-2">SDGxExpand</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={toggleMenu} href="/">
                                        <span className="text-black hover:bg-[#8F1537] hover:text-white lg:p-2">SDGxESG</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={toggleMenu} href="/">
                                        <span className="text-black hover:bg-[#FCC30B] hover:text-white lg:p-2">Resources</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={toggleMenu} href="/">
                                        <span className="text-black hover:bg-[#143B57] hover:text-white lg:p-2">News</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={toggleMenu} href="/">
                                        <span className="text-black hover:bg-[#E75322] hover:text-white lg:p-2">Center</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full  lg:hidden" onClick={() => toggleMenu()}>
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="#000"
                                />
                                <path d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z" fill="#000" />
                                <path d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z" fill="#000" />
                            </svg>
                            {/* <img src="/assets/image/menu/menu.svg" style={{ width: 100, height: 50 }} /> */}
                        </button>
                    </div>
                    <div className=" relative hidden items-center rounded-lg bg-black px-5 py-3 font-medium text-white before:absolute before:top-1/2    lg:inline-flex">
                        Contact us
                    </div>
                </div>
            </div>
        </header>
    );
};
//
export default Header;
