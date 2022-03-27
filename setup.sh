#!/bin/bash
sudo docker build -t master-linux . 
sudo docker run --name server1 -d -p 3030:4000 master-linux:latest