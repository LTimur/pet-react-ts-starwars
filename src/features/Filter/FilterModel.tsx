type Item = { name?: string, title?: string };
type Items = Item[];

export const useFilter = <T = Items>(values: Items, filter?: string): T => {
  const filterLowerCased = filter?.toLowerCase() || '';
  return values.filter((item) => (item.name || item.title)?.toLowerCase()
    .startsWith(filterLowerCased)) as T;
};
