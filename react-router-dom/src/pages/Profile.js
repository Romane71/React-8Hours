import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      PROFILE, user is {username}
      <ChangeProfile />
    </div>
  );
};
