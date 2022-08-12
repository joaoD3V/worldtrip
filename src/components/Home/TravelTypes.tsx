import { Flex, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export type TravelType = {
  icon: string;
  title: string;
};

export type TravelTypesProps = {
  travelTypes: TravelType[];
};

export function TravelTypes({ travelTypes }: TravelTypesProps) {
  return (
    <Flex w="100%" align="center" justify="space-between">
      {travelTypes.map((type) => (
        <Flex key={type.title} flexDir="column" align="center" justify="center">
          <VStack spacing={6}>
            <Image src={type.icon} alt={type.title} width={85} height={85} />
            <Text
              fontSize={24}
              fontWeight={600}
              lineHeight="36px"
              color="gray.700"
            >
              {type.title}
            </Text>
          </VStack>
        </Flex>
      ))}
    </Flex>
  );
}
