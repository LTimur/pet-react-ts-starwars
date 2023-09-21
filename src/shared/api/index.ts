import type { Planet } from '../../entities/Planet';

const baseUrl = 'https://swapi.dev/api/';
const peopleUrl = `${baseUrl}/people`;
const filmsUrl = `${baseUrl}/films`;
const planetsUrl = `${baseUrl}/planets`;

const getCharacters = async (): Promise<any> => {
  try {
    const response = await fetch(peopleUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Can not get characters');
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getFilm = async (id: string): Promise<any> => {
  try {
    const response = await fetch(`${filmsUrl}/${id}`);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error(`Can not get film by ${id}`);
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getFilms = async (): Promise<any> => {
  try {
    const response = await fetch(filmsUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Can not get films');
  } catch (error) {
    console.error(error);
    return error;
  }
};

type PlanetsApiResponse = {
  results: Planet[]
};
const getPlanets = async (): Promise<PlanetsApiResponse> => {
  try {
    const response = await fetch(planetsUrl);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Can not get planets');
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const api = {
  getPlanets,
  getFilms,
  getFilm,
  getCharacters,
};
