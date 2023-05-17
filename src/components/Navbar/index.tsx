import { Flex, Image } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import RightSideSection from './RightSideSection/RightSideSection';

const Navbar = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" alt="/" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: 'none', md: 'unset' }}
          alt="/"
        />
      </Flex>
      <SearchBar />
      <RightSideSection />
    </Flex>
  );
};

export default Navbar;
