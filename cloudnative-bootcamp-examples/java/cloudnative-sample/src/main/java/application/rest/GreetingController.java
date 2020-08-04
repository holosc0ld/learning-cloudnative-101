package application.rest;

import java.util.concurrent.atomic.AtomicLong;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import application.model.Greeting;
import io.swagger.annotations.Api;

@Api(tags = { "Greeting API" })
@RestController
public class GreetingController {
	
	Logger logger = LoggerFactory.getLogger(GreetingController.class);
	
	@Value("${greetings}")
	private String welcomeMsg;
	
	private static final String template = "Hello, %s :)";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="User") String name) {
        logger.info("Greeting api counter info "+counter.incrementAndGet());
        return new Greeting(counter.incrementAndGet(),
        		welcomeMsg+" "+String.format(template, name));
    }

}
