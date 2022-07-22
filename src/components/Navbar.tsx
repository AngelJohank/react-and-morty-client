import { Flex, Heading, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex align="center" justify="space-between" height="16" mx="8">
      <Heading fontSize="large">React and Morty</Heading>
      <div>
        <Link mr="4">Github</Link>
        <Link>Api</Link>
      </div>
    </Flex>
  );
}

export default Navbar;
