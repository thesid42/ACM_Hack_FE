import { Box, Heading, Text } from '@chakra-ui/react'

const StatusDisplay = ({ currentEvent }) => {
  // Determine background color based on event class
  const getBgColor = () => {
    if (currentEvent.class === 'safe') return 'green.500'
    if (currentEvent.class === 'tire_skid') return 'yellow.500'
    if (currentEvent.class === 'crash') return 'red.500'
    return 'gray.500'
  }

  // Capitalize the class name
  const capitalizeClass = (className) => {
    return className
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Format confidence as percentage
  const formatConfidence = (confidence) => {
    return `${(confidence * 100).toFixed(1)}%`
  }

  return (
    <Box 
      bg={getBgColor()} 
      color="white" 
      borderRadius="lg" 
      boxShadow="xl" 
      p={8}
      textAlign="center"
    >
      <Heading as="h2" size="lg" mb={4}>
        CURRENT STATUS
      </Heading>
      <Heading as="h3" size="2xl" mb={4}>
        {capitalizeClass(currentEvent.class)}
      </Heading>
      <Text fontSize="xl" fontWeight="bold">
        Confidence: {formatConfidence(currentEvent.confidence)}
      </Text>
    </Box>
  )
}

export default StatusDisplay
