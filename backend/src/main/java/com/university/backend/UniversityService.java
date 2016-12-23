//-------------------------------------------------------------------------------------------------------------//
// Code based on a tutorial by Shekhar Gulati of SparkJava at
// https://blog.openshift.com/developing-single-page-web-applications-using-java-8-spark-mongodb-and-angularjs/
//-------------------------------------------------------------------------------------------------------------//

package com.university.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.sql2o.Connection;
//import org.sql2o.Sql2o;
//import org.sql2o.Sql2oException;
//import org.sql2o.data.Row;
//import org.sql2o.data.Table;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.*;
import java.util.*;


public class UniversityService {

    private final Logger logger = LoggerFactory.getLogger(UniversityService.class);

    /**
     * Construct the model with a pre-defined datasource. The current implementation
     * also ensures that the DB schema is created if necessary.
     */
    public UniversityService() throws UniversityServiceException {
        getConnection();
    }

    public List<Map<String,Object>> UniversitySearch(String partialName) throws UniversityServiceException{
        try (Connection conn = getConnection()){
            String searchName = String.join("%",partialName.split("\\s+"));
            searchName = "%" + searchName + "%";
            try(ResultSet resultSet = conn.createStatement().
                    executeQuery("CALL SearchName(\'" + searchName + "\')"))
            {
                return resultSetToArrayList(resultSet);
            }
        }
       catch (SQLException ex){
            logger.error("SQL exception from UniversitySearch");
            throw new UniversityServiceException(ex.getMessage(),ex.getCause());
        }
    }

    public List<Map<String,Object>> procedureWithoutParam(String procedure) throws UniversityServiceException{
        try (Connection conn = getConnection()){
            try(ResultSet resultSet = conn.createStatement()
                    .executeQuery("CALL "+procedure+"()"))
            {
                return resultSetToArrayList(resultSet);
            }
        }
        catch (SQLException ex){
            logger.error("SQL exception from UniversityInfo");
            throw new UniversityServiceException(ex.getMessage(),ex.getCause());
        }
    }

    public List<Map<String,Object>> procedureWithInt(String procedure,int id) throws UniversityServiceException{
        try (Connection conn = getConnection()){
            try(ResultSet resultSet = conn.createStatement()
                    .executeQuery("Call "+procedure+" ("+id+")"))
            {
                return resultSetToArrayList(resultSet);
            }
        }
        catch (SQLException ex){
            logger.error("SQL exception from UniversityInfo");
            throw new UniversityServiceException(ex.getMessage(),ex.getCause());
        }
    }

    public List<Map<String,Object>> procedureWithTwoInt(String procedure,int val1,int val2) throws UniversityServiceException{
        try (Connection conn = getConnection()){
            try(ResultSet resultSet = conn.createStatement()
                    .executeQuery("Call "+procedure+" ("+val1+","+val2+")"))
            {
                return resultSetToArrayList(resultSet);
            }
        }
        catch (SQLException ex){
            logger.error("SQL exception from UniversityInfo");
            throw new UniversityServiceException(ex.getMessage(),ex.getCause());
        }
    }

    public List<Map<String,Object>> procedureWithString(String procedure,String s) throws UniversityServiceException{
        try (Connection conn = getConnection()){
            try(ResultSet resultSet = conn.createStatement()
                    .executeQuery("Call "+procedure+" (\'"+s+"\')"))
            {
                return resultSetToArrayList(resultSet);
            }
        }
        catch (SQLException ex){
            logger.error("SQL exception from UniversityInfo");
            throw new UniversityServiceException(ex.getMessage(),ex.getCause());
        }
    }

    //-----------------------------------------------------------------------------
    //---------------------Helper classes and methods------------------------------
    //-----------------------------------------------------------------------------

    public static class UniversityServiceException extends Exception{
        public UniversityServiceException(String message){
            super(message);
        }
        public UniversityServiceException(String message, Throwable cause){
            super(message,cause);
        }
    }

    /**
     * Check if the database file exists in the current directory. If it does
     * create a DataSource instance for the file and return it.
     * @return org.sql2o.Sql2o corresponding to the todo database
     */
    private Connection getConnection() throws UniversityServiceException {
        try{
            URI dbUri = new URI("mysql://b8e6d942e49d56:e7565af1@us-cdbr-iron-east-04.cleardb.net/heroku_8a31c5b29a98ba5?reconnect=true");
            //URI dbUri = new URI("mysql://xhuang40:uuqjqisojr@dbase.cs.jhu.edu/cs41516_xhuang40_db?reconnect=true");
            String username = dbUri.getUserInfo().split(":")[0];
            String password = dbUri.getUserInfo().split(":")[1];
            String dbUrl = "jdbc:mysql://" + dbUri.getHost() + dbUri.getPath();
            return DriverManager.getConnection(dbUrl, username, password);
        }
        catch (URISyntaxException ex){
            logger.error("Wrong URI");
            throw new UniversityServiceException("Wrong URI for the database");
        }
        catch (SQLException ex){
            logger.error("Sql exception when creating connection");
            throw new UniversityServiceException(ex.getMessage(),ex.getCause());
        }
    }

    public List resultSetToArrayList(ResultSet rs) throws SQLException{
        ResultSetMetaData md = rs.getMetaData();
        int columns = md.getColumnCount();
        ArrayList list = new ArrayList(50);
        while (rs.next()){
            HashMap row = new HashMap(columns);
            for(int i=1; i<=columns; ++i){
                row.put(md.getColumnName(i),rs.getObject(i));
            }
            list.add(row);
        }
        return list;
    }
}
