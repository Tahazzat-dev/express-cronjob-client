import InvalidUser from "@/components/shared/InvalidUser";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import DefaultUser from "@/assets/logo/default-profile.png";
import { getExpiryText } from "@/utils/utils";
import { UserIcon } from "@/components/icons/Icons";

export default function UserProfile() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  if (!authUser) return <InvalidUser message="Invalid User" />;

  const packageType =
    authUser.subscription?.type === "trial"
      ? "2-days free trial"
      : authUser.subscription?.type;
  console.log(authUser);
  return (
    <>
      <div className="w-full max-w-[150px] max-h-[150px] border border-slate-300 h-[150px] rounded-full mx-auto">
        <img
          width={150}
          height={150}
          className="w-full h-full"
          src={
            authUser.profile?.avatarUrl
              ? authUser.profile?.avatarUrl
              : DefaultUser
          }
          alt="User Profile"
        />
      </div>
      <h6 className="font-semibold text-center my-5">
          {authUser.name || "No name"}
        </h6>
      <div className="w-full flex flex-col gap-1.5">
        <p className=""><span className="font-semibold">Status :</span> {authUser.status ==="enabled" ? <span className="text-green-600">Active</span>:authUser.status}</p>
        <p className=""><span className="font-semibold">User Name :</span> {authUser.username}</p>
        <p className=""><span className="font-semibold">Email :</span> {authUser.email}</p>
        <p className=""><span className="font-semibold">Phone :</span> {authUser.mobile}</p>
        <p className=""><span className="font-semibold">Current Package :</span> {packageType}</p>
        <p><span className="font-semibold">{getExpiryText(authUser.packageExpiresAt).label} : </span>{getExpiryText(authUser.packageExpiresAt).date}</p>
      </div>
    </>
  );
}
