import {FunctionComponent} from "react";
import {Box, Typography} from "@mui/material";
import ReactJson from "react-json-view";
import {mockData} from "../../constants/MockData";

const DefaultComponent: FunctionComponent = () => {
  return(
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Typography fontSize="2rem" fontFamily="Times new roman" mb="2rem">
              This is mock data...
          </Typography>
          <Typography fontSize="1.5rem" fontFamily="Times new roman" mb="2rem">
              For Chart and Table click on it's button
          </Typography>
          <Box mb="2rem">
              <ReactJson src={mockData} />
          </Box>
      </Box>
  )
}

export default DefaultComponent;