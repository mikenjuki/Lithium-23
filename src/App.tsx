import axios from "axios";
import "./App.css";
import Table from "./components/Table";
import { useEffect, useState } from "react";

import { PageTitle } from "./components/ui/PageTitle";
import { Wrapper } from "./components/ui/Wrapper";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { setPayout } from "./reducers/actions";

function App({ setPayoutAction }) {
  useEffect(() => {
    axios
      .get(
        `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts`
      )
      .then((result: any) => {
        const payouts = result.data.data.map((p: Payout) => {
          p.dateAndTime = new Date(p.dateAndTime).toDateString();
          return p;
        });
        setPayoutAction(payouts);
      })
      .catch((e: unknown) => console.log("UH OH", e));
  }, []);

  return (
    <>
      <Wrapper>
        <PageTitle>Payouts</PageTitle>
        <Table />
      </Wrapper>
    </>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      setPayoutAction: setPayout,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(App);
