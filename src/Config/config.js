import MainPage from "Components/Pages/MainPage";
import AboutUs from "Components/Pages/AboutUs";
import OurProducts from "Components/Pages/OurProducts/OurProducts";
import OurTeam from "Components/Pages/OurTeam";

const COMPANY_NAME = "KANASOFT"

const LINKS_DATA = {

    about: {
        to: "/about",
        title: "About Us",
        component: AboutUs
    },

    products: {
        to: "/products",
        title: "Our Products",
        component: OurProducts
    }, 
    
    team: {
        to: "/team",
        title: "Our Team",
        component: OurTeam 
    },

    // Keep last!
    main: {
        to: "/",
        title: "Main",
        component: MainPage
    }
}

const NAV_BAR_DATA = [
    LINKS_DATA.about,
    LINKS_DATA.products,
    LINKS_DATA.team,
]

export {
    COMPANY_NAME,
    NAV_BAR_DATA,
    LINKS_DATA
}
