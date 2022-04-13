package practice.sevenstay.sevenstay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("practice.sevenstay.sevenstay")
public class SevenstayApplication {

	public static void main(String[] args) {
		SpringApplication.run(SevenstayApplication.class, args);
	}

}
