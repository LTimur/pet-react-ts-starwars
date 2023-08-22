export const baseUrl = 'https://swapi.dev/api/';
export const peopleUrl = `${baseUrl}/people`;
export const filmsUrl = `${baseUrl}/films`;
export const planetsUrl = `${baseUrl}/planets`;

export const getCharacters = async (): Promise<any> => {
  try {
    const response = await fetch(peopleUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error(`Can not get ${url}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getFilms = async (): Promise<any> => {
  try {
    const response = await fetch(filmsUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error(`Can not get ${url}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getPlanets = async (): Promise<any> => {
  try {
    const response = await fetch(planetsUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error(`Can not get ${url}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};
