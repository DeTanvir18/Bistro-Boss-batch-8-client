import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-12 my-6 px-8 py-6">
                {
                    items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;