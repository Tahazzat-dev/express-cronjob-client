import { Link } from "react-router-dom";
import logo from "@/assets/logo/fast-crone-logo.png";

export default function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-1 bold duration-1000 w-full ${
        className ? className : ""
      }`}
    >
      <img src={logo} className={`h-9 2xl:h-10 w-auto`} />
      <span
        className={`ecj_fs-md text-black font-semibold tracking-widest duration-700 overflow-hidden`}
      >
        XPRESSCRONJOB
      </span>
    </Link>
  );
}
