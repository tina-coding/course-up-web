import { SimpleGrid } from "@chakra-ui/layout";


const GridView: React.FC = ({ children }) => {
	return (
		<SimpleGrid columns={3} spacing={6}>
			{children}
		</SimpleGrid>
	)
}

export default GridView;