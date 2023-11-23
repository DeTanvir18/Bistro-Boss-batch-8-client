import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuBg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBg} title={"Our Menu"}></Cover>
            <SectionTitle heading={"Today's Offer"} subHeading={"Don't Miss"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory items={desserts} title={"desserts"} img={dessertBg}></MenuCategory>
            {/* pizzas menu items */}
            <MenuCategory items={pizzas} title={"pizzas"} img={pizzaBg}></MenuCategory>
            {/* salads menu items */}
            <MenuCategory items={salads} title={"salads"} img={saladBg}></MenuCategory>
            {/* soups menu items */}
            <MenuCategory items={soups} title={"soups"} img={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;