package com.university.backend;

import org.junit.BeforeClass;
import org.junit.Test;

/**
 * Created by Xinyu on 12/9/16.
 */
public class getAllNamesTest extends serviceTest{
    @BeforeClass
    public static void setup() throws UniversityService.UniversityServiceException{
        init();
    }

    @Test
    public void test() throws UniversityService.UniversityServiceException{
        universityService.procedureWithoutParam("AllNames");
    }
}
