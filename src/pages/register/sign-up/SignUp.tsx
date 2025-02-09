import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import sign_photo from "../../../assets/images/sign_photo.png";

const SignUp = () => {
  return (
    <div className="container flex mt-10 mb-20 ">
      <div>
        <img src={sign_photo} alt="sign_photo.png" />
      </div>
      <div className="flex justify-center items-center pl-32">
        <div className="w-[370px] flex flex-col justify-center items-center font-poppins">
          <form action="/">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-inter font-medium leading-[30px]">
                Create an account
              </h2>
              <p className="font-poppins font-normal">
                Enter your details below
              </p>
            </div>
            <div className="flex flex-col py-10 gap-10">
              <input
              className="outline-none border-b-2 pb-2"
              placeholder="Name"
              type="text"
              />
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Email or Phone Number"
                type="text"
              />
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Password"
                type="text"
              />
            </div>
            <button className="w-full bg-red-600 py-3 text-white rounded-md hover:bg-red-700 transition-all mb-4">
              Create Account
            </button>
            <button className="w-full flex items-center justify-center gap-2 border py-3 rounded-md hover:bg-gray-100 transition-all mb-4">
              <FcGoogle className="text-xl" /> Sign up with Google
            </button>
          </form>       
            <div className="flex items-center gap-2 justify-center">
            <h4 className="text-gray-600">Already have an account?</h4>
            <Link to="/sign-in" className="font-semibold text-red-600 border-b-2 border-red-600 hover:text-red-700">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
