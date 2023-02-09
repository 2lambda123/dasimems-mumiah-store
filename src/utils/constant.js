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
import ForgotPassword from "../assets/images/forgot_password.jpg"

export const routeName = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
    cart: "/cart",
    checkout: "/checkout",
    login: "/login",
    signUp: "/register",
    blog: "/blog",
    account: "/account",
    forgotPassword: "/password-reset",
}


export const accountHeaderLinks = [
    {
        label: "Account info",
        link: `${routeName.account}`
    },

    // {
    //     label: "Wishlist",
    //     link: `${routeName.account}/saved`
    // },

    {
        label: "My order",
        link: `${routeName.account}/orders`
    },

    {
        label: "Change password",
        link: `${routeName.account}/password`
    },

    // {
    //     label: "Change billing",
    //     link: `${routeName.account}/billing`
    // },
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
    },

    {
        label: "Blog",
        link: routeName.blog,
        id: 5,
    }
]

export const blogCategories = {
    news: "News",
    music: "Music",
    food: "Food"
}

export const blog = [
    {
        title: "This is blog 1",
        content: "Ipsum labore id et fugiat deserunt anim laboris Lorem consectetur eiusmod eu adipisicing ex. Reprehenderit ut officia non occaecat veniam consectetur aliquip laboris velit amet mollit. Ex quis tempor ea fugiat non aliqua magna minim enim exercitation. Nisi laborum et duis elit laboris duis excepteur sunt occaecat exercitation reprehenderit aute amet est.Labore consectetur officia exercitation ipsum exercitation in enim nulla exercitation sint veniam consequat proident. Quis laborum aliquip do qui culpa ad exercitation consectetur. Esse exercitation labore non aliqua laborum do. Cupidatat irure aliquip pariatur commodo laboris officia ullamco et labore deserunt ex velit. Aliqua non elit reprehenderit aute non dolore irure reprehenderit nulla dolor do eu aliqua nulla.Veniam deserunt tempor aliqua ut quis velit laboris nostrud aute ut cillum reprehenderit commodo sunt. Quis irure laboris fugiat commodo magna nulla aute ut sunt. In et aliquip velit nulla non. Nulla id exercitation reprehenderit irure ea labore mollit Lorem esse occaecat sit excepteur magna. Do pariatur sint minim enim.Amet adipisicing ex ea exercitation dolore qui minim irure reprehenderit commodo occaecat. Laborum cillum fugiat esse dolore aute fugiat. Aliquip irure incididunt Lorem quis dolor. Aute tempor amet aliqua duis pariatur ipsum eu incididunt eiusmod. Laborum nisi pariatur minim adipisicing do consequat veniam fugiat. Consequat voluptate est qui reprehenderit sit.Ea ex incididunt quis veniam qui veniam aute reprehenderit. Aute qui occaecat duis non nostrud proident. Officia et ex reprehenderit do nisi ex quis duis ut. Et magna non dolor minim proident cillum eiusmod ex ex dolor cillum adipisicing ut ex. Labore occaecat ut mollit sunt. Dolor dolor sint ad ipsum minim excepteur deserunt culpa eu non laborum amet.",
        category: blogCategories.news,
        image: "",
        date: "Aug, 10 2023",
        id: 1

    },

    {
        title: "This is blog 2",
        content: "Ipsum labore id et fugiat deserunt anim laboris Lorem consectetur eiusmod eu adipisicing ex. Reprehenderit ut officia non occaecat veniam consectetur aliquip laboris velit amet mollit. Ex quis tempor ea fugiat non aliqua magna minim enim exercitation. Nisi laborum et duis elit laboris duis excepteur sunt occaecat exercitation reprehenderit aute amet est.Labore consectetur officia exercitation ipsum exercitation in enim nulla exercitation sint veniam consequat proident. Quis laborum aliquip do qui culpa ad exercitation consectetur. Esse exercitation labore non aliqua laborum do. Cupidatat irure aliquip pariatur commodo laboris officia ullamco et labore deserunt ex velit. Aliqua non elit reprehenderit aute non dolore irure reprehenderit nulla dolor do eu aliqua nulla.Veniam deserunt tempor aliqua ut quis velit laboris nostrud aute ut cillum reprehenderit commodo sunt. Quis irure laboris fugiat commodo magna nulla aute ut sunt. In et aliquip velit nulla non. Nulla id exercitation reprehenderit irure ea labore mollit Lorem esse occaecat sit excepteur magna. Do pariatur sint minim enim.Amet adipisicing ex ea exercitation dolore qui minim irure reprehenderit commodo occaecat. Laborum cillum fugiat esse dolore aute fugiat. Aliquip irure incididunt Lorem quis dolor. Aute tempor amet aliqua duis pariatur ipsum eu incididunt eiusmod. Laborum nisi pariatur minim adipisicing do consequat veniam fugiat. Consequat voluptate est qui reprehenderit sit.Ea ex incididunt quis veniam qui veniam aute reprehenderit. Aute qui occaecat duis non nostrud proident. Officia et ex reprehenderit do nisi ex quis duis ut. Et magna non dolor minim proident cillum eiusmod ex ex dolor cillum adipisicing ut ex. Labore occaecat ut mollit sunt. Dolor dolor sint ad ipsum minim excepteur deserunt culpa eu non laborum amet.",
        category: blogCategories.food,
        image: "",
        date: "Aug, 10 2023",
        id: 2

    },

    {
        title: "This is blog 3",
        content: "Ipsum labore id et fugiat deserunt anim laboris Lorem consectetur eiusmod eu adipisicing ex. Reprehenderit ut officia non occaecat veniam consectetur aliquip laboris velit amet mollit. Ex quis tempor ea fugiat non aliqua magna minim enim exercitation. Nisi laborum et duis elit laboris duis excepteur sunt occaecat exercitation reprehenderit aute amet est.Labore consectetur officia exercitation ipsum exercitation in enim nulla exercitation sint veniam consequat proident. Quis laborum aliquip do qui culpa ad exercitation consectetur. Esse exercitation labore non aliqua laborum do. Cupidatat irure aliquip pariatur commodo laboris officia ullamco et labore deserunt ex velit. Aliqua non elit reprehenderit aute non dolore irure reprehenderit nulla dolor do eu aliqua nulla.Veniam deserunt tempor aliqua ut quis velit laboris nostrud aute ut cillum reprehenderit commodo sunt. Quis irure laboris fugiat commodo magna nulla aute ut sunt. In et aliquip velit nulla non. Nulla id exercitation reprehenderit irure ea labore mollit Lorem esse occaecat sit excepteur magna. Do pariatur sint minim enim.Amet adipisicing ex ea exercitation dolore qui minim irure reprehenderit commodo occaecat. Laborum cillum fugiat esse dolore aute fugiat. Aliquip irure incididunt Lorem quis dolor. Aute tempor amet aliqua duis pariatur ipsum eu incididunt eiusmod. Laborum nisi pariatur minim adipisicing do consequat veniam fugiat. Consequat voluptate est qui reprehenderit sit.Ea ex incididunt quis veniam qui veniam aute reprehenderit. Aute qui occaecat duis non nostrud proident. Officia et ex reprehenderit do nisi ex quis duis ut. Et magna non dolor minim proident cillum eiusmod ex ex dolor cillum adipisicing ut ex. Labore occaecat ut mollit sunt. Dolor dolor sint ad ipsum minim excepteur deserunt culpa eu non laborum amet.",
        category: blogCategories.music,
        image: "",
        date: "Aug, 10 2023",
        id: 3

    },

    {
        title: "This is blog 4",
        content: "Ipsum labore id et fugiat deserunt anim laboris Lorem consectetur eiusmod eu adipisicing ex. Reprehenderit ut officia non occaecat veniam consectetur aliquip laboris velit amet mollit. Ex quis tempor ea fugiat non aliqua magna minim enim exercitation. Nisi laborum et duis elit laboris duis excepteur sunt occaecat exercitation reprehenderit aute amet est.Labore consectetur officia exercitation ipsum exercitation in enim nulla exercitation sint veniam consequat proident. Quis laborum aliquip do qui culpa ad exercitation consectetur. Esse exercitation labore non aliqua laborum do. Cupidatat irure aliquip pariatur commodo laboris officia ullamco et labore deserunt ex velit. Aliqua non elit reprehenderit aute non dolore irure reprehenderit nulla dolor do eu aliqua nulla.Veniam deserunt tempor aliqua ut quis velit laboris nostrud aute ut cillum reprehenderit commodo sunt. Quis irure laboris fugiat commodo magna nulla aute ut sunt. In et aliquip velit nulla non. Nulla id exercitation reprehenderit irure ea labore mollit Lorem esse occaecat sit excepteur magna. Do pariatur sint minim enim.Amet adipisicing ex ea exercitation dolore qui minim irure reprehenderit commodo occaecat. Laborum cillum fugiat esse dolore aute fugiat. Aliquip irure incididunt Lorem quis dolor. Aute tempor amet aliqua duis pariatur ipsum eu incididunt eiusmod. Laborum nisi pariatur minim adipisicing do consequat veniam fugiat. Consequat voluptate est qui reprehenderit sit.Ea ex incididunt quis veniam qui veniam aute reprehenderit. Aute qui occaecat duis non nostrud proident. Officia et ex reprehenderit do nisi ex quis duis ut. Et magna non dolor minim proident cillum eiusmod ex ex dolor cillum adipisicing ut ex. Labore occaecat ut mollit sunt. Dolor dolor sint ad ipsum minim excepteur deserunt culpa eu non laborum amet.",
        category: blogCategories.food,
        image: "",
        date: "Aug, 10 2023",
        id: 4

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
        link: `${routeName.account}`,
        icon: <HiOutlineUser />
    },


    {
        label: "My Order",
        id: 2,
        link: `${routeName.account}/orders`,
        icon: <HiOutlineClipboardList />
    },


    // {
    //     label: "Wishlist",
    //     id: 3,
    //     link: `${routeName.account}/saved`,
    //     icon: <FiHeart />
    // },

    {
        label: "Help",
        id: 4,
        link: "/",
        icon: <IoIosHelpBuoy />
    }
]

export const order = [
    {
        orderId: "WU3746HGG12",
        status: "Delivered",
        date: "Aug 8, 2023",
        products: [
            {
                id: "1",
                name: "Rey Nylon Backpack",
                amount: 2,
                type: "natural",
                sizes: "XL",
                price: "74",
                image: "",

            },

            {
                id: "2",
                name: "Rey Nylon Backpack",
                amount: 2,
                type: "natural",
                sizes: "XL",
                price: "74",
                image: "",

            }
        ]
    },

    {
        orderId: "WU3746HGG12",
        status: "Pending",
        date: "Aug 8, 2023",
        products: [
            {
                id: "1",
                name: "Rey Nylon Backpack",
                amount: 2,
                type: "natural",
                sizes: "XL",
                price: "74",
                image: "",

            },

            {
                id: "2",
                name: "Rey Nylon Backpack",
                amount: 2,
                type: "natural",
                sizes: "XL",
                price: "74",
                image: "",

            }
        ]
    }
]

export const cartProducts = [
    {
        id: "1",
        name: "Rey Nylon Backpack",
        amount: 2,
        type: "natural",
        sizes: "XL",
        price: "74",
        image: "",

    },

    {
        id: "2",
        name: "Rey Nylon Backpack",
        amount: 2,
        type: "natural",
        sizes: "XL",
        price: "74",
        image: "",

    },

    {
        id: "3",
        name: "Rey Nylon Backpack",
        amount: 2,
        type: "natural",
        sizes: "XL",
        price: "74",
        image: "",

    },

    {
        id: "4",
        name: "Rey Nylon Backpack",
        amount: 2,
        type: "natural",
        sizes: "XL",
        price: "74",
        image: "",

    }
]

export const categoryColors = [
    "#F5F3E0",
    "#F4E9E9",
    "#EFF6FF",

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
    promoTwo: PromoTwo,
    forgotPassword: ForgotPassword
}

export const baseUrl = "https://mumiah.shop/api/v1"
export const productUrl = `${baseUrl}/products`;