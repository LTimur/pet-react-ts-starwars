import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../shared/api/index';
import { Film } from '../../entities/Film';

const initialState: Film[] = [];

const filmsModel = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms(_, action: PayloadAction<Film[]>) {
      return action.payload;
    },
  },
});

export const { setFilms } = filmsModel.actions;
export const filmsReducer = filmsModel.reducer;

const filmsSelector = (state: { films:Film[] }) => state.films;

export const useFilms = (): [boolean, Film[]] => {
  const films = useSelector(filmsSelector);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    void api.getFilms().then((data) => {
      dispatch(setFilms(data.results));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  return [isLoading, films];
};
