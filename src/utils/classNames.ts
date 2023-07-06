// Adds cds and cds-<component> to the class names, merges any others,
// joins and trims the result
export const getClassNames = (
  componentName: string,
  appendClasses: (string | undefined | boolean)[]
): string => {
  return ['cds', `cds-${componentName.toLowerCase()}`, ...appendClasses]
    .filter(v => v !== undefined)
    .join(' ')
    .trim();
};
