import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover title={title} img={img}></Cover>}
            <div className="grid md:grid-cols-2 gap-12 mt-24 mb-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="text-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 mb-10 uppercase">Order Your Favourite Food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;