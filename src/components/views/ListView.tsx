import { Stack } from "@chakra-ui/layout";


const ListView: React.FC = ({ children }) => {
	return (
		<Stack spacing={6}>
			{children}
		</Stack>
	)
}

export default ListView;