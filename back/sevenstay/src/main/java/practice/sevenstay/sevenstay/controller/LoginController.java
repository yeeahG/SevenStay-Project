package practice.sevenstay.sevenstay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping("/login")
public class LoginController {
    
    // @RequestMapping(value="/login", method=RequestMethod.GET)
    // public String loginPage() {
    //     return "login";
    // }

        
    // @RequestMapping(value="/signin", method=RequestMethod.GET)
    // public String SigninPage() {
    //     return "Signin";
    // }

    @PostMapping
    public String insertUser() {
        return "Login";
    }

    
}
