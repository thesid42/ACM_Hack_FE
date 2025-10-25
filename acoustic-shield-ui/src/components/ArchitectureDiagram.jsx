import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'

const ArchitectureDiagram = () => {
  return (
    <VStack spacing={6} align="stretch" maxW="1200px" mx="auto" py={8}>
      <Box textAlign="center">
        <Heading as="h2" size="xl" mb={4} color="orange.600">
          End-to-End AWS Architecture
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={6}>
          Our complete cloud infrastructure for real-time acoustic threat detection and classification
        </Text>
      </Box>

      <Box 
        bg="white" 
        p={8} 
        borderRadius="lg" 
        boxShadow="xl"
        textAlign="center"
      >
        <Image 
          src="/aws_diagram.png" 
          alt="AWS Architecture Diagram" 
          fallbackSrc="https://via.placeholder.com/1000x600/gray/white?text=AWS+Architecture+Diagram+Coming+Soon"
          borderRadius="md"
          maxH="600px"
          mx="auto"
          objectFit="contain"
        />
      </Box>

      <Box bg="blue.50" p={6} borderRadius="lg">
        <Heading as="h3" size="md" mb={3} color="blue.700">
          Architecture Components
        </Heading>
        <VStack align="stretch" spacing={2}>
          <Text color="gray.700">
            <strong>• Data Ingestion:</strong> Real-time audio streaming from IoT sensors
          </Text>
          <Text color="gray.700">
            <strong>• Processing:</strong> Lambda functions for audio preprocessing and feature extraction
          </Text>
          <Text color="gray.700">
            <strong>• ML Inference:</strong> SageMaker endpoint for acoustic classification
          </Text>
          <Text color="gray.700">
            <strong>• Storage:</strong> S3 for audio data and model artifacts
          </Text>
          <Text color="gray.700">
            <strong>• API Layer:</strong> API Gateway for RESTful endpoints
          </Text>
          <Text color="gray.700">
            <strong>• Monitoring:</strong> CloudWatch for logging and alerting
          </Text>
        </VStack>
      </Box>
    </VStack>
  )
}

export default ArchitectureDiagram
