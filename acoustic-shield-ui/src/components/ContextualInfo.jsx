import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react'

const ContextualInfo = ({ currentEvent }) => {
  return (
    <Box 
      bg="white" 
      borderRadius="lg" 
      boxShadow="md" 
      p={6}
      border="1px solid"
      borderColor="gray.200"
    >
      <Heading as="h3" size="md" mb={4} color="blue.600">
        Live Context
      </Heading>
      
      <List spacing={3}>
        <ListItem>
          <Text fontWeight="semibold" color="gray.700">
            Detected Audio:
          </Text>
          <Text color="gray.600" ml={4}>
            {currentEvent.class.split('_').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </Text>
        </ListItem>
        
        <ListItem>
          <Text fontWeight="semibold" color="gray.700">
            Inferred Context:
          </Text>
          <Text color="gray.600" ml={4}>
            {currentEvent.context || 'normal'}
          </Text>
        </ListItem>
        
        <ListItem>
          <Text fontWeight="semibold" color="gray.700">
            Location:
          </Text>
          <Text color="gray.600" ml={4}>
            {currentEvent.location || '---'}
          </Text>
        </ListItem>
      </List>
    </Box>
  )
}

export default ContextualInfo
