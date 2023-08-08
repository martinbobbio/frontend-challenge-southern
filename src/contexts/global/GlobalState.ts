export interface GlobalState {
  filters?: {
    camera?: string;
    sol?: number;
    date?: string;
  };
}

export interface FiltersState {
  camera?: string;
  sol?: number;
  date?: string;
}

export type Action = {
  type: 'SET_FILTER';
  payload: FiltersState;
};

export const initialGlobalState: GlobalState = {
  filters: {
    sol: 2000,
  },
};
