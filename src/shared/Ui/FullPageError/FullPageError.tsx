import { Container, Paper, Text } from '@mantine/core';

type FullPageWrapperProps = {
  error?: Error | null;
};

export function FullPageError(props: FullPageWrapperProps) {
  const { error } = props;
  return (
    <Container size="xl">
      <Paper shadow="xs" p="xl">
        <Text size="xl" style={{ marginBottom: '20px' }}>
          Something went wrong:
        </Text>
        <Text>
          {error?.message}
        </Text>
      </Paper>
    </Container>
  );
}
