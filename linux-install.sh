#!/bin/sh
sudo apt update
sudo apt upgrade -y
git pull
sudo apt install nodejs
sudo npm install -g serve
sudo npm install