export type Breakpoints = {
  [key: string]: number;
};

export const breakpoints: Breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
  xlarge: 1200,
};

export const getCurrentBreakpointName = (): string => {
  return Object.keys(breakpoints).reduce((acc, key) => {
    if (window.innerWidth >= breakpoints[key]) {
      acc = key;
    }
    return acc;
  }, 'small');
};
