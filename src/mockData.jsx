import MenFashion from './assets/images/menfashion.jpg';
import Beautyy from './assets/images/beautyproducts.jpg';
import Groceries from './assets/images/groceries.jpg';
import Headphone from './assets/images/headphone.jpg';
import womentfashion from './assets/images/womentfashion.jpg'
import Bike from './assets/images/bike.jpg';
import Accessories from './assets/images/accessories.jpg';

import { House, Info, ShoppingBag, MessagesSquare } from 'lucide-react';
import { BsFillBoxSeamFill } from "react-icons/bs";

import { CiCreditCard1 } from "react-icons/ci";
import { BsBank2 } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";

import Customer1 from './assets/images/customer1.jpg';
import Customer2 from './assets/images/customer2.jpg';
import Customer3 from './assets/images/customer3.jpg';
import Customer4 from './assets/images/customer4.jpg';
import Customer5 from './assets/images/customer5.jpg';
import Customer6 from './assets/images/customer6.jpg';
import Customer7 from './assets/images/customer7.jpg';
import Customer8 from './assets/images/customer8.jpg';
import Customer9 from './assets/images/customer9.jpg';
import Customer10 from './assets/images/customer10.jpg';


const categoriesData = (products) => [
    {
        id: 1,
        section: "Men Fashion",
        image: MenFashion,
        categories: [
            ...new Set(
                products.filter(item => item.category.startsWith("men")).map(item => item.category)
            )
        ]
    },

    {
        id: 2,
        section: "Women Fashion",
        image: womentfashion,
        categories: [
            ...new Set(
                products.filter(item =>
                    item.category.startsWith("women") ||
                    item.category.startsWith("tops")
                ).map(item => item.category)
            )
        ]
    },

    {
        id: 3,
        section: "Beauty & Fragrances",
        image: Beautyy,
        categories: [
            ...new Set(
                products.filter(item =>
                    item.category === "beauty" ||
                    item.category === "fragrances" ||
                    item.category === "skin-care"
                ).map(item => item.category)
            )
        ]
    },

    {
        id: 4,
        section: "Electronics",
        image: Headphone,
        categories: [
            ...new Set(
                products.filter(item =>
                    item.category === "smartphones" ||
                    item.category === "laptops" ||
                    item.category === "tablets" ||
                    item.category === "mobile-accessories"
                ).map(item => item.category)
            )
        ]
    },
    {
        id: 5,
        section: "Home & Kitchen",
        image: Groceries,
        categories: [
            ...new Set(
                products.filter(item =>
                    item.category === "groceries" ||
                    item.category === "furniture" ||
                    item.category === "home-decoration" ||
                    item.category === "kitchen-accessories"
                ).map(item => item.category)
            )
        ]
    },
    {
        id: 6,
        section: "Vehicles",
        image: Bike,
        categories: [
            ...new Set(
                products.filter(item => item.category.startsWith("motorcycle") ||
                    item.category.startsWith("vehicle")
                ).map(item => item.category)
            )
        ]
    },
    {
        id: 7,
        section: "Accessories",
        image: Accessories,
        categories: [
            ...new Set(
                products.filter(item =>
                    item.category === "sunglasses" ||
                    item.category === "sports-accessories"
                ).map(item => item.category)
            )
        ]
    }
]

const menuData = [
    {
        id: 1,
        Icon: House,
        page: "Home",
        navigate: '/'
    },
    {
        id: 2,
        Icon: Info,
        page: "About",
        navigate: '/about'
    },
    {
        id: 3,
        Icon: ShoppingBag,
        page: "Products",
        navigate: '/products'
    },
    {
        id: 4,
        Icon: MessagesSquare,
        page: "Contact",
        navigate: '/contact'
    },
    {
        id: 5,
        Icon: BsFillBoxSeamFill,
        page: "My Orders",
        navigate: '/myOrders'
    },
]

const paymentMethodData = [
    {
        id: 1,
        logo: <CiCreditCard1 />,
        title: 'Credit/Debit Card',
        description: 'Pay using any UPI app'
    },
    {
        id: 2,
        logo: <BsBank2 />,
        title: 'Net Banking',
        description: 'Pay using your bank account'
    },
    {
        id: 3,
        logo: <IoWalletOutline />,
        title: 'Wallets',
        description: 'Pay using your wallet balance'
    },
    {
        id: 4,
        logo: <BsCashCoin />,
        title: 'Cash on Delivery (COD)',
        description: 'Pay when you receiver your order'
    },
];

const statsData = [
    {
        id: 1,
        title: "150+",
        description: "Products Available"
    },
    {
        id: 2,
        title: "20+",
        description: "Categories to Explore"
    },
    {
        id: 3,
        title: "50+",
        description: "Exciting Deals"
    },
    {
        id: 4,
        title: "24/7",
        description: "Shopping Access"
    }
];

const cardData = [
    {
        id: 1,
        title: "Quality",
        description: "We bring quality products that customers can confidently choose and enjoy."
    },
    {
        id: 2,
        title: "Convenience",
        description: "We make shopping simple by bringing everything together in one place."
    },
    {
        id: 3,
        title: "Value",
        description: "We offer great products, exciting deals, and genuine value with every purchase."
    },
    {
        id: 4,
        title: "Continuous Improvement",
        description: "We continuously improve KantKart to create smoother and better shopping experiences."
    }
];

const customerReviews = [
    {
        id: 1,
        name: 'Ananya Verma',
        role: 'Software Developer',
        image: Customer1,
        rating: 5,
        description: 'KantKart makes online shopping really simple. The website is easy to navigate, products are well organized, and finding what I need takes just a few clicks.'
    },

    {
        id: 2,
        name: 'Aarav Sharma',
        role: 'Graphic Designer',
        image: Customer2,
        rating: 4,
        description: 'I really enjoyed the shopping experience on KantKart. The product categories are clear, the interface feels clean, and the checkout process is quick and straightforward.'
    },

    {
        id: 3,
        name: 'Priya Singh',
        role: 'Marketing Executive',
        image: Customer3,
        rating: 5,
        description: 'KantKart has a great variety of products. I especially like how easy it is to browse different categories and compare products before making a purchase.'
    },

    {
        id: 4,
        name: 'Rohan Mehta', 
        role: 'Fitness Trainer',
        image: Customer4,
        rating: 4,
        description: 'The overall shopping experience feels smooth and convenient. I can quickly search for products, apply filters, and find exactly what I am looking for.'
    },

    {
        id: 5,
        name: 'Meera Joshi',
        role: 'College Student',
        image: Customer5,
        rating: 5,
        description: 'I love how simple KantKart is to use. The product browsing experience is smooth, and the cart and checkout flow make shopping feel effortless.'
    },

    {
        id: 6,
        name: 'Aditya Kapoor',
        role: 'Content Creator',
        image: Customer6,
        rating: 4,
        description: 'KantKart has a clean and modern interface that makes shopping enjoyable. I especially like the product search and category filters.'
    },

    {
        id: 7,
        name: 'Kabir Malhotra',
        role: 'Business Consultant',
        image: Customer7,
        rating: 5,
        description: 'The website feels fast and well organized. From discovering products to completing checkout, the entire experience is simple and convenient.'
    },

    {
        id: 8,
        name: 'Sneha Gupta',
        role: 'Fashion Stylist',
        image: Customer8,
        rating: 4,
        description: 'I like the variety available on KantKart and how easily I can explore different categories. The product cards provide useful information without feeling cluttered.'
    },

    {
        id: 9,
        name: 'Gunjan Patel',
        role: 'Tech Enthusiast',
        image: Customer9,
        rating: 5,
        description: 'KantKart offers a really smooth browsing experience. The filters, sorting options, wishlist, and cart features make it much easier to manage my shopping.'
    },

    {
        id: 10,
        name: 'Ishita Roy',
        role: 'Working Professional',
        image: Customer10,
        rating: 4,
        description: 'I appreciate how easy KantKart makes online shopping. The clean design, organized categories, and straightforward checkout make the whole experience pleasant.'
    }
];


export { categoriesData, menuData, paymentMethodData, statsData, cardData, customerReviews }
