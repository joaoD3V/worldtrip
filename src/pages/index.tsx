import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Hero } from '../components/Home/Hero';
import { Slider } from '../components/Home/Slider';
import { TravelTypes } from '../components/Home/TravelTypes';
import { banners, travelTypes } from '../mocks/home';

export default function Home() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Hero />

      <Box maxW={1120} w="100%" m="0 auto" mt="20" mb="40px">
        <TravelTypes travelTypes={travelTypes} />
        <Center mt="80px">
          <Box as="hr" w="90px" h="2px" bg="gray.700" />
        </Center>

        <Center my="52px">
          <Heading
            textAlign="center"
            fontWeight={500}
            fontSize={36}
            lineHeight="54px"
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
