package com.sdms.system.repository;

import com.sdms.system.model.Marks;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarksRepository extends MongoRepository <Marks,String> {

    Marks findMarksByStudentID(String studentID);

}
