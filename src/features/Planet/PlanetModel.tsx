import {
  useQuery,
} from '@tanstack/react-query';

import { useParams } from 'react-router-dom';

export function usePlanetData() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['planet', id],
    queryFn: () => fetch(`https://swapi.dev/api/planets/${id}`).then(
      (res) => res.json(),
    ),
  });
  return { isLoading, error, data };
}
