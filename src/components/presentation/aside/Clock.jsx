import { Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <Text size="8">{clock}</Text>;
};

export default Clock;
