#!/bin/bash
cd /var/apps/lander
npm install
npm install pm2 -g
export NODE_ENV=production
export PORT=80