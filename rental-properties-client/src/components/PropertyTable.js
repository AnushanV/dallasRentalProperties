import React from 'react';
import { Paper, TableContainer, TableHead, TableCell, TableRow, Table, TableBody, Box, Typography} from '@mui/material';

const PropertyTable = (props) => {

    //display error message if fetch fails
    if (props.error) {
        return (
            <Box mx={2} component={Paper} sx={{maxHeight:'70vh', minHeight:'70vh'}}>
                <Typography variant="h7">Error: {props.error.message}</Typography>
            </Box>
        );
    } 
    //display loading message if waiting for fetch results
    else if (!props.isLoaded) {
        return (
            <Box mx={2} component={Paper} sx={{maxHeight:'70vh', minHeight:'70vh'}}>
                <Typography variant="h7">Loading...</Typography>
            </Box>
        );
    } 
    //display table of properties and rent
    else {
        return (
            <Box mx={2}>
                <TableContainer component={Paper} sx={{maxHeight:'70vh', minHeight:'70vh'}}>
                    <Table aria-label="simple table" stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">mls</TableCell>
                                <TableCell align="center">rent</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.items.map((item) =>
                                <TableRow key={item.mls} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center">{item.mls}</TableCell>
                                    <TableCell align="center">{item.rent}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }
};

export default PropertyTable;