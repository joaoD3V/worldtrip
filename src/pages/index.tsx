import {
  Box,
  Center,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Hero } from '../components/Home/Hero';
import { Slider } from '../components/Home/Slider';
import { TravelTypes } from '../components/Home/TravelTypes';
import { banners, travelTypes } from '../mocks/home';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Hero />

      <Box
        maxW={1120}
        w="100%"
        m="0 auto"
        mt={isWideVersion ? '20' : '36px'}
        mb="40px"
      >
        <TravelTypes travelTypes={travelTypes} />
        <Center mt={isWideVersion ? '80px' : '36px'}>
          <Box as="hr" w="90px" h="2px" bg="gray.700" />
        </Center>

        <Center my={isWideVersion ? '52px' : '24px'}>
          <Heading
            textAlign="center"
            fontWeight={500}
            fontSize={isWideVersion ? 36 : 20}
            lineHeight={isWideVersion ? '54px' : '30px'}
            color="gray.700"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>
        </Center>

        <Slider banners={banners} />
      </Box>
    </Flex>
  );
}
