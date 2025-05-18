export const readFromLocalStorage = <T>({
  value,
  defValue,
}: {
  value: string;
  defValue: T;
}): T => {
  if (typeof localStorage != "undefined") {
    try {
      const serializedValue = localStorage.getItem(value);
      if (serializedValue === null) return defValue;
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error(error);
      return defValue;
    }
  }
  return defValue;
};

export const writeToLocalStorage = <T>({
  key,
  value,
}: {
  key: string;
  value: T;
}) => {
  if (typeof localStorage != "undefined")
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(error);
    }
};
