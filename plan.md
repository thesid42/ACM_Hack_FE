Acoustic Shield: Frontend Development Plan v2 (The Storytelling Dashboard)

This plan builds a UI that presents your entire project, not just the final output. Follow these steps.

Step 1: Project Setup (Same as before)

Action: If you haven't already, set up the project.

npm create vite@latest acoustic-shield-ui -- --template react
cd acoustic-shield-ui
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion axios
code .


Step 2: Create the Tabbed Shell

This is the new foundation. We'll set up the main App.jsx to have four tabs.

Action: Go to src/App.jsx. Clear the default content.

Copilot Prompt for src/App.jsx:
"In App.jsx, import useState. Also import Tabs, TabList, TabPanels, Tab, TabPanel, Box, and Container from '@chakra-ui/react'.
Create a React component App.
Inside App, render a <Box>.
Inside the <Box>, render a main <Header> component (which we'll create next).
Below the header, render the Chakra <Tabs> component.
The <Tabs> component should have a <TabList> with four <Tab> items: 'Live Monitor', 'Project Context', 'Data Pipeline', and 'Architecture'.
It should also have a <TabPanels> with four corresponding <TabPanel> items.
For now, just put placeholder text inside each <TabPanel>."

Step 3: Create Components for Tab 1 ("Live Monitor")

This tab is the real-time dashboard. We'll need the same components as before, but with one crucial addition: context.

Action: Create src/components/Header.jsx.
Copilot Prompt: "Create a Chakra UI Header component Header.jsx with the title 'Acoustic Shield 🛡️' using a Heading and Flex, with a dark background."

Action: Create src/components/StatusDisplay.jsx.
Copilot Prompt: "Create a React component StatusDisplay that takes a prop currentEvent. The event object is { class: 'safe', confidence: 0.99 }.
Use a Chakra Card. The background should be 'green.500' for 'safe', 'yellow.500' for 'tire_skid', and 'red.500' for 'crash'.
Inside, show a large Heading 'CURRENT STATUS', the event class capitalized, and the confidence as a percentage."

Action: Create src/components/EventLog.jsx.
Copilot Prompt: "Create a React component EventLog that takes an eventLog array prop. It should render a 'Alert Log' heading. If the log is empty, show 'No alerts recorded.' Otherwise, map the array to a Chakra List, showing the event class and timestamp for each item. Give it a max height and vertical scroll."

Action (CRITICAL NEW COMPONENT): Create src/components/ContextualInfo.jsx.
Copilot Prompt: "Create a React component ContextualInfo that takes a prop currentEvent. The event object is { class: 'safe', context: 'normal', location: '---' }.
Use a Chakra Card with a 'Live Context' heading.
Render a List with items for 'Detected Audio:', 'Inferred Context:', and 'Location:'.
Bind these list items to currentEvent.class, currentEvent.context, and currentEvent.location."

Step 4: Assemble Tab 1 ("Live Monitor")

Now, let's put those components into the first tab and add the mock API poller.

Action: Go to src/App.jsx. Import the components you just made.

Copilot Prompt for src/App.jsx (layout):
"In App.jsx, inside the first <TabPanel>, create a layout.
Import SimpleGrid and VStack from Chakra.
Use a <SimpleGrid> with 2 columns.
In the first column, use a <VStack>. Put the <StatusDisplay /> component on top and the <ContextualInfo /> component below it.
In the second column, put the <EventLog /> component."

Copilot Prompt for src/App.jsx (state and polling):
"In the App component, add useState and useEffect.

Create state currentEvent. Initialize it to { class: 'safe', confidence: 1.0, timestamp: new Date().toISOString(), context: 'normal', location: '---' }.

Create state eventLog, initialized to [].

Create a useEffect hook that runs once.

Inside, create a setInterval that runs every 3 seconds.

Inside the interval, create a mock event generator:

Create a list of mock events:

{ class: 'safe', confidence: 0.98, context: 'normal_traffic', location: 'Highway 101' }

{ class: 'tire_skid', confidence: 0.85, context: 'wet_pavement', location: 'San Jose Hotspot #3' }

{ class: 'crash', confidence: 0.99, context: 'intersection', location: 'San Jose Hotspot #1' }

Pick a random event and call setCurrentEvent.

If the event class is not 'safe', add it to the eventLog state.

Pass the currentEvent and eventLog state down as props to the components in Tab 1.

Remember to clear the interval on component unmount."

Checkpoint: Run npm run dev. You should have a fully functional "Live Monitor" tab that updates with contextual mock data.

Step 5: Create Tab 2 ("Project Context")

This is a static tab that explains the "Why".

Action: Create src/components/ProjectContext.jsx.

Copilot Prompt for src/components/ProjectContext.jsx:
"Create a React component ProjectContext.
Use Chakra's VStack, Heading, and Text.

Create a Heading 'The Problem: Pre-Incident Data Scarcity'.

Add Text: 'Conventional traffic safety systems are reactive. The primary barrier to proactive prevention is a severe lack of training data for "near-miss" events like tire skids and panicked horns, which are rarely recorded.'

Create another Heading 'Our Solution: Generative AI'.

Add Text: 'Acoustic Shield solves this by creating a massive, high-fidelity synthetic dataset. We use procedural audio synthesis to generate realistic, context-aware sounds of danger, allowing us to train a model to hear a crash before it happens.'"

Action: In App.jsx, import ProjectContext and place it inside the second <TabPanel>.

Step 6: Create Tab 3 ("Data Pipeline" - The "How")

This is the interactive "killer feature" tab. We will simulate the generative pipeline.

Action: Create src/components/DataPipelineSimulator.jsx.

Copilot Prompt for src/components/DataPipelineSimulator.jsx:
"Create a React component DataPipelineSimulator.

Import useState and Chakra components: VStack, HStack, Select, Button, Image, Box, Heading, Text.

Create state for location, initialized to 'hotspot1'.

Create state for weather, initialized to 'clear'.

Render a <Heading> 'Interactive Data Generation'.

Render a <Text> 'This simulates how we use contextual data to generate realistic procedural audio.'

Render an <HStack> with two <Select> dropdowns:

The first Select is for Location, with options for 'San Jose Hotspot #1' (value 'hotspot1') and 'Highway 101' (value 'highway101'). Bind it to the location state.

The second Select is for Weather, with options for 'Clear Day' (value 'clear') and 'Heavy Rain' (value 'rain'). Bind it to the weather state.

Render a <Button> 'Generate & Play Synthetic Audio'.

Render an <audio> tag with an id='audio-player' and controls.

Create a function handlePlay:

Inside handlePlay, use an if/else block.

if (location === 'hotspot1' && weather === 'rain') { ... }

Inside the block, set the src of the 'audio-player' to a placeholder URL for a wet skid sound. (We will add real sounds later).

Add other else if conditions for other combinations.

Attach this handlePlay function to the Button's onClick."

(Note: For the hackathon, you'll need to add a few .wav or .mp3 files (e.g., skid-wet.wav, skid-dry.wav) to your public/ folder and update the src in handlePlay to point to them, e.g., /skid-wet.wav.)

Action: In App.jsx, import DataPipelineSimulator and place it inside the third <TabPanel>.

Step 7: Create Tab 4 ("Architecture")

This is the easiest tab. It just shows your diagram.

Action:

Add your AWS Architecture diagram image (e.g., aws_diagram.png) to your public/ folder.

Create src/components/ArchitectureDiagram.jsx.

Copilot Prompt for src/components/ArchitectureDiagram.jsx:
"Create a React component ArchitectureDiagram.
Use Chakra's Box, Heading, and Image.

Render a Heading 'End-to-End AWS Architecture'.

Render an Image component. Set its src to '/aws_diagram.png' and alt to 'AWS Architecture Diagram'."

Action: In App.jsx, import ArchitectureDiagram and place it inside the fourth <TabPanel>.

Final Step: Connect Real API

When your AWS endpoint is ready, go back to Tab 1's logic in App.jsx (Step 4).

Copilot Prompt for src/App.jsx:
"In App.jsx, modify the useEffect polling logic.

Import axios.

Get the API URL from import.meta.env.VITE_API_BASE_URL.

Inside the setInterval, replace the mock generator with an async function fetchData.

Inside fetchData, use axios.get to call the /predict endpoint.

Use a try/catch block.

On success, call setCurrentEvent(response.data) and update the eventLog just like before.

On failure, console.error and set an error state."