import MainPage from "Components/Pages/MainPage";
import AboutUs from "Components/Pages/AboutUs";
import OurProducts from "Components/Pages/OurProducts";
import OurTeam from "Components/Pages/OurTeam";
import ContactUs from "Components/Pages/ContactUs";
import PressReleases from "Components/Pages/PressReleases";
import StockPage from "Components/Pages/StockPage";
import OurClients from "Components/Pages/OurClients";

const COMPANY_NAME = "CANNASOFT"

const LINKS_DATA = {

    about: {
        to: "/about",
        title: "About",
        component: AboutUs
    },

    team: {
        to: "/team",
        title: "Team",
        component: OurTeam
    },

    products: {
        to: "/products",
        title: "Products",
        component: OurProducts
    },

    contact: {
        to: "/contact",
        title: "Contact",
        component: ContactUs
    },

    press: {
        to: "/press",
        title: "Press",
        component: PressReleases
    },

    clients: {
        to: "/clients",
        title: "Clients",
        component: OurClients
    },

    stock: {
        to: "/stock",
        title: "Stock",
        component: StockPage
    },

    // Keep last!
    main: {
        to: "/",
        title: "Main",
        component: MainPage
    }
}

const NAV_BAR_DATA = [
    LINKS_DATA.stock,
    LINKS_DATA.press,
    LINKS_DATA.products,
    LINKS_DATA.clients,
    LINKS_DATA.team,
    LINKS_DATA.about,
    LINKS_DATA.contact
]

const NEWS_URI = `https://raw.githubusercontent.com/kanasoft-news/news/main/news.json`
const STORY_URI = `https://tinyurl.com/yg5dbzky`

export {
    COMPANY_NAME,
    NAV_BAR_DATA,
    LINKS_DATA,
    NEWS_URI,
    STORY_URI
}
