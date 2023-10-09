import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("login location", location);

    const handleLogin =(e)=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        signIn(email, password)
            .then(result =>{
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error =>{
                console.error(error);
            })
    };

    return (
        <div className="mt-5">
            <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-4xl my-5 font-semibold text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="mt-3 text-center text-lg">Do not have an account? Please <Link className="text-red-600 underline font-bold" to="/register">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;