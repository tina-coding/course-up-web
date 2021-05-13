import { Box } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../common/Sidebar';

const Main: React.FC = ({ children }) => {
  return (
    <Box>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem rowSpan={2} colSpan={1} height="100vh">
          <Sidebar />
        </GridItem>
        <GridItem colSpan={4}>{children}</GridItem>
      </Grid>
    </Box>
  );
};

export default Main;
