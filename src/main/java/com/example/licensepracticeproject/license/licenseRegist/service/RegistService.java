package com.example.licensepracticeproject.license.licenseRegist.service;

import com.example.licensepracticeproject.license.licenseRegist.mapper.RegistMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistService {

    @Autowired
    RegistMapper registMapper;

    public String testService() {

        return registMapper.selectTest();
    }
}
