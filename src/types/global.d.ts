type Payout = {
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
};

type InitialState = {
  payouts: Payout[],
}

type PayoutAction = {
  type: string
  payload: unknown
}
