import { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import profileImg from "../image/profile/account-profile.jpg";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get("https://dummyjson.com/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.log("error:", err);
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <p className="text-center mt-20 text-primary font-bold">loading...</p>
    );
  }

  return (
    <>
      <Menu />
      <div className="px-25 py-10">
        <Link to="/">
          <button className="flex flex-row items-center justify-center gap-1 border border-accent bg-four rounded-[8px] px-3 py-1 cursor-pointer mb-4 hover:bg-accent transition-colors duration-300">
            <FaArrowLeft />
            back
          </button>
        </Link>

        <div className="grid md:grid-cols-2 items-center justify-center md:gap-50 gap-10">
          <div>
            <img
              src={profileImg}
              alt="profile"
              className="rounded-xl"
            />
          </div>

          <div>
            {user && (
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-md">
                <img
                  src={user.image}
                  alt={user.username}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h1 className="text-2xl font-bold text-primary mb-2">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-gray-600">Username: {user.username}</p>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>

                <button
                  className="px-2 py-1 bg-accent rounded-[5px] text-white cursor-pointer mt-2"
                  onClick={handleLogout}
                >
                  log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
