package com.example.licensepracticeproject.license.licenseRegist.controller;

import com.example.licensepracticeproject.license.licenseRegist.dto.RegistNextStepDto;
import com.example.licensepracticeproject.license.licenseRegist.service.RegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/regist")
public class RegistController {

    @Autowired
    RegistService registService;

    @GetMapping(path = "/view/main.cm")
    public String TestController(Model model){
        String aaa = registService.testService();
        model.addAttribute("checkTitle",aaa);

        return "html/main";
    }

    @GetMapping(path = "/write.cm")
    public String EnterWriteView(){
        return "html/member-LicenseDeclare-write";
    }

    @PostMapping(path = "/nextStepApi.cm")
    public String NextStepApi(@ModelAttribute("RegistNextStepDto")RegistNextStepDto registNextStepDto
                                                ,Model model) {
        String contentUrl = "html/member-LicenseJob-write";
        model.addAttribute("firstStepInfo",registNextStepDto);
        return contentUrl;
    }

}
