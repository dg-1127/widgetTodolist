import { Button, TextField } from "@radix-ui/themes";

const Input = ({ inputFunc, addFunc }) => {
  return (
    <TextField.Root
      onChange={inputFunc}
      placeholder="To Do List 입력하기!"
      size="3"
    >
      <TextField.Slot side="right">
        <Button onClick={addFunc} variant="solid" size={"3"}>
          추가하기
        </Button>
      </TextField.Slot>
    </TextField.Root>
  );
};

export default Input;
