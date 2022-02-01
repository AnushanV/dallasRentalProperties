package com.anushan.rentalProperties;

import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Service
public class RentalPropertyService {

    private final RentalPropertyRepository rentalPropertyRepository;

    @PersistenceContext
    private EntityManager em;

    @Autowired
    public RentalPropertyService(RentalPropertyRepository rentalPropertyRepository) {
        this.rentalPropertyRepository = rentalPropertyRepository;
    }

    public List<RentalProperty> getRentalProperties(){
        return rentalPropertyRepository.findAll();
    }


    public List<RentalProperty> getRentalPropertiesAround(Float latitude, Float longitude, Float buffer){
        System.out.println(latitude + ", " + longitude + ": " + buffer);

        String queryStr = "SELECT mls, rent " +
                "FROM dallas_rent " +
//                "WHERE ST_DWithin(ST_Point(long, lat), ST_Point(" + longitude + ", " + latitude + "), " + buffer + ")";
                "WHERE ST_DWithin(geometry\\:\\:geography, ST_Point(" + longitude + ", " + latitude + ")\\:\\:geography, " + buffer + ")";

        return em.createNativeQuery(queryStr, RentalProperty.class).getResultList();
    }



}
