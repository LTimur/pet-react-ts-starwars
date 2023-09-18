import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';

export function useFilmData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['film', id],
    queryFn: () => fetch(`https://swapi.dev/api/films/${id}`).then(
      (res) => res.json(),
    ),
  });
  return { isLoading, error, data };
}
