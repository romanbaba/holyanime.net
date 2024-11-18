import { useAuthenticating } from "@/stores/authenticating.js";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const { isAuthenticating, setAuthenticating } = useAuthenticating();

  const handleChange = () => {
    setAuthenticating(!isAuthenticating);
    signIn("google");
  };

  return (
    <Flex align={"center"} justify={"between"} mr={{ sm: "3rem" }} pt={"1.5rem"}>
      <Flex width={"92%"}>
        <TextField.Root className="w-full" placeholder="Jujutsu Kaisen">
          <TextField.Slot>
            <FaSearch size={"16px"} />
          </TextField.Slot>
        </TextField.Root>
      </Flex>
      <Flex>
        <Button loading={isAuthenticating} onClick={handleChange}>Oturum aç</Button>
      </Flex>
    </Flex>
  );
}