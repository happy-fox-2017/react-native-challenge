import axios from 'axios';

const SWAPI_URL = 'https://swapi.co/api/people';

export const loadPeople = (people) => {
  return {
    type: 'LOAD_PEOPLE',
    people,
  };
};

export const getPeople = () => {
  return (dispatch) => {
    axios.get(SWAPI_URL)
    .then((response) => {
      dispatch(loadPeople(response.data.results));
    });
  };
};

export const loadPerson = (person) => {
  return {
    type: 'LOAD_PERSON',
    person,
  };
};

export const resetPerson = () => {
  return {
    type: 'LOAD_PERSON',
    person: {},
  };
};

export const getPerson = (url) => {
  return (dispatch) => {
    axios.get(url)
    .then((response) => {
      dispatch(loadPerson(response.data));
    });
  };
};
