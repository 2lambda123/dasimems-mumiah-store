import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import { ImLocation2, ImPhone } from "react-icons/im"
import { BiMailSend } from "react-icons/bi"
import { IoIosHelpBuoy } from "react-icons/io"
import { FiHeart } from "react-icons/fi"
import { HiOutlineUser, HiOutlineClipboardList } from "react-icons/hi"
import BannerImageTwo from "../assets/images/hero-right-2.png"
import BannerImageOne from "../assets/images/hero-right.png"
import BannerImageThree from "../assets/images/hero-right-3.png"
import StepOneImage from "../assets/images/HIW1img.png"
import StepTwoImage from "../assets/images/HIW2img.png"
import StepThreeImage from "../assets/images/HIW3img.png"
import StepFourImage from "../assets/images/HIW4img.png"
import LogoImage from "../assets/images/logo.png"
import LogoImageTwo from "../assets/images/mumia_footer_logo.png"
import PromoOne from "../assets/images/promo2.png"
import PromoTwo from "../assets/images/promo3.png"
import CatImageOne from "../assets/images/collections/1.png"
import CatImageTwo from "../assets/images/collections/5.png"
import CatImageThree from "../assets/images/collections/4.png"
import CollectionOne from "../assets/images/collections/product_collection_1.jpg"
import CollectionTwo from "../assets/images/collections/product_collection_2.jpg"
import CollectionThree from "../assets/images/collections/product_collection_3.jpg"

export const routeName = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
    cart: "/cart",
    login: "/login",
    signUp: "/register",
    account: "/account",
}


export const accountHeaderLinks = [
    {
        label: "Account info",
        link: `${routeName.account}`
    },

    {
        label: "Wishlist",
        link: `${routeName.account}/saved`
    },

    {
        label: "My order",
        link: `${routeName.account}/orders`
    },

    {
        label: "Change password",
        link: `${routeName.account}/password`
    },

    {
        label: "Change billing",
        link: `${routeName.account}/billing`
    },
]

export const contacts = {
    address: "203 Fake St. Mountain View, San Francisco, California, USA",
    mobileNumber: "+234 819238441",
    email: "info@mumiah.shop"
}

export const buyingSteps = [
    {
        title: "Filter and discover",
        subtitle: "Smart filtering and suggestion make it easy to find",
        image: StepOneImage,
        colorScheme: "#FEE2E2",
        textColor: "#991B1B"
    },

    {
        title: "Add to bag",
        subtitle: "Easily select the correct items and add them to the cart",
        image: StepTwoImage,
        colorScheme: "#E0E7FF",
        textColor: "#3739AF"
    },

    {
        title: "Fast shipping",
        subtitle: "The carrier will confirm and ship quickly to you",
        image: StepThreeImage,
        colorScheme: "#FEF9C3",
        textColor: "#854D0E"
    },

    {
        title: "Enjoy the product",
        subtitle: "Have fun and enjoy your 5-star quality products",
        image: StepFourImage,
        colorScheme: "#F3E8FF",
        textColor: "#6B21B3"
    }
]

export const productImages = [CollectionOne, CollectionTwo, CollectionThree]

export const heroContent = [
    {
        subtitle: "In this season, find the best",
        title: "Exclusive collection for everyone",
        image: BannerImageOne
    },

    {
        subtitle: "In this season, find the best",
        title: "Exclusive collection for everyone",
        image: BannerImageTwo
    },

    {
        subtitle: "In this season, find the best",
        title: "Exclusive collection for everyone",
        image: BannerImageThree
    }
]

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
        label: "Products",
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

export const categories = [

    {
        smallText: "Explore new arrivals",
        bigText: "Shop the latest from top brands",
        image: CatImageOne,
        colorScheme: "#F5F3E0",
        link: ""
    },

     {
        smallText: "Digital gift cards",
        bigText: "Give the gift of choice",
        image: CatImageTwo,
        colorScheme: "#F4E9E9",
        link: ""
    },

     {
        smallText: "Sales Collection",
        bigText: "Up to 80% off retail",
        image: CatImageThree,
        colorScheme: "#EFF6FF",
        link: ""
    },

     {
        smallText: "Sales Collection",
        bigText: "Up to 80% off retail",
        image: CatImageThree,
        colorScheme: "#EFF6FF",
        link: ""
    }
]

export const images = {
    logo: LogoImage,
    logoTwo: LogoImageTwo,
    promoOne: PromoOne,
    promoTwo: PromoTwo
}

export const baseUrl = "https://mumiah.shop/api/v1"
export const productUrl = `${baseUrl}/products`;