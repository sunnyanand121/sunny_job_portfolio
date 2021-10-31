import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeItem, setactiveItem] = useState<string>("");
  const { pathname } = useRouter();

  const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
  }> = ({ activeItem, setActiveItem, name, route }) => {
    return (
      activeItem !== name && (
        <Link href={route}>
          <a>
            <span onClick={() => setactiveItem(name)} className='hover:text-red'>{name}</span>
          </a>
        </Link>
      )
    );
  };

  useEffect(() => {
    if (pathname === "/") setactiveItem("About");
    if (pathname === "/resume") setactiveItem("Resume");
    if (pathname === "/projects") setactiveItem("Projects");
  }, []);

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className="text-xl font-bold border-b-4 text-red border-red">{activeItem}</span>
      <div className="flex space-x-5 text-lg text-yellow-300">
        <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name='About' route='/' />
        <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name='Projects' route='/projects' />
        <NavItem activeItem={activeItem} setActiveItem={setactiveItem} name='Resume' route='/resume' />
      </div>
    </div>
  );
};

export default Navbar;
