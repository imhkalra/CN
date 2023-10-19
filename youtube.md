<!-- Youtube -->
Youtube : Video streaming app

Use case : 
- Functional Requirement : 
1. Upload videos
2. Watch video on demand (Watch from where I left)
3. Search for a video - keyword search
4. View and add comments + like

- Non Functional Requirement : 
1. System should be scalable
2. Highly Available (Most) - tradeoff over consistency
3. Reliable and trustworthy
4. Low latency


BOE Estimation : 
Total Users ~ 2 Billions Users
Active Users ~ 50% => 1 Billion Users
On Average users watch ~ 6 videos (10 mins each)
Read : Write - 200 : 1
Size of video ~ 70 MB
60,000 VIDEOS / SECOND ~ 200,000 videos / second
1000 VIDEOS UPLOAD / SECOND


a. Video upload in asynchronous fashion
b. get success message




