import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {

    const handleRegister =(e)=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));

    }


    return (
        <div className="mt-5 mb-10">
            <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-4xl my-5 font-semibold text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="mt-3 text-center text-lg">Already have an account? Please <Link className="text-red-600 underline font-bold" to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default Register;