export const getValueFromUnknown = <T>(
  base: unknown,
  key: string,
  value: T = null,
) => {
  if (typeof base === "object" && key in base) {
    return base[key];
  }

  return value;
};
