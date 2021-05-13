import {
	Box, SimpleGrid, Stat,
	StatLabel,
	StatNumber,
	useColorModeValue as mode
} from '@chakra-ui/react';

interface IStatCardProps {
  data: { label: string; value: string | number };
}
const StatCard = (props: IStatCardProps) => {
  const { label, value } = props.data;
  return (
    <Stat
      px={{ base: 4, sm: 6 }}
      py="5"
      bg={mode('white', 'gray.700')}
      shadow="base"
      rounded="lg"
    >
      <StatLabel
        fontWeight="medium"
        isTruncated
        color={mode('gray.500', 'gray.400')}
      >
        {label}
      </StatLabel>
      <StatNumber
        fontSize="3xl"
        fontWeight="medium"
        color={mode('gray.900', 'white')}
      >
        {value}
      </StatNumber>
    </Stat>
  );
};


export type HighlightStat = {
	label: string,
	value: number
};
interface IHighlightProps {
	highlights: HighlightStat[];
}

const Highlight: React.FC<IHighlightProps>= ({ highlights }) => {
  return (
    <Box as="section">
      <Box maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {highlights.map((stat, index) => (
            <StatCard key={index} data={stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Highlight;