//-------------------------------------------------------------------------------------------------------------//
// Code based on a tutorial by Shekhar Gulati of SparkJava at
// https://blog.openshift.com/developing-single-page-web-applications-using-java-8-spark-mongodb-and-angularjs/
//-------------------------------------------------------------------------------------------------------------//

package com.university.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import static spark.Spark.post;
import static spark.Spark.put;
import static spark.Spark.get;

import java.util.Collections;

public class UniversityController {

    private final UniversityService universityService;

    private final Logger logger = LoggerFactory.getLogger(UniversityController.class);

    public UniversityController(UniversityService universityService) {
        this.universityService = universityService;
        setupEndpoints();
    }

    private void setupEndpoints() {

        get("/university_list","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("AllNames");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/all_sat","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("AllSAT");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/search_name/:name","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.UniversitySearch(request.params(":name"));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/search_name/","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("EmptySearchName");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/university/:id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("UniversityInfo",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/university_address/:id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("UniversityAddress",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/tuition_difference/:id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("TuitionDifference",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/public_tuition_difference","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("PublicTuitionDifference");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/tuition_expense_difference/:Id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("TuitionExpenseDifference",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/private_tuition_expense_diff","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("PrivateTuitionExpenseDiff");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/completion_rate/:Id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("CompletionRate",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/avg_enroll_percent/:controlId","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("AvgEnrollPercent",Integer.parseInt(request.params(":controlId")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/avg_debt_value/:controlId","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("AvgDebtValue",Integer.parseInt(request.params(":controlId")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/avg_med_inc","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("AvgMedInc");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/sat_higher/:value","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("SATHigher",Integer.parseInt(request.params(":value")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/all_adm_sat/:value","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("AllAdmissionSAT");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/unit_control/:id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("UniControl",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/unit_state/:name","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithString("UniState",request.params(":name"));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/unit_dist/:id1/:id2","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithTwoInt("UniDist",
                        Integer.parseInt(request.params(":id1")),Integer.parseInt(request.params(":id2")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/unit_degree/:id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("UniDegree",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/unit_race/:id","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithInt("UniRace",Integer.parseInt(request.params(":id")));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/race_rank/:race","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithString("RaceRank",request.params(":race"));
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());

        get("/closed_unit","application/json",(request, response) ->{
            try{
                response.status(200);
                return universityService.procedureWithoutParam("ClosedUni");
            }
            catch (UniversityService.UniversityServiceException ex){
                logger.error(ex.getMessage());
                response.status(404);
                return Collections.EMPTY_MAP;
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
                response.status(410);
                return Collections.EMPTY_MAP;
            }
        },new JsonTransformer());


    }
}
