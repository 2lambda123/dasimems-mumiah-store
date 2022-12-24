import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import { ImLocation2, ImPhone } from "react-icons/im"
import { BiMailSend } from "react-icons/bi"
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

export const icons = {
    facebook: ""
}

export const socialLinks = [
    {
        id: 1,
        icon: <AiOutlineTwitter />,
        link: '/',
        label: "Twitter"
    },
    {
        id: 2,
        icon: <AiFillFacebook />,
        link: "/",
        label: "Facebook"
    },
    {
        id: 3,
        icon: <AiOutlineInstagram />,
        link: '/',
        label: "Instagram"
    },
]

export const footerContact = [
    {
      id: 1,
      icon: <ImLocation2 />,
      url: "/",
      text: "203 Fake St. Mountain View, San Francisco, California, USA"
    },
    {
      id: 2,
      icon: <ImPhone />,
      url: "/",
      text: "+234 819238441"
    },
    {
      id: 3,
      icon: <BiMailSend />,
      url: "/",
      text: "info@mumiah.shop"
    }
]

export const images = {
    logo: LogoImage
}

export const baseUrl = "https://mumiah.shop/api/v1"
export const productUrl = `${baseUrl}/products`;