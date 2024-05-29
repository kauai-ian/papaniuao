import React, { useState } from "react";
import NewEventModal from "../components/NewEventModal";
import { Box, Button } from "@chakra-ui/react";
import { CalendarComponent } from "../components/CalendarComponent";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
      <Box>
        <Button onClick={openModal}>Create New Event</Button>
        <NewEventModal isOpen={isModalOpen} onClose={closeModal} />
      </Box>
      <Box mt="8">
        <CalendarComponent />
      </Box>
    </Box>
  );
};

export default Home;
