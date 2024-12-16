import { Text } from "@radix-ui/themes";

const DateCustom = () => {
  return <Text size="8">{new Date().toLocaleDateString()}</Text>;
};

export default DateCustom;
