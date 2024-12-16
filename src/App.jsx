import { Flex } from "@radix-ui/themes";
import RootBase from "./components/layout/RootBase";
import Aside from "./components/layout/Aside";
import Todolist from "./components/layout/Todolist";

function App() {
  return (
    <RootBase>
      <Flex gap={"5"}>
        <Aside></Aside>
        <Todolist></Todolist>
      </Flex>
    </RootBase>
  );
}

export default App;
