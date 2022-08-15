import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

export function Hero() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="section"
      w="100%"
      h={isWideVersion ? 335 : 163}
      bgImage="url('/img/hero-background.png')"
      bgPosition="center center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex
        maxW={1120}
        w="100%"
        m="0 auto"
        align="center"
        justify="space-between"
        position="relative"
      >
        <Flex flexDir="column" pl={isWideVersion ? 0 : 4}>
          <VStack spacing={isWideVersion ? 5 : 2}>
            <Heading
              color="gray.50"
              fontWeight="medium"
              fontSize={isWideVersion ? 36 : 20}
              lineHeight={isWideVersion ? '54px' : '30px'}
              alignSelf="flex-start"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text
              color="gray.100"
              fontSize={isWideVersion ? 20 : 14}
              lineHeight={isWideVersion ? '30px' : '21px'}
            >
              Chegou a hora de tirar do papel a viagem que você <br />
              sempre sonhou.
            </Text>
          </VStack>
        </Flex>

        {isWideVersion && (
          <Box transform="rotate(3deg)" position="absolute" top={86} right={0}>
            <Image
              src="/img/airplane.svg"
              alt="Airplane"
              width={417}
              height={271}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
