import { Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { useDarkModeAttr } from '../hooks/useDarkModeAttr';

type ContainerProps = { pageTitle: string };
export const Container: React.FC<ContainerProps> = ({
  children,
  pageTitle,
  ...props
}) => {
  const {colorMode: _, ...darkMode} = useDarkModeAttr();
  return (
    <>
      <Head>
        <title>{pageTitle} | course up</title>
      </Head>
      <Flex
        direction="column"
        justifyContent="flex-start"
        height="100vh"
        overflowY="scroll"
        p={12}
        {...darkMode}
        {...props}
      >
        <Heading as="h2" fontSize="3xl" mb={6}>
          {pageTitle}
        </Heading>
        {children}
      </Flex>
    </>
  );
};
