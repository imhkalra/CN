URL SHORTNER : 

USE CASE : 
1. Shoprten Alias
2. Redirect
3. TTL

Non Functional Requirement 
1. High Available
2. Low Latency 
3. Unpredictable

BOE ESTIMATION :
1. 100 Read : 1 write
2. 500 Mn url/ month
3. 50 Bn read / month ~ 17,000/second ~ 3x Peak QPS = 60,000
4. Read QPS ~ 20,000 /second
5. Write QPS ~ 200 / Second
6. 5 years (500 MN url ~ 500 bytes) = 15TB
7. 20% cache  ~ 