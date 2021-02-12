import { useState } from "react";
import 'styles/main.css';
import { COMPANY_NAME, NAV_BAR_DATA, LINKS_DATA } from 'Config/config.js';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

    
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();
    
    const transparent = location.pathname === LINKS_DATA.main.to

    const listItems = NAV_BAR_DATA.map(item => {
        return (
            <li className="nav-item group px-1">
                <Link to={item.to}>
                    <p className={"px-3 py-2 flex items-center text-md uppercase font-bold leading-snug hover:opacity-75 " + (transparent ? "text-white" : "text-gray-700")}>
                        {item.title}
                    </p>
                </Link>
                {
                    location.pathname === item.to &&
                    <div className="w-full h-1 bg-ks-purple rounded-full"></div>
                }
                {
                    location.pathname !== item.to &&
                    <div className="block w-full h-1 transition-transform origin-left scale-x-0 rounded-full transform-gpu group-hover:scale-x-100 bg-ks-light-purple"></div>
                }
            </li>
        )
    })

    return (
        <>
            <nav className={"flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg " + (transparent ? "bg-transparent top-0 absolute z-50 w-full" : "relative bg-white dark:bg-gray-200 mb-3")}>
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/">
                            <p className={"text-lg font-bold leading-relaxed inline-block px-3 py-2 whitespace-no-wrap uppercase " + (transparent ? "text-white" : "text-black")}>
                                {COMPANY_NAME}
                            </p>
                        </Link>
                        <button
                            className={"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none " + (transparent ? "text-white" : "text-gray-700")}
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg className={"h-6 w-6 " + (transparent ? "text-white" : "text-gray-700")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
