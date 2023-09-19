import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';

export function useCharacterData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetch(`https://swapi.dev/api/people/${id}`).then(
      (res) => res.json(),
    ),
  });
  return { isLoading, error, data };
}
