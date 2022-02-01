package com.anushan.rentalProperties;

import com.bedatadriven.jackson.datatype.jts.JtsModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class RentalPropertiesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RentalPropertiesApplication.class, args);
	}

}
