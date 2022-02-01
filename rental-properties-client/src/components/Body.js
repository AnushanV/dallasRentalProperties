import { Grid } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Map from "./Map";
import PropertyTable from "./PropertyTable";
import SearchRadiusSelector from "./SearchRadiusSelector";


const Body = () => {
    
    const [lngLat, setLngLat] = useState([-97.03985, 32.92495])
    const [buffer, setBuffer] = useState(500);
    const [avgRent, setAvgRent] = useState(0);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    
    useEffect(() => {
        fetch(`http://localhost:8080/findPropertiesAround/${lngLat[1]}/${lngLat[0]}/${buffer}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [lngLat, buffer]);

    useEffect(() => {
 
        setAvgRent(()=> {
            if(items.length <= 0) return 0;

            let sum = 0;

            for (const item of items){
                sum += item["rent"];
            }

            return sum/items.length;
        });

    }, [items]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <React.Fragment>
                    <PropertyTable lat={lngLat[1]} long={lngLat[0]} buffer={buffer} error={error} isLoaded={isLoaded} items={items}/>
                    <SearchRadiusSelector passBuffer={setBuffer} buffer={buffer}/>
                </React.Fragment>
            </Grid>
            <Grid item xs={7}>
                <Map lngLat={lngLat} avgRent={avgRent} buffer={buffer} passLngLat={setLngLat} />
            </Grid>
        </Grid>
    );
};

export default Body;
