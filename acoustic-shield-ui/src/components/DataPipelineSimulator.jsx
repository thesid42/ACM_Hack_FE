import { useState } from 'react'
import { VStack, HStack, Select, Button, Box, Heading, Text, Alert, AlertIcon } from '@chakra-ui/react'

const DataPipelineSimulator = () => {
  const [location, setLocation] = useState('hotspot1')
  const [weather, setWeather] = useState('clear')
  const [audioPlayed, setAudioPlayed] = useState(false)

  const handlePlay = () => {
    setAudioPlayed(true)
    const audioPlayer = document.getElementById('audio-player')
    
    // Map location + weather combinations to audio files
    // Note: You'll need to add actual audio files to the public/ folder
    let audioSrc = ''
    
    if (location === 'hotspot1' && weather === 'rain') {
      audioSrc = '/skid-wet.wav'  // Placeholder - add real file
    } else if (location === 'hotspot1' && weather === 'clear') {
      audioSrc = '/skid-dry.wav'  // Placeholder - add real file
    } else if (location === 'highway101' && weather === 'rain') {
      audioSrc = '/highway-rain.wav'  // Placeholder - add real file
    } else if (location === 'highway101' && weather === 'clear') {
      audioSrc = '/highway-clear.wav'  // Placeholder - add real file
    }
    
    if (audioPlayer && audioSrc) {
      audioPlayer.src = audioSrc
      audioPlayer.play().catch(err => {
        console.log('Audio playback failed:', err)
      })
    }
  }

  return (
    <VStack spacing={8} align="stretch" maxW="800px" mx="auto" py={8}>
      <Box>
        <Heading as="h2" size="xl" mb={4} color="purple.600">
          Interactive Data Generation
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={6}>
          This simulates how we use contextual data to generate realistic procedural audio. 
          Select a location and weather condition to see how our system adapts the generated sounds.
        </Text>
      </Box>

      {/* Location and Weather Selectors */}
      <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
        <HStack spacing={6} mb={6}>
          <Box flex={1}>
            <Text fontWeight="semibold" mb={2} color="gray.700">
              Location
            </Text>
            <Select 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              size="lg"
            >
              <option value="hotspot1">San Jose Hotspot #1 (Intersection)</option>
              <option value="highway101">Highway 101 (Open Road)</option>
            </Select>
          </Box>

          <Box flex={1}>
            <Text fontWeight="semibold" mb={2} color="gray.700">
              Weather
            </Text>
            <Select 
              value={weather} 
              onChange={(e) => setWeather(e.target.value)}
              size="lg"
            >
              <option value="clear">Clear Day</option>
              <option value="rain">Heavy Rain</option>
            </Select>
          </Box>
        </HStack>

        <Button 
          colorScheme="purple" 
          size="lg" 
          width="100%" 
          onClick={handlePlay}
        >
          🔊 Generate & Play Synthetic Audio
        </Button>

        {/* Audio Player */}
        <Box mt={6}>
          <audio 
            id="audio-player" 
            controls 
            style={{ width: '100%' }}
          >
            Your browser does not support the audio element.
          </audio>
        </Box>
      </Box>

      {/* Info Alert */}
      <Alert status="info" borderRadius="md">
        <AlertIcon />
        <Box>
          <Text fontWeight="semibold">How it works:</Text>
          <Text fontSize="sm">
            Our procedural audio synthesis engine combines base sound patterns (tire friction, 
            engine noise, horns) with environmental parameters (weather, surface type, location 
            acoustics) to create realistic training data for scenarios that rarely occur in 
            real-world recordings.
          </Text>
        </Box>
      </Alert>

      {/* Current Selection Display */}
      <Box bg="gray.50" p={4} borderRadius="md">
        <Text fontWeight="semibold" mb={2}>Current Scenario:</Text>
        <Text color="gray.700">
          <strong>Location:</strong> {location === 'hotspot1' ? 'San Jose Hotspot #1' : 'Highway 101'} | {' '}
          <strong>Weather:</strong> {weather === 'clear' ? 'Clear Day' : 'Heavy Rain'}
        </Text>
      </Box>
    </VStack>
  )
}

export default DataPipelineSimulator
