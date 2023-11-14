/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '../../store';
import { toggleTheme, toggleDirection } from '../../store/themeConfigSlice';
import { useRouter } from 'next/router';

const Header = (props: any) => {
    const router = useRouter();

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const [openLandingPage, setOpenLandingPage] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };

    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header className={`sticky top-0 z-50 duration-300 ${props.className}`}>
            <div className="container">
                <div className="flex items-center justify-between   py-5 lg:py-0">
                    <Link href="/">
                        <img src="/assets/image/logo/sdflogo.png" alt="plurk" className="h-10 w-full" />
                    </Link>
                    <div className="flex items-center">
                        <div onClick={() => toggleMenu()} className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? '' : 'hidden'}`}></div>
                        <div className={`menus  ${showMenu ? 'overflow-y-auto ltr:!right-0 rtl:!left-0' : 'flex'}`}>
                            <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
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
                            <ul onClick={() => toggleMenu()}>
                                <li>
                                    <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className={`${openLandingPage ? 'group relative' : 'relative'}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenLandingPage(!openLandingPage);
                                    }}
                                >
                                    <Link
                                        href="#"
                                        className={
                                            router.pathname === '/crypto' ||
                                            router.pathname === '/modern-saas' ||
                                            router.pathname === '/real-estate' ||
                                            router.pathname === '/healthcare' ||
                                            router.pathname === '/marketing' ||
                                            router.pathname === '/application' ||
                                            router.pathname === '/hotel-resort' ||
                                            router.pathname === '/nft' ||
                                            router.pathname === '/online-courses' ||
                                            router.pathname === '/restaurant' ||
                                            router.pathname === '/consulting' ||
                                            router.pathname === '/creative-agency' ||
                                            router.pathname === '/insurance' ||
                                            router.pathname === '/photography' ||
                                            router.pathname === '/construction' ||
                                            router.pathname === '/blog-landing' ||
                                            router.pathname === '/event-concert' ||
                                            router.pathname === '/gym' ||
                                            router.pathname === '/job-placement' ||
                                            router.pathname === '/online-payments' ||
                                            router.pathname === '/personal-portfolio' ||
                                            router.pathname === '/portfolio-landing'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        Landing
                                        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
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
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        <Link href="/crypto" className={router.pathname === '/crypto' ? 'active' : ''}>
                                            Crypto Currency
                                        </Link>
                                        <Link href="/modern-saas" className={router.pathname === '/modern-saas' ? 'active' : ''}>
                                            {' '}
                                            Modern Saas{' '}
                                        </Link>
                                        <Link href="/real-estate" className={router.pathname === '/real-estate' ? 'active' : ''}>
                                            {' '}
                                            Real Estate{' '}
                                        </Link>
                                        <Link href="/healthcare" className={router.pathname === '/healthcare' ? 'active' : ''}>
                                            {' '}
                                            Health Care{' '}
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        href="/portfolio"
                                        className={router.pathname === '/portfolio' || router.pathname === '/portfolio-detail' ? 'active' : ''}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className={router.pathname === '/services' || router.pathname === '/services-detail' ? 'active' : ''}
                                    >
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team" className={router.pathname === '/team' ? 'active' : ''}>
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className={router.pathname === '/about-us' ? 'active' : ''}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career" className={router.pathname === '/career' ? 'active' : ''}>
                                        Career
                                    </Link>
                                </li>
                            </ul>
                            <div className="relative hidden items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:pl-9 ltr:before:-left-[2px] rtl:pr-9 rtl:before:-right-[2px] lg:inline-flex">
                                Contact us
                            </div>
                        </div>

                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;