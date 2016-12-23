# Backend_University

### Build
run 'mvn clean install'

### Deployment
already deployed on heroku  
link:  https://university-backend.herokuapp.com/  
To deploy locally: run 'heroku local web'

### Opened API:
GET: /university_list  
&nbsp;&nbsp;&nbsp;&nbsp;get all university names  
GET: /searchName/:name  
&nbsp;&nbsp;&nbsp;&nbsp;get all university name, university id, city name that matches the given name  
GET: /university/:id  
&nbsp;&nbsp;&nbsp;&nbsp;get the university information for a given id  
GET: /university_address/:id  
&nbsp;&nbsp;&nbsp;&nbsp;get the university address(city name,state name,latitude,longitude,zip) for a given id
GET: /all_sat  
&nbsp;&nbsp;&nbsp;&nbsp;get all university names and average sat scores