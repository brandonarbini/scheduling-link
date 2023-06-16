import {
  Anchor,
  Card,
  Code,
  Container,
  List,
  Text,
  Title,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

const decodedData: string = "";

const App = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Container>
      <Title my="lg">Scheduling Link</Title>
      <Card shadow="sm" bg="gray.0" my="lg" withBorder>
        <List type="ordered">
          <List.Item>
            Fork the{" "}
            <Anchor href="https://github.com/brandonarbini/scheduling-link">
              repository for this page
            </Anchor>
            .
          </List.Item>
          <List.Item>
            In <Code color="teal">app.tsx</Code>, import data from{" "}
            <Code color="teal">data.json</Code>
          </List.Item>
          <List.Item>Join the imported array into a string</List.Item>
          <List.Item>
            Decode the string using <Code color="teal">atob</Code>
          </List.Item>
          <List.Item>
            Store the result in a variable called{" "}
            <Code color="teal">decodedData</Code>
          </List.Item>
          <List.Item>
            Run <Code color="teal">yarn install && yarn dev</Code>
          </List.Item>
          <List.Item>Follow the link 👇</List.Item>
        </List>
        <Text c="dimmed" fz="xs" mt="xl">
          Or you can "cheat".{" "}
          <Anchor onClick={() => toggle()}>{opened ? "-" : "+"}</Anchor>
        </Text>
        {opened && (
          <Text>
            The data in <Code>data.json</Code> is a base64 encoded string broken
            up into an array. You can just take the elements of the array, join
            them together, and base64 decode it to get a scheduling link.
          </Text>
        )}
      </Card>
      <Card shadow="sm" bg="teal" c="white" my="lg" ta="center" withBorder>
        <Title>
          {decodedData ? (
            <Anchor href={decodedData} c="white">
              {decodedData}
            </Anchor>
          ) : (
            "👆 Follow the Instructions"
          )}
        </Title>
      </Card>
    </Container>
  );
};
export default App;
