package com.sdms.system.service;

import com.sdms.system.model.Teacher;
import com.sdms.system.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    public Teacher signUpNewTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public Teacher findTeacherByTeacherID(String teacherID){
        return teacherRepository.findByTeacherID(teacherID);
    }


}
