import Image from 'next/image';
import React from 'react';

import { Link } from '@/components/links';
import { type IQueryWidgetNavbarResult } from '@/data_services/sanity_groq';
import { sanityImageProps } from '@/utils/sanity_image';

export interface INavbarProps {
    logo: unknown;
    navbarMenu: IQueryWidgetNavbarResult['navbarMenu'];
}

const Navbar: React.FC<INavbarProps> = ({ logo, navbarMenu }) => {
    return (
        <div className="navbar bg-white/90 backdrop-blur-sm">
            <div className="flex-1">
                <div className="w-[55px] h-full">
                    <Image
                        {...sanityImageProps(logo)}
                        layout="responsive"
                        width={64}
                        height={64}
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="flex-none justify-between items-center space-x-4">
                {navbarMenu.map((item) => {
                    return (
                        <Link
                            key={`navbar-${item._id}`}
                            href={item.path.current}
                            className="hidden lg:btn lg:btn-link btn-primary"
                        >
                            {item.menuName}
                        </Link>
                    );
                })}
                <label htmlFor="hamburger" className="lg:hidden btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
