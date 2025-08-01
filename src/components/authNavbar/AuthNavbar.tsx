import Profile from "../profile/UserProfile";
import SidebarToggler from "../sidebar/SidebarToggler";
import TextLogo from "../logo/TextLogo";
import MobileSidebarToggler from "./MobileSidebarToggler";

export default function AuthNavbar() {
  return (
    <div className="min-h-[63px] lg:min-h-[65px] absolute bg-slate-100 z-10 top-0 right-0 w-full py-2.5 md:py-3 px-4 md:px-5 lg:px-6 flex items-center justify-between dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      <MobileSidebarToggler />
      <SidebarToggler />
      <TextLogo />
      <Profile />
    </div>
  );
}
