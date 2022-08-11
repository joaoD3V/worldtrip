import { Box, Flex, IconButton } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

export type HeaderProps = {
  backButton?: boolean;
};

export function Header({ backButton = false }: HeaderProps) {
  return (
    <Box as="header" w="100%" h="100px">
      <Flex
        maxW={1120}
        align="center"
        h="100%"
        w="100%"
        m="0 auto"
        position="relative"
      >
        {backButton && (
          <Link href="/" passHref>
            <IconButton
              as="a"
              icon={<RiArrowLeftSLine fontSize={32} />}
              aria-label="Back to Home Page"
              bg="transparent"
              position="absolute"
              left={0}
            />
          </Link>
        )}
        <Box m="0 auto">
          <Image src="/img/logo.svg" width={184} height={46} />
        </Box>
      </Flex>
    </Box>
  );
}
