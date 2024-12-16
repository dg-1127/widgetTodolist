import { TrashIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

const Todo = ({ task, removeFunc }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <Flex justify={"between"} align={"center"}>
      <Button onClick={() => setIsDone((prev) => !prev)}>
        {isDone ? "완료" : "미완료"}
      </Button>
      <Text style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {task}
      </Text>
      <TrashIcon onClick={removeFunc} />
    </Flex>
  );
};

export default Todo;
