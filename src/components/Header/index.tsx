import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

export type HeaderProps = {
  backButton?: boolean;
};

export function Header({ backButton = false }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box as="header" w="100%" h={isWideVersion ? '100px' : '50px'}>
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
              icon={<RiArrowLeftSLine fontSize={isWideVersion ? 32 : 16} />}
              aria-label="Back to Home Page"
              bg="transparent"
              position="absolute"
              left={0}
            />
          </Link>
        )}
        <Box m="0 auto">
          <Image
            src="/img/logo.svg"
            width={isWideVersion ? 184 : 82}
            height={isWideVersion ? 46 : 20}
          />
        </Box>
      </Flex>
    </Box>
  );
}
