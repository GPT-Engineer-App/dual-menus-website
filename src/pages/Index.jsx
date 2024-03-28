import React from "react";
import { Box, Flex, Spacer, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton, Image, Text } from "@chakra-ui/react";
import { FaBars, FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

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
            <MenuItem icon={<FaInfoCircle />}>About</MenuItem>
            <MenuItem icon={<FaEnvelope />}>Contact</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Hero Section */}
      <Box p={8} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to My Website
        </Heading>
        <Text fontSize="xl">Discover amazing content and features!</Text>
        <Image src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwaGVybyUyMGltYWdlfGVufDB8fHx8MTcxMTY2NzkzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero Image" mt={8} mx="auto" maxW="500px" />
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
