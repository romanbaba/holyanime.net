import { useAuthenticating } from "@/stores/authenticating.js";
import { Button, Flex } from "@radix-ui/themes";

export default function Sidebar() {
  const { isAuthenticating, setAuthenticating } = useAuthenticating();

  const handleChange = () => {
    setAuthenticating(!isAuthenticating);
    signIn("google");
  };

  return (
    <Flex position={"fixed"} height={"100%"} width={"20rem"} direction={"column"} justify={"between"} py={"4"} pt={"6"} px={"2"} className="border-r border-[#272a2d]">
      <Flex direction={"column"} gap={"6rem"}>
        <Flex>1</Flex>
        <Flex>2</Flex>
      </Flex>
      <Flex width={"100%"}>
        <Button style={{ width: "100%" }} loading={isAuthenticating} onClick={handleChange}>Oturum aç</Button>
      </Flex>
    </Flex>
  );
}
