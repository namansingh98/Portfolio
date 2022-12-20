import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import "./css/Me.css";
export default function Me() {
  return (
    <div>
      <Box
        style={{
          
          padding: "0px 50px",
        }}
      >
        <Heading as="h3" size="2xl">
          <u> Skills    </u>
        </Heading>
      </Box>
      <Box
        style={{
        
          padding: "0px 50px",
        }}
      >
        <Stack spacing={3}>
        
          
          <Text fontSize="lg" className="text-format">
           i have hands on  Bootstrap ,tailwind, chakra , mui, ant (sort of) etc ui framworks, And having knowledge of html , css , javascript   </Text>
         
        </Stack>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 50px",
        }}
      >
        <Heading as="h3" size="2xl">
          <u> Personal Information</u>
        </Heading>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 50px",
        }}
      >
        <Stack spacing={3}>
          <Heading as="h3" size="xl" mt={"5"}>
            Education
          </Heading>
          <Heading as="h3" size="lg">
            High School
          </Heading>
          <Text fontSize="lg" className="text-format">
            Krishan Chand Gandhi Saraswati Vidhya Mandir
          </Text>
          <Heading as="h3" size="lg">
            Intermediate
          </Heading>
          <Text fontSize="lg" className="text-format">
            Krishan Chand Gandhi Saraswati Vidhya Mandir
          </Text>
          <Heading as="h3" size="lg">
            B.Sc (COMPUTER SCIENCE)
          </Heading>
          <Text fontSize="lg">
            B.Sc (COMPUTER SCIENCE) DR. B. R. Ambedkar Appepring
          </Text>
        </Stack>
      </Box>
    </div>
  );
}
