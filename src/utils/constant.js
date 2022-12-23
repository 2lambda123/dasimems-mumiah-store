
import LogoImage from "../assets/images/logo.png"

export const routeName = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact"
}

export const pageLinks = [
    {
        label: "Home",
        link: routeName.home,
        id: 1,
    },

    {
        label: "About",
        link: routeName.about,
        id: 2,
    },

    {
        label: "products",
        link: routeName.products,
        id: 3,
    },

    {
        label: "Contact",
        link: routeName.contact,
        id: 4,
    }
]

export const images = {
    logo: LogoImage
}

export const baseUrl = "https://mumiah.shop/api/v1"
export const productUrl = `${baseUrl}/products`;