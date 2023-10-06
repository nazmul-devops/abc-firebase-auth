import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p className="py-4">
                Do not have an account?
                <Link className="ml-3" to="/register">
                  <button className="btn-link">Register</button>
                </Link>
              </p>

              <div className="flex gap-5">
                <button onClick={handleGoogleSignIn}>
                  <FcGoogle className="text-3xl"></FcGoogle>
                </button>
                <button>
                  <FaFacebookSquare className="text-3xl"></FaFacebookSquare>
                </button>
                <button>
                  <FaLinkedin className="text-3xl"></FaLinkedin>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
