import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Max Henrique</Text>
          <Text color="gray.300" fontSize="small">
            contato.maxhenrique@gmail.com
          </Text>
        </Box>
      )}
      
      <Avatar 
        size="md" 
        name="Max Henrique" 
        src="https://avatars.githubusercontent.com/u/101279529?v=4" 
      />
    </Flex>
  );
}