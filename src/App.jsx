import {BookingForm} from "./components/forms/booking-form/booking-form";
import {Box, Container} from "@mui/material";

function App() {
  return (
    <Container>
        <Box pt={20}>
            <BookingForm/>
        </Box>
    </Container>
  );
}

export default App;
