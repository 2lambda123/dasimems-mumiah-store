import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import { ImLocation2, ImPhone } from "react-icons/im"
import { BiMailSend } from "react-icons/bi"
import { IoIosHelpBuoy } from "react-icons/io"
import { FiHeart } from "react-icons/fi"
import { HiOutlineUser, HiOutlineClipboardList } from "react-icons/hi"
import LogoImage from "../assets/images/logo.png"
import LogoImageTwo from "../assets/images/mumia_footer_logo.png"

export const routeName = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact"
}

export const contacts = {
    address: "203 Fake St. Mountain View, San Francisco, California, USA",
    mobileNumber: "+234 819238441",
    email: "info@mumiah.shop"
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
      text: contacts.address
    },
    {
      id: 2,
      icon: <ImPhone />,
      url: "/",
      text: contacts.mobileNumber
    },
    {
      id: 3,
      icon: <BiMailSend />,
      url: "/",
      text: contacts.email
    }
]

export const accountLinks = [
    {
        label: "My Account",
        id: 1,
        link: "/",
        icon: <HiOutlineUser />
    },


    {
        label: "My Order",
        id: 2,
        link: "/",
        icon: <HiOutlineClipboardList />
    },


    {
        label: "Wishlist",
        id: 3,
        link: "/",
        icon: <FiHeart />
    },

    {
        label: "Help",
        id: 4,
        link: "/",
        icon: <IoIosHelpBuoy />
    }
]

export const cartProducts = [
    {
        name: "Rey Nylon Backpack",
        quantity: 2,
        type: "natural",
        size: "XL",
        price: "74",
        image: "",
    },

    {
        name: "Round Buckle 1\" Belt",
        quantity: 1,
        type: "natural",
        size: "SM",
        price: "68",
        image: "",
    },

    {
        name: "Waffle Knit Beanie",
        quantity: 3,
        type: "natural",
        size: "XL",
        price: "132",
        image: "",
    }
]

export const images = {
    logo: LogoImage,
    logoTwo: LogoImageTwo
}

export const baseUrl = "https://mumiah.shop/api/v1"
export const productUrl = `${baseUrl}/products`;