package com.example.licensepracticeproject.license.licenseRegist.controller;

import com.example.licensepracticeproject.license.licenseRegist.service.RegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RegistController {

    @Autowired
    RegistService registService;

    @RequestMapping(value = "/view/main.cm")
    public String TestController(Model model){
        String aaa = registService.testService();
        model.addAttribute("checkTitle",aaa);

        return "html/main";
    }
}
