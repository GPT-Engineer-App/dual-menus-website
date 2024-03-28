import React from "react";
import { Box, Flex, Spacer, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton, Image, Text } from "@chakra-ui/react";
import { FaBars, FaHome, FaVideo, FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" px={4} py={2} bg="gray.100">
        <Heading as="h1" size="xl">
          My Website
        </Heading>
        <Spacer />
        {/* Main Menu */}
        <Menu>
          <MenuButton as={IconButton} icon={<FaBars />} variant="outline" colorScheme="blue" />
          <MenuList>
            <MenuItem icon={<FaHome />}>Home</MenuItem>
            <MenuItem icon={<FaVideo />}>Videos</MenuItem>
            <MenuItem icon={<FaPlay />}>Live Streams</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Hero Section */}
      <Box p={8} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to My Website
        </Heading>
        <Text fontSize="xl">Discover amazing content and features!</Text>
      </Box>

      {/* Footer */}
      <Flex as="footer" align="center" justify="space-between" px={4} py={2} bg="gray.100">
        <Text>&copy; 2023 My Website. All rights reserved.</Text>
        {/* Footer Menu */}
        <Menu>
          <MenuButton as={IconButton} icon={<FaBars />} variant="outline" />
          <MenuList>
            <MenuItem>Terms of Service</MenuItem>
            <MenuItem>Privacy Policy</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Index;
