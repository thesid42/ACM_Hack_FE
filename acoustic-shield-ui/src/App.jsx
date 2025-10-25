import { useState, useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, SimpleGrid, VStack } from '@chakra-ui/react'
import Header from './components/Header'
import StatusDisplay from './components/StatusDisplay'
import EventLog from './components/EventLog'
import ContextualInfo from './components/ContextualInfo'
import ProjectContext from './components/ProjectContext'
import DataPipelineSimulator from './components/DataPipelineSimulator'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import './App.css'

function App() {
  // State for current event
  const [currentEvent, setCurrentEvent] = useState({
    class: 'safe',
    confidence: 1.0,
    timestamp: new Date().toISOString(),
    context: 'normal',
    location: '---'
  })

  // State for event log
  const [eventLog, setEventLog] = useState([])

  // Mock data polling - updates every 3 seconds
  useEffect(() => {
    const mockEvents = [
      { class: 'safe', confidence: 0.98, context: 'normal_traffic', location: 'Highway 101' },
      { class: 'tire_skid', confidence: 0.85, context: 'wet_pavement', location: 'San Jose Hotspot #3' },
      { class: 'crash', confidence: 0.99, context: 'intersection', location: 'San Jose Hotspot #1' }
    ]

    const interval = setInterval(() => {
      // Pick a random event
      const randomEvent = mockEvents[Math.floor(Math.random() * mockEvents.length)]
      const eventWithTimestamp = {
        ...randomEvent,
        timestamp: new Date().toISOString()
      }

      // Update current event
      setCurrentEvent(eventWithTimestamp)

      // If not safe, add to log
      if (randomEvent.class !== 'safe') {
        setEventLog(prevLog => [eventWithTimestamp, ...prevLog].slice(0, 10)) // Keep last 10
      }
    }, 3000) // Every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return (
    <Box minH="100vh" bg="gray.50" p={0} m={0}>
      <Header />
      
      <Box py={6} px={16}>
        <Tabs variant="enclosed" colorScheme="blue" size="lg">
          <TabList>
            <Tab>Live Monitor</Tab>
            <Tab>Project Context</Tab>
            <Tab>Data Pipeline</Tab>
            <Tab>Architecture</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Live Monitor Tab with 2-column layout */}
              <SimpleGrid columns={2} spacing={8}>
                {/* Left Column */}
                <VStack spacing={6} align="stretch">
                  <StatusDisplay currentEvent={currentEvent} />
                  <ContextualInfo currentEvent={currentEvent} />
                </VStack>

                {/* Right Column */}
                <EventLog eventLog={eventLog} />
              </SimpleGrid>
            </TabPanel>
            
            <TabPanel>
              <ProjectContext />
            </TabPanel>
            
            <TabPanel>
              <DataPipelineSimulator />
            </TabPanel>
            
            <TabPanel>
              <ArchitectureDiagram />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default App
