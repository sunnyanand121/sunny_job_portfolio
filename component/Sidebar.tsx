import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image"

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        className="mx-auto rounded-full"
        src="/images/me.jpg"
        alt="Avtar"
        width="128"
        height="128"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wide font-Kaushan">
        <span className="text-red">Sunny </span>
        Anand
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Senior Software Engineer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Resume_Sunny_Anand.pdf"
        download="Resume_Sunny_Anand.pdf"
      >
        <GiTie className="w-6 h-6" /> download resume
      </a>

      <div className="flex justify-around w-2/3 mx-auto my-5 text-red">
        <a href="https://www.instagram.com/sunnyanand22/" target="_blank">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sunny-anand-9aa906105" target="_blank">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        {/* <a href="" target="_blank">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2 class">
          <GoLocation />
          <span>Pune, Maharashtra, INDIA</span>
        </div>
        <p className="my-2">letsunnybe99@gmail.com</p>
        <p className="my-2">+91-7702574449</p>
      </div>
      <div>
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red to-red-500 focus:outline-none"
          onClick={() => window.open("mailto:letsunnybe99@gmail.com")}
        >
          Email Me
        </button>
        <button
          onClick={changeTheme}
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red to-red-500 focus:outline-none"
        >
          Toggle theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
