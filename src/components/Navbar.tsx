import { Flex, Heading, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      w="100%"
      h="16"
      px="8"
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      left="0"
      bgColor="white"
    >
      <Heading fontSize="large">React and Morty</Heading>
      <div>
        <Link
          href="https://github.com/AngelJohank/react-and-morty-client"
          target="_blank"
          mr="4"
        >
          Github
        </Link>
        <Link href="https://rickandmortyapi.com/documentation/" target="_blank">
          Api
        </Link>
      </div>
    </Flex>
  );
}

export default Navbar;
