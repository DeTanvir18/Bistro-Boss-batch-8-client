import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';



const Login = () => {
    // this useRef is for captcha
    const captchaRef = useRef(null);
    // for disable/enable login button
    const [disabled, setDisabled] = useState(true);

    const { createUser, signIn, logOut } = useAuth();

    // this useEffect is for captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])



    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/3 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* for captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} name="captcha" placeholder="type the text above" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2 ms-4 w-1/4">Validate</button>
                            </div>

                            {/* for captcha */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="type the text above" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs w-1/3 mt-2 ms-6">Validate</button>
                            </div> */}


                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='mx-auto text-center font-bold mb-4'><small>New here? <Link to='/signup'>Create a new account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;