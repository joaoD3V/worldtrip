import { Box, Flex, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

export type TravelType = {
  icon: string;
  title: string;
};

export type TravelTypesProps = {
  travelTypes: TravelType[];
};

export function TravelTypes({ travelTypes }: TravelTypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      flexWrap="wrap"
      px={isWideVersion ? 0 : 5}
      gap={isWideVersion ? 0 : 5}
    >
      {travelTypes.map((type) => (
        <Flex
          key={type.title}
          flexDir={isWideVersion ? 'column' : 'row'}
          align="center"
          justify="center"
        >
          <Stack
            spacing={isWideVersion ? 6 : 2}
            direction={isWideVersion ? 'column' : 'row'}
          >
            {isWideVersion ? (
              <Image src={type.icon} alt={type.title} width={85} height={85} />
            ) : (
              <Box>
                <Image
                  src="/img/types/dot.png"
                  alt="Ponto"
                  width="8px"
                  height="8px"
                />
              </Box>
            )}
            <Text
              fontSize={isWideVersion ? 24 : 18}
              fontWeight={600}
              lineHeight={isWideVersion ? '36px' : '27px'}
              color="gray.700"
            >
              {type.title}
            </Text>
          </Stack>
        </Flex>
      ))}
    </Flex>
  );
}
