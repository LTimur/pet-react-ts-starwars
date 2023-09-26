import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { Character } from '../../entities/Character';

export function useCharacterData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<Character>({
    queryKey: ['character', id],
    queryFn: () => fetch(`https://swapi.dev/api/people/${id}`).then(
      (res) => res.json(),
    ),
  });
  if (!id) {
    return { isLoading: false, error: new Error('Should have an id') };
  }
  return { isLoading, error, data };
}
