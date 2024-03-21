import { Link } from "react-router-dom";
import { NavBarWrapper } from "./NavbarWrapper";

export function AppBar() {
  return (
    <div>
      <NavBarWrapper>
        <Link
          to={"/signin"}
          className=" inline font-bricolage p-2  text-md  dark:text-white  hover:text-btncolor  dark:hover:text-btncolor   "
        >
          Log in
        </Link>
        <Link
          to={"/signup"}
          className=" inline font-bricolage  p-2 dark:text-white  text-md hover:text-btncolor  dark:hover:text-btncolor  "
        >
          Sign up
        </Link>
      </NavBarWrapper>
    </div>
  );
}
