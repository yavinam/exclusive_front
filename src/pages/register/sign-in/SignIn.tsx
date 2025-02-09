import { useState } from "react";
import sign_photo from "../../../assets/images/sign_photo.png";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data: { token?: string; message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login muvaffaqiyatli:", data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login muvaffaqiyatli!");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Noma'lum xatolik yuz berdi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex mt-10 mb-20">
      <div>
        <img src={sign_photo} alt="sign_photo.png" />
      </div>
      <div className="flex justify-center items-center pl-32">
        <div className="w-[370px] flex flex-col justify-center items-center font-poppins">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-inter font-medium leading-[30px]">
                Log in to Exclusive
              </h2>
              <p className="font-poppins font-normal">Enter your details below</p>
            </div>
            <div className="flex flex-col py-14 gap-10">
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-between items-center">
              <button
                className="bg-[#DB4444] border border-[#DB4444] text-[#FAFAFA] rounded-[4px] py-3 px-8 hover:bg-white hover:text-[#DB4444] duration-150"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Log In"}
              </button>
              <p className="text-[#DB4444] cursor-pointer hover:text-red-800 duration-150">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
