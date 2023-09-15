import { Dispatch } from "redux";

const setPayoutSuccess = (payload: any) => ({
  type: "SET_PAYOUTS_ACTION",
  payload,
});

const setPayout = (payouts: Payout[]) => (dispatch: Dispatch) => {
  dispatch(setPayoutSuccess(payouts));
};

export { setPayout };
