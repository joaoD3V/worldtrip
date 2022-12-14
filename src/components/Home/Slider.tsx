import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { A11y, Navigation, Pagination } from 'swiper';
import Link from 'next/link';

export type Banner = {
  img: string;
  slug: string;
  text: {
    title: string;
    subtitle: string;
  };
};

export type SliderProps = {
  banners: Banner[];
};

export function Slider({ banners }: SliderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.text.title}>
          <Link href={`/continente/${banner.slug}`} passHref>
            <Box
              bgColor="blackAlpha.900"
              w="100%"
              h={isWideVersion ? 450 : 250}
              position="relative"
              cursor="pointer"
            >
              <Box
                w="100%"
                h="100%"
                bgImage={`url(${banner.img})`}
                bgPosition="center center"
                bgSize="cover"
                bgRepeat="no-repeat"
                opacity={0.4}
              />

              <Flex
                flexDir="column"
                align="center"
                justify="center"
                w="100%"
                h="100%"
                position="absolute"
                left={0}
                right={0}
                top={0}
                bottom={0}
              >
                <VStack spacing={4}>
                  <Heading
                    color="gray.50"
                    fontWeight={700}
                    fontSize={isWideVersion ? 48 : 24}
                    lineHeight={isWideVersion ? '72px' : '36px'}
                  >
                    {banner.text.title}
                  </Heading>
                  <Text
                    color="gray.100"
                    fontWeight={700}
                    fontSize={isWideVersion ? 24 : 14}
                    lineHeight={isWideVersion ? '36px' : '21px'}
                  >
                    {banner.text.subtitle}
                  </Text>
                </VStack>
              </Flex>
            </Box>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
