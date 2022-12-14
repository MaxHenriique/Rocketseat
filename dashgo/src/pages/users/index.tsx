import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
const isWideVersion = useBreakpointValue({
  base: false,
  lg: true,
})

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={< Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                { isWideVersion && <Th width="8"></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Max Henrique Fonte</Text>
                    <Text fontSize="sm" color="gray.300">contato.maxhenrique@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril, 2022</Td>}
                { isWideVersion && <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={< Icon as={RiPencilLine} fontSize="16" />}
                  >
                    { isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>}
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Davi Lucca Lima</Text>
                    <Text fontSize="sm" color="gray.300">daviluccalima@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>01 de Abril, 2022</Td>}
                { isWideVersion && <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={< Icon as={RiPencilLine} fontSize="16" />}
                  >
                    { isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>}
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Dr. Thiago Alves</Text>
                    <Text fontSize="sm" color="gray.300">thiagoalves@uorak.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>16 de Março, 2022</Td>}
                { isWideVersion && <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={< Icon as={RiPencilLine} fontSize="16" />}
                  >
                    { isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}