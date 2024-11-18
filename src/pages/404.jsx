import { Flex, Heading } from "@radix-ui/themes";

export default function NotFound() {
  return (
    <Flex mt={"24rem"} height={"100%"} width={"100%"} justify={"center"} align={"center"} direction={"column"}>
      <Heading size={"9"}>404</Heading>
      <Heading>Aradağınız ilgil içerik bulunamadı.</Heading>
    </Flex>
  );
}