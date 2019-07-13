# Socket Chat Application

## Overview
A simple chat application built with Express and Socket.Io just for fun. 

## Running the app
#### Traditional Way:
1. Clone the repository.
2. Move into the root folder and install the dependencies using `npm install`.
3. Run command: `npm run start`.
4. Open: http://localhost:3000

#### Using Docker:
Pre-requisites: Docker engine
1. Clone the repository.
2. Move into the root folder.
3. Run command: `make build`  
   This builds docker image with necessary dependencies.
4. Run command: `make run`
5. Open http://localhost:3000 on multiple tabs.

## Chat with your friends
If you want to quickly share this application to your friends and try out, you can do that from your local machine using a HTTP tunneling tool called [Ngrok](https://ngrok.com/).
#### Steps: 
1. Download ngrok executable.
2. Go to downloads folder in terminal and run `./ngrok http 3000`
3. It will give you `http` and `https` link which look something like `http://fdcce4cc.ngrok.io` which you can share with anyone.  
If you kill ngrok, the link(and app) will stop working.
