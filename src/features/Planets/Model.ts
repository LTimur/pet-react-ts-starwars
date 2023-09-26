import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../shared/Api';
import { Planet } from '../../entities/Planet';

const initialState: Planet[] = [];

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets(_, action: PayloadAction<Planet[]>) {
      return action.payload;
    },
  },
});

export const { setPlanets } = planetsSlice.actions;
export const planetsReducer = planetsSlice.reducer;

const planetsSelector = (state: { planets:Planet[] }) => state.planets;

export const usePlanets = (): [boolean, Planet[]] => {
  const planets = useSelector(planetsSelector);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    void api.getPlanets().then((data) => {
      dispatch(setPlanets(data.results));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  return [isLoading, planets];
};
