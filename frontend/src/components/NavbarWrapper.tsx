import { useEffect, useState } from "react";

import { Hamburger } from "./Hamburger";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./Switcher";

export function NavBarWrapper({ children }: any) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="wrapper  dark:bg-darkie   top-0  flex justify-between px-10 py-4 bg-blueish
        backdrop-blur-sm bg-white/30 shadow-md w-full
                    fixed top-0 left-0 right-0 z-10"
    >
      <div className="flex gap-3  justify-center items-center">
        <Hamburger
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Link
          className=" text-lg  sm:text-2xl dark:text-white font-bricolage font-semibold "
          to={"/"}
        >
          Survey Poll
        </Link>
      </div>
      <div className=" flex gap-3">
        {!isSmallScreen && <div className="flex">{children}</div>}
        <ThemeSwitcher />
      </div>
    </div>
  );
}
