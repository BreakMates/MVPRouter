#!/bin/bash
cd /var/apps/lander
pm2 start ./deploy/pm2_kickstart.sh --name lander