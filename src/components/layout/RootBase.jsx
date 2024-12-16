import { Box, Container } from "@radix-ui/themes";

const RootBase = ({ children }) => {
  return (
    <Box
      style={{
        height: "100vh",
        padding: "150px",
        backgroundImage: "url(bg.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Container size={"4"}>{children}</Container>
    </Box>
  );
};

export default RootBase;
