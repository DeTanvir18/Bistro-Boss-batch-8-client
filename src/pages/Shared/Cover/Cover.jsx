// import { Parallax } from 'swiper/modules';

const Cover = ({ img, title }) => {
    return (
        <div>
            {/* <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            > */}
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: `url('${img}')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-40">
                    <div className="max-w-md mx-10">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            {/* </Parallax> */}
        </div>
    );
};

export default Cover;