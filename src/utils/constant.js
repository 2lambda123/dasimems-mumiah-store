
import LogoImage from "../assets/images/logo.png"
import FacebookLogo from "../assets/images/Facebook.svg"

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

export const icons = {
    facebook: ""
}

export const socialLinks = [
    {
        label: "Facebook",
        icon: FacebookLogo,
        link: "https://facebook.com",
        id: 1
    }
]

export const images = {
    logo: LogoImage
}

export const baseUrl = "https://mumiah.shop/api/v1"
export const productUrl = `${baseUrl}/products`;