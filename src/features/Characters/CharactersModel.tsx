import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../shared/api';
import { Character } from '../../entities/Character';

const initialState: CharacterProps[] = [];

const charactersModel = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(_, action: PayloadAction<CharacterProps[]>) {
      return action.payload;
    },
  },
});

export const { setCharacters } = charactersModel.actions;
export const charactersReducer = charactersModel.reducer;

const charactersSelector = (state: { characters:Character[] }) => state.characters;

export const useCharacters = () => {
  const characters = useSelector(charactersSelector);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    void api.getCharacters().then((data) => {
      dispatch(setCharacters(data.results));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  return [isLoading, characters];
};
