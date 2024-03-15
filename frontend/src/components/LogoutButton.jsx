import { FiLogOut } from "react-icons/fi";
import { Button } from "@chakra-ui/button";

const LogoutButton = () => {
  return (
    <Button
      position={"fixed"}
      top={"30px"}
      right={"30px"}
      size={"sm"}
      onClick={handleLogout}
    >
      <FiLogOut size={20} />
    </Button>
  );
};

export default LogoutButton;
