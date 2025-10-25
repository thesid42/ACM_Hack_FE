import { VStack, Heading, Text, Box, Divider } from '@chakra-ui/react'

const ProjectContext = () => {
  return (
    <VStack spacing={8} align="stretch" maxW="900px" mx="auto" py={8}>
      {/* The Problem Section */}
      <Box>
        <Heading as="h2" size="xl" mb={4} color="red.600">
          The Problem: Pre-Incident Data Scarcity
        </Heading>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          Conventional traffic safety systems are reactive. The primary barrier to proactive 
          prevention is a severe lack of training data for "near-miss" events like tire skids 
          and panicked horns, which are rarely recorded. Without sufficient data on these 
          critical warning signs, machine learning models cannot learn to identify dangerous 
          situations before they escalate into actual crashes.
        </Text>
      </Box>

      <Divider />

      {/* The Solution Section */}
      <Box>
        <Heading as="h2" size="xl" mb={4} color="green.600">
          Our Solution: Generative AI
        </Heading>
        <Text fontSize="lg" lineHeight="tall" color="gray.700">
          Acoustic Shield solves this by creating a massive, high-fidelity synthetic dataset. 
          We use procedural audio synthesis to generate realistic, context-aware sounds of 
          danger, allowing us to train a model to hear a crash before it happens. By simulating 
          thousands of scenarios with varying conditions (weather, location, time of day), we 
          create the training data that doesn't exist in the real world - enabling truly 
          proactive accident prevention.
        </Text>
      </Box>

      <Divider />

      {/* Impact Section */}
      <Box bg="blue.50" p={6} borderRadius="lg" borderLeft="4px solid" borderLeftColor="blue.500">
        <Heading as="h3" size="md" mb={3} color="blue.700">
          The Impact
        </Heading>
        <Text fontSize="md" color="gray.700">
          With Acoustic Shield, emergency services can be dispatched before a crash occurs, 
          traffic can be rerouted in real-time, and autonomous vehicles can take evasive action 
          based on acoustic warning signs - potentially saving thousands of lives annually.
        </Text>
      </Box>
    </VStack>
  )
}

export default ProjectContext
