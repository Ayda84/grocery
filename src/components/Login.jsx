import axios from "axios";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { PiEyesFill, PiEyeSlash } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../image/Login/auth-products.jpg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const token = res.data.accessToken;
      localStorage.setItem("token", token);

      navigate("/");
    } catch (err) {
      console.log("error:", err);
      setError("username or password is false");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 items-center justify-center gap-50">
        <div className="relative md:flex hidden">
          <img
            src={loginImg}
            alt="login"
            className="h-[710px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-green-200/10 " />
        </div>

        <div className="flex flex-col items-start justify-start">
          <Link to="/">
            <button className="flex flex-row items-center justify-center gap-1 border border-accent bg-four rounded-[8px] px-3 py-1 cursor-pointer mb-4 hover:bg-accent transition-colors duration-300 mt-0 mt-30">
              <FaArrowLeft />
              back
            </button>
          </Link>
          <form
            onSubmit={handleLogin}
            className="bg-secondary/40 rounded-xl flex flex-col items-center gap-2 justify-center p-8 md:w-[500px]
           h-64 md:mt-0 mt-5"
          >
            <h1 className="font-bold text-white text-2xl">Log in</h1>

            <input
              type="text"
              placeholder="username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border-2 border-primary rounded-[5px] px-2 outline-none focus:border-pink-500 focus:scale-110 transition-transform duration-300 mt-2 text-pink-600 w-[225px]"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-2 border-primary rounded-[5px] px-2 pr-8 outline-none focus:border-pink-500 focus:scale-110 transition-transform duration-300 mt-1 text-pink-600 w-full"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
              >
                {showPassword ? <PiEyesFill /> : <PiEyeSlash />}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-[150px] bg-primary/60 text-white rounded-[8px] px-4 py-1 cursor-pointer mt-4 hover:bg-pink-500 transition-colors duration-300"
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>

            <p className="text-xs text-black mt-4 text-center">
              تست: username = emilys / password = emilyspass
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
