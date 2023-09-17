interface Payout {
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
}

interface InitialData {
  metadata: {
    page: number;
    limit: number;
    totalCount: number;
  };
  data: Payout[];
}

interface PayoutStore {
  payouts: Payout[];
  searchResults: Payout[];
  isSearchEmpty: boolean;
}
