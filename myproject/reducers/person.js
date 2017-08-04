export const person = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_PERSON':
      return action.person;
    default:
      return state;
  }
};
