import { DarkModeAttrReturnType, useDarkModeAttr } from "./useDarkModeAttr";


type DarkModeSidebarAttrReturnType = Record<'borderRight' | 'borderRightColor' | 'boxShadow', string>;
type DarkModeSidebarReturnType = DarkModeSidebarAttrReturnType & Omit<DarkModeAttrReturnType, 'colorMode'>;
export const useDarkModeSidebarAttr = (): DarkModeSidebarReturnType => {
	const { bg, color, colorMode } = useDarkModeAttr();


  const borderRightAttr = { light: '0px', dark: '2px' };
  const borderRightColorAttr = { light: 'transparent', dark: 'gray.800' };
  const boxShadowAttr = { light: 'xl', dark: 'none' };

  const borderRight = borderRightAttr[colorMode];
  const borderRightColor = borderRightColorAttr[colorMode];
  const boxShadow = boxShadowAttr[colorMode];

  return { bg, color, borderRight, borderRightColor, boxShadow };
};