import { Flex, Progress } from "@radix-ui/themes";
import { useState } from "react";
import Water from "./Water";

const WaterBar = () => {
  const [coffees, setcoffees] = useState(Array(8).fill(false));
  const change = (i) => {
    setcoffees((prev) => {
      const newArr = [...prev];
      newArr[i] = !newArr[i];
      return newArr;
    });
  };

  return (
    <Flex
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "10px",
        width: "100%",
      }}
      direction="column"
      gap="3"
    >
      <Progress value={coffees.filter((v) => v == true).length * 12.5} />
      <Flex gap="3" justify={"center"} align="center">
        {coffees.map((v, i) => (
          <Water changefunc={() => change(i)} tired={v} />
        ))}
      </Flex>
    </Flex>
  );
};

export default WaterBar;
