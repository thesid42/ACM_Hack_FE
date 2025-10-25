import { Box, Heading, Flex } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box bg="gray.800" px={8} py={4} boxShadow="md">
      <Flex justify="center" align="center">
        <Heading as="h1" size="xl" color="white">
          🛡️ Acoustic Shield
        </Heading>
      </Flex>
    </Box>
  )
}

export default Header
