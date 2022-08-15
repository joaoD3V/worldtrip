import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { api } from '../../services/api';

export type City = {
  img: string;
  name: string;
  country: {
    name: string;
    flag: string;
  };
};

export type Info = {
  number: number;
  title: string;
};

export type ContinentProps = {
  img: string;
  title: string;
  description: string;
  infos: Info[];
  cities: City[];
};

type ContinentPageProps = {
  continent: ContinentProps;
};

export default function Continent({ continent }: ContinentPageProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" minH="100vh">
      <Header backButton />

      <Box
        bgColor="blackAlpha.900"
        w="100%"
        h={isWideVersion ? 500 : 150}
        position="relative"
      >
        <Box
          w="100%"
          h="100%"
          bgImage={`url(${continent.img})`}
          bgPosition="center center"
          bgSize="cover"
          bgRepeat="no-repeat"
          opacity={0.6}
        />

        <Box
          flexDir="column"
          w="100%"
          h="100%"
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
          maxW={1120}
          m="0 auto"
        >
          <Heading
            w="100%"
            position="absolute"
            bottom={59}
            left={0}
            fontWeight={600}
            fontSize={isWideVersion ? 48 : 28}
            lineHeight={isWideVersion ? '72px' : '42px'}
            color="gray.50"
            pl={isWideVersion ? 0 : '20px'}
          >
            {continent.title}
          </Heading>
        </Box>
      </Box>

      <Box
        maxW={1120}
        w="100%"
        m="0 auto"
        mt={isWideVersion ? '20' : '6'}
        mb="40px"
        px={isWideVersion ? 0 : 4}
      >
        <Flex
          w="100%"
          flexDir={isWideVersion ? 'row' : 'column'}
          align="center"
          justify="space-between"
          gap={isWideVersion ? '70px' : 4}
        >
          <Box
            dangerouslySetInnerHTML={{ __html: continent.description }}
            fontSize={isWideVersion ? 24 : 14}
            lineHeight={isWideVersion ? '36px' : '21px'}
            textAlign="justify"
            color="gray.700"
            maxW={600}
          />

          <Flex align="center" justify="space-between" w="100%">
            {continent.infos.map((info, index) => (
              <Flex key={info.title} flexDir="column">
                <VStack spacing={0}>
                  <Text
                    color="yellow.500"
                    fontSize={isWideVersion ? 48 : 24}
                    fontWeight={600}
                    lineHeight={isWideVersion ? '72px' : '36px'}
                  >
                    {info.number}
                  </Text>
                  <Text
                    color="gray.700"
                    fontSize={isWideVersion ? 24 : 18}
                    fontWeight={600}
                    lineHeight={isWideVersion ? '36px' : '27px'}
                  >
                    {info.title}
                    {index === 2 && (
                      <Tooltip
                        label="A lista de cidades será atualizada"
                        aria-label="A tooltip"
                      >
                        <span>
                          <Icon
                            as={AiOutlineInfoCircle}
                            fontSize={16}
                            color="gray.400"
                            ml={1}
                          />
                        </span>
                      </Tooltip>
                    )}
                  </Text>
                </VStack>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Heading
          fontSize={isWideVersion ? 36 : 24}
          fontWeight={500}
          color="gray.700"
          lineHeight={isWideVersion ? '54px' : '36px'}
          mt={isWideVersion ? 20 : '32px'}
        >
          Cidades + 100
        </Heading>

        <SimpleGrid minChildWidth="256px" flex="1" gap="8" mt="40px">
          {continent.cities.map((city) => (
            <Flex
              key={city.name}
              h={279}
              w={256}
              flexDir="column"
              borderWidth={1}
              borderStyle="solid"
              borderColor="yellow.500"
              borderRadius="4"
              m={isWideVersion ? 0 : '0 auto'}
            >
              <Box
                w="100%"
                h={173}
                bgImage={`url(${city.img})`}
                bgPosition="center center"
                bgSize="cover"
                bgRepeat="no-repeat"
              />
              <Flex
                align="center"
                justify="space-between"
                w="100%"
                h="calc(100% - 173px)"
                px="24px"
              >
                <Flex flexDir="column" align="flex-start" justify="flex-start">
                  <VStack spacing={3}>
                    <Text
                      color="gray.700"
                      fontWeight={600}
                      fontSize={20}
                      lineHeight="25px"
                      alignSelf="flex-start"
                    >
                      {city.name}
                    </Text>
                    <Text
                      color="gray.400"
                      fontWeight={500}
                      fontSize={16}
                      lineHeight="16px"
                      alignSelf="flex-start"
                    >
                      {city.country.name}
                    </Text>
                  </VStack>
                </Flex>
                <Avatar src={city.country.flag} size="sm" />
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const route = slug === 'europa' ? 'europe' : 'southAmerica';

  const response = await api.get<ContinentProps>(`/${route}`);

  const continent = response.data;

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, //30 minutos
  };
};
