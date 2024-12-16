import { Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import Todo from "../presentation/Title/Todo";
import Input from "../presentation/Title/Input";
import Title from "../presentation/Title/Title";

const Todolist = () => {
  const [todoes, setTodoes] = useState([]);
  const [text, setText] = useState("");
  const change = (e) => setText((prev) => e.target.value);
  const add = () => {
    setTodoes((prev) => [...prev, text]);
  };

  const remove = (i) => {
    setTodoes((prev) => {
      const newArr = prev.filter((v, idx) => i != idx);
      return newArr;
    });
  };

  return (
    <Box style={{ flex: "2" }}>
      <Title />
      <Input inputFunc={change} addFunc={add} />
      <Flex p={"4"} direction={"column"} gap={"3"}>
        {todoes.map((v, i) => (
          <Todo task={v} removeFunc={() => remove(i)} />
        ))}
      </Flex>
    </Box>
  );
};

export default Todolist;
