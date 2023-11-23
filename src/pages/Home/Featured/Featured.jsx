import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-cover bg-center bg-fixed rounded-sm py-10 my-36 text-white">
            <SectionTitle
                heading="Featured Items"
                subHeading="Check it out"
            ></SectionTitle>

            <div className="flex justify-center items-center py-10 px-40 ">
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-6">
                    <div>
                        <p>November 23, 2023</p>
                        <p className="text-xl uppercase">Where can I get some?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi in mollitia explicabo esse a, quasi eos impedit, animi non vero repellat dolor. Praesentium nobis quia asperiores quasi officiis ipsa facere fuga nulla sed expedita itaque perferendis modi repellendus, perspiciatis ipsam.</p>
                    </div>
                    <button className="btn btn-outline border-0 border-b-4 mt-6">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;