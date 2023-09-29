import { Paper, Text, Button } from '@mantine/core';

export function About() {
  return (
    <Paper shadow="xl" withBorder p="xl">
      <Text size="xl" style={{ fontWeight: 700, textAlign: 'center' }}>
        Welcome to Star Wars Data Explorer
      </Text>
      <Text style={{ textAlign: 'center' }} mt="sm">
        Star Wars Data Explorer is a React application that allows you to
        explore data from the Star Wars universe using the SWAPI.
      </Text>
      <Text style={{ textAlign: 'center' }} mt="sm">
        The application features a clean and intuitive user interface, making it
        easy to navigate and discover information about Star Wars films,
        planets, and characters.
      </Text>
      <Text style={{ textAlign: 'center' }} mt="xl">
        <Button
          component="a"
          href="https://swapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          color="blue"
        >
          Explore SWAPI
        </Button>
      </Text>
    </Paper>
  );
}
