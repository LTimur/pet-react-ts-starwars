import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { Character } from '../../entities/Character';
import { api } from '../../shared/api';

export function useCharacterData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<Character>({
    queryKey: ['character', id],
    queryFn: () => api.getCharacter(id),
  });
  if (!id) {
    return { isLoading: false, error: new Error('Should have an id') };
  }
  return { isLoading, error, data };
}
