<!--  -->
System Designing : Way of designing a system - Defining various elements of systems - architecture, modules/ components - Communication

How effictevely data flow between systems? - Solving user problems / achieve business requirements
High Level Design -  Understand problem (Use Case) / Functional and non functional Requiremnts / Capcity Estimate / Different components of whole application and their interaction
Low Level Design - Detailing out the components 
Why? Making you concious of the implementation
1. Importance in software development lifecycle

Monolithic architecture : All service/FE,BE,Database in same server (written and deployed together)
Pros : 
0. Lesser Cost of maintainance and secure
1. Use when just started
2. When latency () senstivity
3. Process to process communication and no network IO calls
4. Integration testing is relatively easy - because of less moving pieces
Cons: SPOF, Whenever change - all code deployed together 

The entire process of designing is called as architecture. 
Architecture - Internal design detail for buidling the application

Web application typically have : 
a. Frontend / UI layer
b. Backend / Business layer
c. Database / Data storage layer


Microservice Architecture - Mutiple smaller apps (granuality) with single responsibility
1. No Spof and follows principle of single responsibility
2. Highly scalable 
3. Loose Coupling - Each service is independent of each other
4. Can use multiple tech stack
5. Low deployment time 

CONS : 
1. Harder and costly to maintain
2. Higher Latency
3. Integrations testing is hard
4. Security is expensive because of multiple moving components

Service requester -- Service Provider


Distributed systems : 
1. Using multiple machines to get the problem solved - storage & computation
2. Multiple Computers connected over network - end users should not face the complexity
3. Distributed Storage and Distibuted Computation
- Use of commododity hardware - inexpensive hardware
- Use of network for communciation


Evolution of Distributed system : 
1. SPOF of Data
2. Failed - Losing Data
3. Make system tolerant to failure

Redundancy & replication > 1: 
GFS - GOOGLE FILE SYSTEM
Map Reduce - Distributed computation
Inspiration for Hadoop

Centralised Application in terms of application: 
- A single entity / group of people controls the data & system (single source of single cluster of machine) - dedicated servers. Eg Facebook

Decentralised Application in terms of application:
- No central authority

1. Latency : Round trip time t1 + t2 + t3; Response time : t1+ t3; t2 = computational time
2. Response time = Latency + computation time
3. Customer Experience 
4. Having right latency number is important

Factors impacting latency:
1. Computational time - Imrpove computation - concurrent / parallel process
2. Network delays - Improved network bandwidth
3. CDN

Walmart - Private Cloud --> Azure --> Latency Increased
Use cloud native services to do parallel process to reduce computational time

ThroughPut : Rate of serving the customers (50 requests / seconds)
transaction / unit time
0. More in case of distributed system. Can improved via load balances and more resources 
Computer can do 10^8 operations per second
1. Impove perfomrnace of machines - caching / CDN / Fixing perfomance bottlenecks

DAU ~ 50 MN
40 messages / day 
2BN messages / day
size of each message ~ 100 bytes
200GB/day


50 request a second * 1 kB = 
50kb/second
data processed/ second

Availibilty : Available for responding back - then it is highly available 
SPOF in case of monolithic architecture
Redunancy and replication in case of distrbuted systems

Fault tolerance / parition tolerance :
If failure happens, system should handle it gracefully - redunancy & replication

Increaseing availbility :
1. Make it highly fault tolerant
2. Reduce the downtime / fixedtime
3. Proactive monitoring & altering

Latency (perfomance) / throughput (perfomance) / Availability (uptime)
Bandwidth - Maximum rate at which data can be transferred (bits/second) - 1000 bits/second
Throughput - Actual rate of transfer of data (bits/second) - 76bits/second
Latency - time taken for processing a request = t1+t2+t3 seconds
Available - how much time the app is available
Reliability - 1 - probability of failure
High availbility does not lead to high reliability
High reliability leads to more availibility 
Consistency - if every client gets the same answer for the same question (same response for the same request)


a. Stale information
b. Dirty Read
fot time t1+t2, read will be disable (low availibility) but more consistency

Monolithic - more consisent (natively)
Distributed system - lesser consistent
factors affecting consistency : 
1. How fast you update the replicas - improving Network bandwith - helps in quickly synchonize data nodes
2. Are we disallowing reads?
3. Replicas should be based on distance aware strategy

Type of consistency : 
1. Strong Consistency : If we do not allow read during t1,t2  
2. Eventual Consistency : Few people will see old durimg time max(t1,t2);

CAP Theorem : Consitency / Availibility/ Partition Tolerance 
When a node comes out of netwrok, it is called network partition - system should have partition tolerance

Out of c, a, p in case of distributed system : you can choose only 2;
P part is extremly important - choose between A and C;

Importance of physical time : 
1. Sequence/order of occuring of events
2. When machines are geographically distributed
3. No concept of physical time
4. N/W delays can cause the delay 

Logical time : 
1. Couters/ what event happens first 
2. Protocol to update each local event  
3. Local information about local global time, proc
Logical local time
Logical global time 

Lamport Alogorithm (Leslie Algorithm): Partial ordering of events - provide numerical happening before relatiooship
1. Each local counter maintains its own clock
2. Prcoess increments the counter whenever an event happens (sent/recieve)
3. Counter is assigned as timestamp
4. Send event carries its own clock
5. Recieve event = timestamp = Math.max(localclock, message timestamp) + 1;

Scaling : 
1. Response time increases with lead - not scalable


Vertical Scaling : Scaling the resources 
1. Limitation of hardware
2. SPOF

Horizontal Scaling : Scaling resources horizantally (using more machines)
1. Cluster (group of machines) over a network - multiple hosts
2. Commodity hardware
* Can be use for monolothic application : maintaining consistency
* No selective scaling - all have to scaled together

In a fault prone system, 
Redundancy : Component availibility / Duplicates of components - failover management / failover 
Type of redundancy : 
1. Active redundancy : All machines are active (USE LOAD BALANCER)
2. Passive redundancy : Another components takeover when active node fails

Partition is divided into parts, to separate it or break it up. It can be a data partition or network partition. 
A network partition refers to a network split between nodes due to the failure of network devices.

Replication : Copying of data on multiple machines - Synchornising multiple machines
Type of replication : 
1. Active replication : All node have same data - Active replication is when all the cluster nodes are connected, and the data is replicated on every cluster node. It is performed by processing the same request on all the replica machines. 
2. Passive replication : Some nodes have same data
Master -- Slave relationship


Load Balancer : 
1. Blanace the load distributing traffic to all the servers
2. Round robin algorithm. weighted round robin algorithm, IP Hash Algorithm
3. Least connection algorithm (based on availibility of open connections on a server)
4. Least Reponse time algorithm

Challanges of LB : 
1. SPOF (Anti Pattern) - with active and passive 

Caching : Improve read performance - avoiding unneccessary disk I/O, network I/O
1. Decreases Load on components
2. Bring data to local storage (if it is not changing)
3. Application server cache and CDN

Type of caching solutions : 
1. Local cache (in memory cache) - Memcache - In the case of local data for a machine, it gets stored in RAM
2. Distributed cache - Redis

When to use cache?
- If data is not changing frequently
- If read intensive application
- If the retrieving data is expensive 

Caching Syratgies : 
1. Write back cache - write on cache and updation of db later - write and read is fast, consitency can miss if the cache is failed (since it is not persistent)
2. Write through cache - write on db and cache more - no stale data, high consistency (write is slow)
3. Write around cache (Read through cache) - write on db - write is fast, read is slow
cache miss : when request not able to find data in cache

Cache has limited data : 
Cache Eviction startegy : Remove stale data
1. FIFO
2. Least frequently used
3. LIFO
4. Least Recently used
5. Most Recently used 
6. Random Replacement

Different type of database : 
1. File Based storage System 
- Not easy to search a particular data, leading to data duplicacy and data redundancy
- Updation anamoly, Read data anamoly, Insertion anamoly & delete data anamoly (updating / delete data if the data is in different places)
- Security is not strong
- No query Language - non programmer cannot access the data
2. Relationships Database Management System 
( database + management system - security + redundancy + retrival is fast): 
- Easy to store data in relation
- Comes up with English like query language  
Challanges : Rigid schema (not very helpful in case of NO SQL)
Performance takes a hit in case of  
3. No SQL - dynamic schema
Easy to scale without right shema
No relationship and thus not (Not relational data)
Sharding is easy
Data is huge - volume / velocity
Easy to use when you want to store a lot of data and only do normalisation and  

Type of NOSQL DB : 
1. KEY VALUE DB : Store data in key value pair (Caching) - Redis
2. GRAPH DB : Vertices and edges - Google Maps
3. DOCUMENT BASED DB : MongoDB - It brings best of both world - Dynamic Schema , Natively support is there for horizontal scaling
4. COLUMNR DB : Store columns together - Query on certain columns only - avg. agregation 

A document database is a great choice for content management applications such as blogs and video platforms. With a document database, each entity that the application tracks can be stored as a single document. The document database is more intuitive for a developer to update an application as the requirements evolve. In addition, if the data model needs to change, only the affected documents need to be updated. No schema update is required and no database downtime is necessary to make the changes. 

Polyglot Persistence: When we use more than 1DB
RDBMS IS BEST FOR CONSISTENCY I.E Orcale, SQL
Ticekt booking Application - SQL
Flipkart product DB - Flexbiity and lot of DATA


The fundamental relationship between a user id and the data you need to look up can usually be done with a single table in some SQL based system without a join. If you need to do more to the data then look it up by user id (or possibly name) and retrieve a single record (or very small group of records) using indexing. 
Relational databases have four important ACID properties: Atomicity, Consistency, Isolation and Durability. Here,
The four properties are:
Atomic: Guarantees that all operations in a transaction are treated as a single “unit”, which either succeeds completely or fails completely.
Consistent: Ensures that a transaction can only bring the database from one valid state to another by preventing data corruption.
Isolation: Determines how and when changes made by one transaction become visible to the other. 
Durable: Ensures that the results of the transaction are permanently stored in the system. The modifications must persist even in case of power loss or system failures.

The Benefits of ACID Transactions in storing login information:

Absolute Data Integrity and Safety: Avoiding lost updates, dirty reads, stale reads, and enforcing app-specific integrity constraints
Intuitive Data Access Logic: ACID-compliant databases usually allow complex schema modelling and native support for multi-step data manipulation operations such as consistent secondary indexes. 


Normalisation : Storing data in different tables
Denormalisation : Storing everything in a single table - All information stored in one table

Indexing : Arranging the data in some format that searching becomes extremely easy (IN ORDER OF Log(N))
B-TREE - Store data in sorted manner in different (with column and pointer)

Read Intensive application : Use indexing for expensive requests for columns. Write gets slow.
insert in extra place and then sort again

Partioning : Break down in smaller units
Advantages : 
- Scalability & maintainability
- Performance optimisation
- Availibility 
- Load Balancing


Horizontal Partioning / Sharding / Range Partioning : split among different machines
Challanges : 
1. It is a range based - not uniform 
2. Celebrity Problems

Database shards are an example of shared-nothing architecture(Nodes do not share the same memory or storage). Each shard (or server) acts as the single source for this subset of data. Therefore, shards are autonomous and do not share any computing resources.

Vertical Partioning :
1. Storing different tables / columns on different machines 
* Unbalanced Load
* Slower Join Queries
* Further break the tables might be required

Directory based partioning : 
1. Directory server - kind of directory / index which talks about where data is 
2. Loosely couple application
3. Horizontally scalable
4. SPOF

Different type of partioning
1. Hash based partioning : hash(key)
2. List partioning : user_id <list can be 1-1000>
3. Round robin partion - uniformity among db

- removing / adding servers becomes difficult 
- in case one server stop working, data migration might be required


Consistent Hashing : 
hash(ip1) / 360 
hash(data) / 360
Data shuffling will happen but * partial movement has to be done and not completely
* No complete repartioning

HOW PARTIONING ARE USED?
- In case of distributed systems like Cassandra (consistent hashing)
- Data cannot fit in single machine

Synchronous Communication : In transactions/reservations based companies
- In sync communication / Blocking calls
- Why? In situation, we need immediate response or some things to need to happen before other
- Inventory service should be call before the payment data
- How synchronous call is achieved? - Application 1 makes request to application
- In case of sequential 
- In case of real time decision making (waiting for the response)

Asynchronous Communication (Non Blocking I/O Call):
- Loosely coupled communication
- Why do we need async queue? : In case the computation/processing takes time
- Do not block client 
- It helps in scalability (performance can be enhanced) : thread doesn't have to be blocking 

Cascading failure - eventual failure

How async communication works? (Booking in )
1. Request - repsonse : tracking id based
2. Message Queue based aync communication : WE PUT JOB IN THE QUEUE

Message Queue (Kafka, Rabbit MQ, Active MQ): 
Publisher / Producer --> Message Queue / Agent --> Subscriber / Consumer

In case the throughput is more than what we can handle, message queue can be veru helpful. In case, all app wants to be notified by update in messageQ1. When two apps work on different rate, then we can use messaging queue. 

Model of different Message Queues : 
1. P2P : One to one connection (Kafka)
2. PUBLISHER SUBSCRIBER QUEUE : Multiple subscriber queue


Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation written in Java and Scala. Kafka is a tool which provides asynchronous communication to its users. Apache Kafka is used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.

Web browser : An application that is run on web (FE + BE + DB)
Client (Information requestor): Asking for data and files 
Server (Information Provider): One who sends back the response

Checkout service Cart Service Auth Service Inventory Service Payment Services
Web Server (Use for web applications - mainly serves static file and not heavy computation - only supports HTTP protocol). It doesnt support multithreading vs application server (Dynamic content + business logics - can support mutliple protocols). It also supporta multi threwading.

Rest : Representational State Transfer - way to communicate with other application.
1. Talks over network 
2. Langauge Agnostic
3. Fast and Light

Any server has to share REST API from where we 
Unique Resource Identifier : WHERE DATA IS LYING
CRUD - CREATE READ UPDATE DELETE
Rest Api = METHOD NAME + PATH

Service Orientied Architecture : 
Granular services 
App1 (Service requester) and App2 (Service provider)

Booking Service - Auth Service - Inventory Service - Payment Service - Booking Confirmation Service 

Advantages :
1. Agile - Can scale independently - Selective scaling is possible
2. Free to choose tech stack for different application
3. Big Sized team
4. Loose coupling - reusability of components increases
5. Follows single responsibility principle

Challanges : 
1. Comparateveley higher latency
2. Harder to maintainence
3. Itegration testing is difficult
4. security is complex and resourceful

Different type of building application
3 - tier application
n = 1 ONE TIER : Monolithic Architecture
n = 2 TWO TIER : FE + APP TIER
N = 3 ALL DIFFERENT

WEB SERVER : 
Pull  model (Polling) - client asking for data
Push model - client sending data which client needs (Server need to take care of multiple clients)


Long Polling (Polling is short lived connection): 
1. Client sends a request
2. If data is not available, server will wait for the computation and then send the message. Response is delayed.
3. Setting timeout for the server 
4. Client thread is blocked. 

Socket Connection : Frequent Connection between 2 server (like walkie talkie). A duplex channel between client and server - connection is TCP. Mostly in case of 

SSE (Server sent events)-  A Long Lived connection is set up from server - SERVER will send back to 

Challenges faced during long polling are: 

1. Ordering of the message cannot be guaranteed when multiple connections are established. 

2. Message delivery cannot be guaranteed, which may lead to message loss.

Proxies: 
1. Forward proxy : 
- When a proxy server between client and server (Behave as a client)
2. Reverse proxy :  
- Behaves as a clone to the server
- Middleware 
- Do not want to expose actual server to the client / Hide complex structure internally

API Gateway are made with reverse proxies. It can act as a load balancer as well.

Security :
Authentication (Proving that you are the same person which you pose to) and Authorisation (Getting access to data which you have access to - accessing my seat on my flight)

Authentication Protocol : 
1. Username and password based authentication
Basic authentication does not encrypt user credentials, so traffic must always be sent over an encrypted SSL session. Users who authenticate with Basic Authentication must provide a valid username and password. By default, users must be able to log on locally to use Basic authentication. It doesn't require cookies or session IDs.

HTTP basic authentication is one of the most standardized ways to request client authentication credentials. Basic authentication works by asking website visitors to enter their username and password. This method is widely used because it is supported by most browsers and web servers. 

2. Access token based authentication - TTL (time to live) associated

Open Authentication
1. Information Provider : Google, facebook, linkedin, github


