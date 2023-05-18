import burger from '../img/gourmet-burger.jpg';
import salmon from '../img/salmon.jpg';
import chickenSandwich from '../img/hotchickensand.jpg';
import shrimp from '../img/shrimp.jpg'
import bangers from '../img/bangers.jpg';

export const MENU_ITEMS = [
    {
        id: 0,
        name: 'The Good Eats Burger',
        ingredients: 'house ground patty, smoked gouda, romaine lettuce, tomato, red onion, ketchup, dijon mustard',
        img: burger
    },
    {
        id: 1,
        name: 'Hot Chicken Sandwich',
        ingredients: 'nashville-style fried chicken, zesty slaw, pickles',
        img: chickenSandwich
    },
    {
        id: 2,
        name: 'Salmon & Citrus',
        ingredients: 'wild atlantic salmon, lemony mousseline, broccolini',
        img: salmon
    },
    {
        id: 3,
        name: 'Patty Melt',
        ingredients: 'swiss, grilled onion, thousand island, house sourdough',
    },
    {
        id: 4,
        name: `Joe's Pork Tenderloin`,
        ingredients: 'smoked pork tenderloin, apple bbq sauce, collards',
    },
    {
        id: 5,
        name: 'Grilled Chicken Chimichurri',
        ingredients: 'chimichurri, bacon, pickled peppers',
    },
    {
        id: 6,
        name: 'Bangers & Mash',
        ingredients: 'house english sausage, smooth potato mash, brown gravy',
        img: bangers
    },
    {
        id: 7,
        name: 'Chile-Garlic Shrimp',
        ingredients: 'garlic beurre blanc, fried fresno chile',
        img: shrimp
    }
]