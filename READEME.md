## set up CMD's
- docker-compose build
- docker-compose up -d



## visit the site for 

- # [elastic](https://localhost:9200/) 
- # [kiban](http://0.0.0.0:5601/)

## open terminals for elastic 
 CMD:- docker exec -it elastic_express-elasticsearch-1 bash
 then enter cmd
 bin/elasticsearch-create-enrollment-token --scope kibana

 ## open terminals for kibana 
 CMD:- docker exec -it elastic_express-kibana-1 bash
 then enter cmd
 bin/kibana-verification-code

 # then login into kibana and provide the generated key of elastic and verify by kiban generated verification code