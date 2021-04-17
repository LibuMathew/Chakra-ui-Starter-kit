import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Collapse,
  Icon,
  Link,
  Grid,
  GridItem,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  VStack,
  StackDivider,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import logo from './logo.svg';
import './App.scss';

import {
  HamburgerIcon,
  SearchIcon,
} from '@chakra-ui/icons';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box textAlign="center" fontSize="md">
      <Flex
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}>
        <IconButton
          onClick={onOpen}
          ref={btnRef}
          icon={
            isOpen ? null : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle left panel'}
          mt={'2px'}
          marginInlineStart="12px"
          bg="transparent"
        />
      </Flex>

      <DesktopContent />
      <MobileContent />

      <Collapse in={isOpen} animateOpacity>
        <DrawerExample ref={btnRef} isOpen={isOpen} onClose={onClose} />
      </Collapse>
    </Box>
  );
}

const LeftPanel = (props) => {
  return (
    <GridItem minH="100vh" rowSpan={2} colSpan={1} bg="#f7fafc" borderRightWidth="1px">

      <Image src={logo} mt={5} mb={5} w="48%" marginInlineStart={4} />

      <InputGroup w="88%" mt={8} marginInlineStart={'15px'} bg="#fff">
        <InputLeftElement
          pointerEvents="none"
          top="-4px"
          children={<SearchIcon color="gray.300" />}
        />
        <Input placeholder="Search" size="sm" />
      </InputGroup>

      <VStack
        spacing={2}
        align="left"
        textAlign="left"
        m={4}
      >
        <Link href="#" aria-current="page">
          <Box h="38px" marginInlineStart={4} pt="6px" bg="transparent">
            <Icon viewBox="0 0 576 512" fontSize="lg" opacity="0.64" mr={2}>
              <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"></path>
            </Icon>
            <Box as="span" fontSize={'sm'} fontWeight={"medium"}>Images</Box>
          </Box>
        </Link>
        <Link href="#">
          <Box h="38px" marginInlineStart={4} pt="6px" bg="transparent">
            <Icon viewBox="0 0 576 512" fontSize="lg" opacity="0.64" mr={2}>
              <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
            </Icon>
            <Box as="span" fontSize={'sm'} fontWeight={"medium"}>Favorites</Box>
          </Box>
        </Link>
        <Link href="#">
          <Box h="38px" marginInlineStart={4} pt="6px" bg="transparent">
            <Icon viewBox="0 0 576 512" fontSize="lg" opacity="0.64" mr={2}>
              <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"></path>
            </Icon>
            <Box as="span" fontSize={'sm'} fontWeight={"medium"}>Notes</Box>
          </Box>
        </Link>
        <Link href="#">
          <Box h="38px" marginInlineStart={4} pt="6px" bg="transparent" display="inline-block">
            <Icon viewBox="0 0 576 512" fontSize="lg" opacity="0.64" mr={2}>
              <path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path>
            </Icon>
            <Box as="span" fontSize={'sm'} fontWeight={"medium"}>Statistics</Box>
          </Box>
        </Link>
      </VStack>

    </GridItem>
  )
}

const DesktopContent = (props) => {
  return (
    <Grid
      minH="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      display={{ base: 'none', md: 'grid' }}
    >
      <LeftPanel />
      <GridItem colSpan={2} mt={4}>
        <Box w="100%" h="100%" p={4} color="white" className="box">
          &nbsp;
          </Box>
      </GridItem>
      <GridItem colSpan={2} mt={4} mr={4}>
        <Box w="100%" h="100%" p={4} color="white" className="box">
          &nbsp;
          </Box>
      </GridItem>
      <GridItem colSpan={4} mb={4} mr={4}>
        <Box w="100%" h="100%" p={4} color="white" className="box">
          &nbsp;
          </Box>
      </GridItem>
    </Grid>
  )
}

const MobileContent = (props) => {
  return (
    <VStack
      minH="100vh"
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
      justify="stretch"
      display={{ base: 'flex', md: 'none' }}
      m={4}
    >
      <Box p={4} color="white" className="box">
        &nbsp;
      </Box>
      <Box p={4} color="white" className="box">
        &nbsp;
      </Box>
      <Box p={4} color="white" className="box">
        &nbsp;
      </Box>
    </VStack>
  )
}

const DrawerExample = React.forwardRef((props, ref) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="left"
      onClose={props.onClose}
      finalFocusRef={ref}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <LeftPanel />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
});

export default App;
