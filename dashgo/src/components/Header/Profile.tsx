import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
          <Text>Max Henrique</Text>
          <Text color="gray.300" fontSize="small">
              contato.maxhenrique@gmail.com
          </Text>
      </Box>
      
      <Avatar size="md" name="Max Henrique" src="https://avatars.githubusercontent.com/u/101279529?v=4" />
    </Flex>
  );
}