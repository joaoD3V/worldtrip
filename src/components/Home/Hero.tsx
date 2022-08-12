import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function Hero() {
  return (
    <Flex
      as="section"
      w="100%"
      h={335}
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
        <Flex flexDir="column">
          <VStack spacing={5}>
            <Heading
              color="gray.50"
              fontWeight="medium"
              fontSize={36}
              lineHeight="54px"
              alignSelf="flex-start"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text color="gray.100" fontSize={20} lineHeight="30px">
              Chegou a hora de tirar do papel a viagem que você <br />
              sempre sonhou.
            </Text>
          </VStack>
        </Flex>
        <Box transform="rotate(3deg)" position="absolute" top={86} right={0}>
          <Image
            src="/img/airplane.svg"
            alt="Airplane"
            width={417}
            height={271}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
