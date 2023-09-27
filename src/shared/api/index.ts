import type { Planet } from '../../entities/Planet';
import type { Film } from '../../entities/Film';
import type { Character } from '../../entities/Character';

const baseUrl = 'https://swapi.dev/api/';
const peopleUrl = `${baseUrl}/people`;
const filmsUrl = `${baseUrl}/films`;
const planetsUrl = `${baseUrl}/planets`;

type CharactersApiResponse = {
  results: Character[]
};
const getCharacters = async (): Promise<CharactersApiResponse> => {
  try {
    const response = await fetch(peopleUrl);
    if (response.ok) {
      return await response.json() as CharactersApiResponse;
    }
    throw new Error('Can not get characters');
  } catch (error) {
    console.error(error);
    // @ts-ignore
    return error;
  }
};

const getCharacter = async (id?: string) => {
  if (!id) {
    throw new Error('Should have an id');
  }
  const response = await fetch(`${peopleUrl}/${id}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Cannot get data about character');
};

type FilmsApiResponse = {
  results: Film[]
};
const getFilms = async (): Promise<FilmsApiResponse> => {
  try {
    const response = await fetch(filmsUrl);
    if (response.ok) {
      return await response.json() as FilmsApiResponse;
    }
    throw new Error('Can not get films');
  } catch (error) {
    console.error(error);
    // @ts-ignore
    return error;
  }
};

const getFilm = async (id?: string) => {
  if (!id) {
    throw new Error('Should have an id');
  }
  const response = await fetch(`${filmsUrl}/${id}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Cannot get data about film');
};

type PlanetsApiResponse = {
  results: Planet[]
};
const getPlanets = async (): Promise<PlanetsApiResponse> => {
  try {
    const response = await fetch(planetsUrl);
    if (response.ok) {
      return await response.json() as PlanetsApiResponse;
    }
    throw new Error('Can not get planets');
  } catch (error) {
    console.error(error);
    // @ts-ignore
    return error;
  }
};

const getPlanet = async (id?: string) => {
  if (!id) {
    throw new Error('Should have an id');
  }
  const response = await fetch(`${planetsUrl}/${id}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Cannot get data about planet');
};

export const api = {
  getCharacters,
  getCharacter,
  getFilms,
  getFilm,
  getPlanets,
  getPlanet,
};
