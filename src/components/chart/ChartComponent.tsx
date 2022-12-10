import {FunctionComponent} from "react";
import {mockData} from "../../constants/MockData";
import {BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis, Legend} from "recharts";
import {Box} from "@mui/material";


const ChartComponent: FunctionComponent = () => {


    return(
        <Box display="flex" justifyContent="center" my="2rem">
            <BarChart width={1400} height={500} data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="monthName" />
                <YAxis />
                <Tooltip/>
                <Legend/>
                <Bar dataKey="numberOfBirth" fill={"#14ad1e"} />
                <Bar dataKey="numberOfDeath" fill={"#b61836"} />
            </BarChart>
        </Box>
    )
}

export default ChartComponent;