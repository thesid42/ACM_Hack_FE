import { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <Box minH="100vh" bg="gray.50" p={0} m={0}>
      {/* Header component will be added in Step 3 */}
      
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
              <p>Live Monitor - Real-time dashboard placeholder</p>
            </TabPanel>
            
            <TabPanel>
              <p>Project Context - Problem and solution explanation placeholder</p>
            </TabPanel>
            
            <TabPanel>
              <p>Data Pipeline - Interactive simulator placeholder</p>
            </TabPanel>
            
            <TabPanel>
              <p>Architecture - AWS diagram placeholder</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default App
