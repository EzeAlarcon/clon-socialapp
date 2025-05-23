import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import Login from "../components/Login";
import SignupCard from "../components/SignupCard";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "login" ? <Login /> : <SignupCard />}</>;
};

export default AuthPage;
