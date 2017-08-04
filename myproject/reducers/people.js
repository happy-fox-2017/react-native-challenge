export const people = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PEOPLE':
      return action.people;
    default:
      return state;
  }
};
