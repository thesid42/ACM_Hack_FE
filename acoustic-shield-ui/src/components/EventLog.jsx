import { Box, Heading, Text, VStack } from '@chakra-ui/react'

const EventLog = ({ eventLog }) => {
  // Capitalize the class name
  const capitalizeClass = (className) => {
    return className
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <Box>
      <Heading as="h3" size="md" mb={4}>
        Alert Log
      </Heading>
      
      <Box 
        maxH="400px" 
        overflowY="auto" 
        border="1px solid" 
        borderColor="gray.200"
        borderRadius="md"
        p={4}
        bg="white"
      >
        {eventLog.length === 0 ? (
          <Text color="gray.500" fontStyle="italic">
            No alerts recorded.
          </Text>
        ) : (
          <VStack spacing={3} align="stretch">
            {eventLog.map((event, index) => (
              <Box 
                key={index}
                p={4} 
                bg="gray.50" 
                borderRadius="md" 
                borderLeft="4px solid"
                borderLeftColor={
                  event.class === 'safe' ? 'green.500' :
                  event.class === 'tire_skid' ? 'yellow.500' :
                  event.class === 'crash' ? 'red.500' :
                  'gray.500'
                }
              >
                <Text fontWeight="bold" fontSize="lg">
                  {capitalizeClass(event.class)}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {new Date(event.timestamp).toLocaleString()}
                </Text>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  )
}

export default EventLog
