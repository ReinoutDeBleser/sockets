# sockets
chatroom challenge

# Chatroom exercise: BeCode
- Repository: `chatroom-exercise`
- Type of Challenge: `Learning`
- Duration: `2 days`
- Solo challenge


## The Mission

Now that you guys know how to configure a node server, let's make a chatroom to hang out with your friends and families!


## Learning Objectives 
After this learning challenge, you'll be able to:
- Set up a node environment
- Make a connection between different clients and the servers
- Work with sockets
- Configure express and socket.io for node
- Make a basic chatroom

### Strategy
rewriting the steps less confusing and working on them. 
try to get as far as possible before lunch. 
day one got met really far, managed to pull off finishing all basic functionality and the start of some extra's, 
Day2: today i will try to explore some creative angles on how to approach this challenge.
Goal is to figure out some challenging functionality that's complex and make it so that if reliably works and has a cool effect at the same time. 

### Log/self-reflection
2/12/21: start of exercise. not sure what to expect, creating my own server sounds cool but complicated, we'll see how far we can get before lunch. for now i've reworded the first 4 steps and will rush these asap.
these first steps are going quickly, but i ran into something i couldn't resolve myself because of a naming issue where i named my client html file client.html instead of the default index.html i typically use. because of that the code provided did not work and i lost valuable time. good lesson, but also good lesson in asking for some guidance in a step i feel should be seamless.
so I finished the steps required to start working on actual features meeting the requirements, currently able to send and receive messages to all and myself. 
this challenge is more my speed. through some really nice insight at the start after asking a few questions it went very smoothly, i've done all of the non-creative pieces of the must-haves, next up is making it look nicer and thinking of what I want to implement. 


### Features - checklist :heavy_check_mark:
-finished elements will be checked off-
>__Must have features__
- Make a UI that makes it easy for people to send messages in this chatroom. 
- It must be possible to send a message to everyone or to yourself :heavy_check_mark:
- Make sure we can identify who sent the message through a username. :heavy_check_mark: 
    - We could make a local variable and prompt the user to choose a username :heavy_check_mark:
    - We can then emit this username along with the sent message to keep track of who sent what. :heavy_check_mark:
- Make a list to show everyone who is connected to the chatroom :heavy_check_mark:
- Implement something funny! The sky is the limit! (it can be very simple if you want)
    - For example, you could make a functionality to make someone else's font size obscurely small!
    - You could implement a feature where you can speak with someone else's username
    - AND SO MUCH MORE -> BE CREATIVE


>__Nice-to-have features__
- Instead of just asking for a username, we can make a user class with properties such as
    - username
    - password (if you make a login system)
    - avatar
    - font-color
    - ... whatever you want :D
    - ps: don't worry about security
- You can make different rooms to join by code
- Make it possible to send private messages to a person
- Add images, emojis, videos, gifs to your messages
- Bring back some features from MSN! (lol)
- Make a login / registration (a bit more difficult)
    - again, security is not a must
- PIMP IT
- 
- specifically for the sockets, documentation might be necessary to review here https://socket.io/docs/v4 

What we might need to mention is that for this exercise -as it's our first time using sockets and creating our own node server-  that we received great documentation and a step-by step for the initial use of sockets which you can review in the initial challenge repo [__here__](https://github.com/becodeorg/ANT-Lamarr-5.34/tree/main/2.The-Hill/js/sockets)
