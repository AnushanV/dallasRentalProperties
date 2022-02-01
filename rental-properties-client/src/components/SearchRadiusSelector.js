import { Box } from "@mui/system";
import { Paper, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import React from "react";

const SearchRadiusSelector = (props) => {

    function handleChange(e){
        props.passBuffer(e.target.value);
    }

    return (
        <Box m={2} component={Paper} sx={{maxHeight:'15vh', minHeight:'15vh'}}>
            <FormControl>
                <FormLabel>Select Search Radius</FormLabel>
                <RadioGroup name="radioGroup" value={props.buffer} row style={{display:'flex', alignItems:'center'}} onChange={handleChange}>
                    <FormControlLabel value={100} control={<Radio />} label="100m"/>
                    <FormControlLabel value={250} control={<Radio />} label="250m"/>
                    <FormControlLabel value={500} control={<Radio />} label="500m"/>
                    <FormControlLabel value={1000} control={<Radio />} label="1000m"/>
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default SearchRadiusSelector;
