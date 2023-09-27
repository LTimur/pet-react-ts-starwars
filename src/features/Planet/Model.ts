import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { Planet } from '../../entities/Planet';
import { api } from '../../shared/api';

export function usePlanetData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<Planet>({
    queryKey: ['planet', id],
    queryFn: () => api.getPlanet(id),
  });
  if (!id) {
    return { isLoading: false, error: new Error('Should have an id') };
  }
  return { isLoading, error, data };
}
