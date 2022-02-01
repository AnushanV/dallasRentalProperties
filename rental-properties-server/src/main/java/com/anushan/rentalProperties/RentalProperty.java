package com.anushan.rentalProperties;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.locationtech.jts.geom.Geometry;
import org.locationtech.jts.geom.Point;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;

@Entity
@Table(name = "dallas_rent")
public class RentalProperty {

    @Id
    private Integer mls;
    private Integer rent;

    public Integer getMls() {
        return mls;
    }

    public Integer getRent() {
        return rent;
    }

    public void setRent(Integer rent) {
        this.rent = rent;
    }

    @Override
    public String toString() {
        return "RentalProperty{" +
                "mls=" + mls +
                ", rent=" + rent +
                '}';
    }
}
