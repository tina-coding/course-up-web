import { useColorMode } from "@chakra-ui/react";

export type DarkModeAttrReturnType = { bg: string, color: string, colorMode: string };

export const useDarkModeAttr = (): DarkModeAttrReturnType => {
	const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };

  const color = { light: 'black', dark: 'white' };

	const background = bgColor[colorMode];
	const fontColor = color[colorMode];


	return { bg: background, color: fontColor, colorMode}
}