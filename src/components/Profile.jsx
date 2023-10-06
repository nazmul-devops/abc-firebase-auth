import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">
        Hello {user.email} <br /> welcome
      </h2>
    </div>
  );
};

export default Profile;
