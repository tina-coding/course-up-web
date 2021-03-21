import { Flex, useColorMode } from '@chakra-ui/react';
import { useDarkModeAttr } from '../hooks/useDarkModeAttr';

export const Container = (props) => {
  const darkMode = useDarkModeAttr();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      overflowY="scroll"
      {...darkMode}
      {...props}
    />
  );
};
