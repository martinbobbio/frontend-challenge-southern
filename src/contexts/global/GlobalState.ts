export interface GlobalState {
  loading: boolean;
}

export type Action = { type: 'SET_LOADING'; payload: boolean };

export const initialGlobalState: GlobalState = {
  loading: false,
};
