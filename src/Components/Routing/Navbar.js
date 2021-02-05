import { useState } from "react";
import 'styles/main.css';
import { COMPANY_NAME, NAV_BAR_DATA } from 'Config/config.js';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();

    const listItems = NAV_BAR_DATA.map(item => {
        return (
            <li className="nav-item group px-1">
                <Link to={item.to}>
                    <p className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-700 hover:opacity-75">
                        {item.title}
                    </p>
                </Link>
                {
                    location.pathname === item.to &&
                    <div className="w-full h-1 bg-gradient-to-r from-light-blue-400 to-blue-500 rounded-full"></div>
                }
                {
                    location.pathname !== item.to &&
                    <div className="block w-full h-1 transition-transform origin-left scale-x-0 rounded-full transform-gpu group-hover:scale-x-100 bg-gradient-to-r from-light-blue-400 to-blue-500"></div>
                }
            </li>
        )
    })

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg bg-white mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/">
                            <p className="text-lg font-bold leading-relaxed inline-block px-3 py-2 whitespace-no-wrap uppercase text-black">
                                {COMPANY_NAME}
                            </p>
                        </Link>
                        <button
                            className="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {listItems}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
