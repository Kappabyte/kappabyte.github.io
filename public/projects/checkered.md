---
name: Checkered
images: 
    - /assets/images/project/checkered/board.png
description: An online checkers platform running on a distributed system.
links:
    website: https://github.com/akeuben/Checkered
tags:
    - gamedev
    - react
    - golang
    - distributed-systems
---

Checkered is an online checkers platform running on a custom distributed system written in go. 

# Distributed System Design

The system has 4 primary components:
1. The client 
2. The game server 
3. The matchmaking server
4. The nameserver 

Each of the first three components can be infinitely scaled, with the nameserver allowing for dynamic registration and deregistration of game servers and matchmaking servers.

## The Client 

The client was written in ReactJS using vite as the framework. This client is intentionally kept simple, as the primary focus of this project was implementing the destributed system.

## The Game Server

Each game server is responsible for handling a subset of the active games, as well as keeping track of the current state of the other active servers in case of server failure. 

## The Matchmaking Server 

Each matchmaking server holds the current queue of players, the set of active games, as well as the current leaderboard state. The bully algorithm is used to elect a main leader server in the event of a server failure, whom is responsible for handling requests. A request made to a non-leader is automatically forwarded to the leader transparently to the client.

## The Nameserver 

The name server is responsible for keeping track of all the active matchmakers and game servers, and will update accordingly. It was designed to perform as little functionality as possible to reduce the surface area for failure. At any point, any registered game server or matchmaker can request the current list of servers.
