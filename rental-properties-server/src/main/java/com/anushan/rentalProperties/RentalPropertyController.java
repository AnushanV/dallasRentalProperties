package com.anushan.rentalProperties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RentalPropertyController {

    private final RentalPropertyService rentalPropertyService;

    @Autowired
    public RentalPropertyController(RentalPropertyService rentalPropertyService){
        this.rentalPropertyService = rentalPropertyService;
    }

    //get all the rental properties
    @GetMapping()
    public List<RentalProperty> getRentalProperties(){
        return rentalPropertyService.getRentalProperties();
    }

    @CrossOrigin
    @GetMapping("/findPropertiesAround/{lat}/{lon}/{buffer}")
    public List<RentalProperty> getRentalPropertiesNear(
            @PathVariable Float lat,
            @PathVariable Float lon,
            @PathVariable Float buffer
    ){
        return rentalPropertyService.getRentalPropertiesAround(lat, lon, buffer);
    }


}
