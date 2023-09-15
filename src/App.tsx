import "./App.css";
import Table from "./components/Table";

import { PageTitle } from "./components/ui/PageTitle";
import { Wrapper } from "./components/ui/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <PageTitle>Payouts</PageTitle>
        <Table />
      </Wrapper>
    </>
  );
}

export default App;
