import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { Planet } from '../../entities/Planet';

export function usePlanetData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<Planet>({
    queryKey: ['planet', id],
    queryFn: () => fetch(`https://swapi.dev/api/planets/${id}`).then(
      (res) => res.json(),
    ),
  });
  if (!id) {
    return { isLoading: false, error: new Error('Should have an id') };
  }
  return { isLoading, error, data };
}
