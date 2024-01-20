'use client'
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Divider,
  Heading,
  Input,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Card,
  Image,
  CardBody
} from "@chakra-ui/react";

export default function Event() {
  return (
    <>
      <Divider />

      <Container maxW='90%' p='6'>
        <Text fontSize='xl' as='b'>
          Browsing events in
        </Text>
        <ArrowRightIcon mx='3' color='blue.500' />
        <Input variant='flushed' placeholder='Finding your location...' maxW='20%'></Input>
      </Container>

      <Divider />

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
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Heading>
                Events in Online
              </Heading>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      {/* Card */}
      <Card variant='elevated'>
        <Image />
        <CardBody>
        
        </CardBody>
      </Card>
    </>
  )
}