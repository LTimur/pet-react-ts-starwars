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

type FilmApiResponse = {
  results: Film
};
const getFilm = async (id: string): Promise<FilmApiResponse> => {
  try {
    const response = await fetch(`${filmsUrl}/${id}`);
    if (response.ok) {
      return await response.json() as FilmApiResponse;
    }
    throw new Error(`Can not get film by ${id}`);
  } catch (error) {
    console.error(error);
    // @ts-ignore
    return error;
  }
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

export const api = {
  getPlanets,
  getFilms,
  getFilm,
  getCharacters,
};
