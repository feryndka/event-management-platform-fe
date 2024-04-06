'use client'

import {
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import ContentAll from "../content/ContentAll";
import ContentOnline from "../content/ContentOnline";

export default function Event() {
  return (
    <>
      <Container maxW='90%' pt='5'>
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab>All</Tab>
            <Tab>Online</Tab>
            <Tab>Today</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="orange.500"
            borderRadius="1px"
          />
          <TabPanels>
            {/* Section All */}
            <TabPanel>
              <Heading>
                All Events
              </Heading>
              <ContentAll />
            </TabPanel>
            {/* Section Online */}
            <TabPanel>
              <Heading>
                Online Events
              </Heading>
              <ContentOnline />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  )
}