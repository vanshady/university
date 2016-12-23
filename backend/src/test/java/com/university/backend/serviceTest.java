package com.university.backend;


/**
 * Created by Xinyu on 12/9/16.
 */
public class serviceTest {
    protected static UniversityService universityService;

    protected static void init() throws UniversityService.UniversityServiceException{
        universityService = new UniversityService();
    }
}
