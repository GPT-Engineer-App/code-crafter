import React, { useState } from "react";
import { Box, Flex, Text, Textarea, IconButton, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaFile, FaFolder, FaFolderOpen, FaSave } from "react-icons/fa";

const Index = () => {
  const [code, setCode] = useState("");
  const [activeFile, setActiveFile] = useState("untitled.js");

  const files = [
    { name: "index.html", content: "<html>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>" },
    { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n}" },
    { name: "app.js", content: "console.log('Hello World');" },
  ];

  const handleFileClick = (file) => {
    setActiveFile(file.name);
    setCode(file.content);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSaveClick = () => {
    const updatedFiles = files.map((file) => {
      if (file.name === activeFile) {
        return { ...file, content: code };
      }
      return file;
    });
    console.log("Saving files:", updatedFiles);
  };

  return (
    <Flex h="100vh">
      <Box w="250px" bg="gray.100" p="4">
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <FaFolder /> Project
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {files.map((file) => (
                <Flex key={file.name} align="center" p="2" cursor="pointer" bg={activeFile === file.name ? "blue.100" : "transparent"} onClick={() => handleFileClick(file)}>
                  <FaFile />
                  <Text ml="2">{file.name}</Text>
                </Flex>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box flex="1" p="4">
        <Flex justify="space-between" align="center" mb="4">
          <Text fontSize="xl">{activeFile}</Text>
          <IconButton icon={<FaSave />} onClick={handleSaveClick} />
        </Flex>
        <Textarea value={code} onChange={handleCodeChange} h="calc(100vh - 100px)" />
      </Box>
    </Flex>
  );
};

export default Index;
