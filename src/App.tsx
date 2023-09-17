import { ThemeProvider } from "styled-components";
import { Wrapper } from "./components/ui/Wrapper";
import GlobalStyles from "./globalStyles";
import { Title } from "./components/ui/Title";
import Table from "./components/Table";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Title as="h1" $ismain>
          Payouts
        </Title>
        <Table />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
