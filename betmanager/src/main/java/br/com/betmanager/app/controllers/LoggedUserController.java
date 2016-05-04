package br.com.betmanager.app.controllers;

import br.com.betmanager.app.models.User;
import br.com.betmanager.app.models.vo.LoggedUserVO;
import br.com.betmanager.app.services.LoggedUserService;
import br.com.betmanager.app.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(value = "/logged-user")
public class LoggedUserController {

    private final LoggedUserService loggedUserService;

    @Autowired
    private Mapper mapper;

    @Autowired
    public LoggedUserController(LoggedUserService loggedUserService) {
        this.loggedUserService = loggedUserService;
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public LoggedUserVO getLoggedUser(Principal authentication) {
        User user = loggedUserService.getLoggedUser(authentication);
        return mapper.map(user, LoggedUserVO.class);
    }
}
