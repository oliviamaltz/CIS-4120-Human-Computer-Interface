import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';  // Import Button for creating the buttons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain } from '@fortawesome/free-solid-svg-icons';  // Import raincloud icon
import "@fontsource/roboto";  // Import Roboto font

function Home(props) {
  // Create an array for the times in standard AM/PM format
  const times = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM'
  ];

  // Create an array for the corresponding temperatures
  const temperatures = [
    '75°', '77°', '80°', '82°', '85°', '87°',
    '81°', '76°', '73°', '65°', '62°', '60°'
  ];

  return (
    <Box 
      width="375px" 
      height="667px" 
      bg="linear-gradient(to bottom, lightSkyBlue, skyblue, deepSkyBlue)" 
      display="flex" 
      alignItems="center" 
      justifyContent="space-between" 
      flexDirection="column"
      pt="40px"
      pb="20px" 
      position="relative"  // Set position relative for the vertical line
    >
      {/* First Text component for "Hi Olivia!" */}
      <Text fontSize="2xl" color="white" fontFamily="Roboto">
        Hi Olivia!
      </Text>
      
      {/* Second Text component for "It's 75 degrees outside!" */}
      <Text fontSize="xl" color="white" fontFamily="Roboto">
        It's 75 degrees outside!
      </Text>
      
      {/* Sun and Cloud icons container */}
      <Box 
        mt="20px" // Add some margin on top for spacing between text and icons
        position="relative" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        width="auto" 
        height="auto" 
      >
        {/* Cloud Icon */}
        <FontAwesomeIcon 
          icon={faCloud}  
          size="5x"       
          color="#D3D3D3" 
          style={{ position: 'relative', zIndex: 1 }} 
        />

        {/* Sun Icon */}
        <FontAwesomeIcon 
          icon={faSun}  
          size="5x"     
          color="yellow" 
          style={{ position: 'relative', zIndex: 2, marginLeft: '-30px' }} 
        />
      </Box>

      {/* Vertical line for weather forecast */}
      <Box 
        position="absolute"
        top="230px"  // Position the vertical line to start right below the sun and cloud
        bottom="110px"  
        width="3px"     
        bg="blue.500"   
      />

      {/* Horizontal lines */}
      <Box 
        position="absolute"
        top="245px"  
        width="65%" 
        display="flex" 
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="300px" 
      >
        {/* Generate 12 horizontal lines (6 to the right, 6 to the left) */}
        {Array.from({ length: 12 }).map((_, index) => (
          <Box key={index} display="flex" width="100%" alignItems="center" position="relative">
            {/* Add temperature labels */}
            {index % 2 === 0 ? (
              // Even indexes: temperatures to the left of the horizontal line
              <Box display="flex" alignItems="center" position="absolute" left="-15%">
                <Text fontSize="lg" fontWeight="bold" color="white" fontFamily="Roboto">
                  {temperatures[index]}
                </Text>
              </Box>
            ) : (
              // Odd indexes: temperatures to the right of the horizontal line
              <Box display="flex" alignItems="center" position="absolute" right="-15%">
                <Text fontSize="lg" fontWeight="bold" color="white" fontFamily="Roboto">
                  {temperatures[index]}
                </Text>
              </Box>
            )}

            {/* Time labels and icons */}
            {/* 8:00 AM - 1:00 PM: Sun icon */}
            {index <= 5 && (
              <Box display="flex" alignItems="center" position="absolute" top="-20px" left={index % 2 === 0 ? "15%" : "65%"} flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                <FontAwesomeIcon icon={faSun} size="sm" color="yellow" style={{ marginRight: index % 2 === 0 ? '5px' : '0px', marginLeft: index % 2 !== 0 ? '5px' : '0px' }} /> {/* Sun Icon */}
                <Text fontSize="sm" color="white" fontFamily="Roboto">
                  {times[index]}
                </Text>
              </Box>
            )}

            {/* 2:00 PM - 4:00 PM: Cloud icon */}
            {index >= 6 && index <= 8 && (
              <Box display="flex" alignItems="center" position="absolute" top="-20px" left={index % 2 === 0 ? "15%" : "65%"} flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                <FontAwesomeIcon icon={faCloud} size="sm" color="#D3D3D3" style={{ marginRight: index % 2 === 0 ? '5px' : '0px', marginLeft: index % 2 !== 0 ? '5px' : '0px' }} /> {/* Cloud Icon */}
                <Text fontSize="sm" color="white" fontFamily="Roboto">
                  {times[index]}
                </Text>
              </Box>
            )}

            {/* 5:00 PM - 7:00 PM: Raincloud icon */}
            {index >= 9 && (
              <Box display="flex" alignItems="center" position="absolute" top="-20px" left={index % 2 === 0 ? "15%" : "65%"} flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                <FontAwesomeIcon icon={faCloudRain} size="sm" color="grey" style={{ marginRight: index % 2 === 0 ? '5px' : '0px', marginLeft: index % 2 !== 0 ? '5px' : '0px' }} /> {/* Raincloud Icon */}
                <Text fontSize="sm" color="white" fontFamily="Roboto">
                  {times[index]}
                </Text>
              </Box>
            )}

            {index % 2 === 0 ? (
              // For even indexes (extend to the right)
              <>
                <Box width="50%" height="3px" bg="blue.500" /> {/* Horizontal line to the right */}
                <Box width="50%" /> {/* Empty space to the left */}
              </>
            ) : (
              // For odd indexes (extend to the left)
              <>
                <Box width="50%" /> {/* Empty space to the right */}
                <Box width="50%" height="3px" bg="blue.500" /> {/* Horizontal line to the left */}
              </>
            )}
          </Box>
        ))}
      </Box>

      {/* Buttons at the bottom */}
      <Box 
        display="flex" 
        justifyContent="space-around" 
        width="100%" 
        mt="auto" 
        pb="20px" 
      >
        {/* Location Button */}
        <Button 
          bg="blue.400" 
          color="white" 
          _hover={{ bg: 'blue.500' }} 
          width="40%" 
          fontFamily="Roboto"
        >
          Location
        </Button>
        
        {/* Weekly Button */}
        <Button 
          bg="blue.400" 
          color="white" 
          _hover={{ bg: 'blue.500' }} 
          width="40%" 
          fontFamily="Roboto"
        >
          Weekly
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
