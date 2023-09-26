import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { Film } from '../../entities/Film';

export function useFilmData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<Film>({
    queryKey: ['film', id],
    queryFn: () => fetch(`https://swapi.dev/api/films/${id}`).then(
      (res) => res.json(),
    ),
  });
  if (!id) {
    return { isLoading: false, error: new Error('Should have an id') };
  }
  return { isLoading, error, data };
}
