import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { Film } from '../../entities/Film';
import { api } from '../../shared/api';

export function useFilmData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<Film>({
    queryKey: ['film', id],
    queryFn: () => api.getFilm(id),
  });
  return { isLoading, error, data };
}
