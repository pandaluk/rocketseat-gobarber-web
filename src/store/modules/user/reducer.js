import produce from "immer";

const INICIAL_STATE = {
  profile: null
};

export default function user(state = INICIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
