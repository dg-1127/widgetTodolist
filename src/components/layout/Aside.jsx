import { Flex } from "@radix-ui/themes";
import Time from "../presentation/aside/Time";
import WaterBar from "../presentation/aside/WaterBar";
import Weather from "../presentation/aside/Weather";

const Aside = () => {
  return (
    <Flex direction={"column"} style={{ flex: "1" }} align={"center"} gap="7">
      <Time />
      <WaterBar />
      <Weather />
    </Flex>
  );
};

export default Aside;
