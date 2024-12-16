import { Box } from "@radix-ui/themes";

const Water = ({ tired, changefunc }) => {
  return (
    <Box style={{ cursor: "pointer", fontSize: "26px" }} onClick={changefunc}>
      {tired ? "☕" : "😵"}
    </Box>
  );
};
export default Water;
