#!/bin/bash
cd /var/apps/lander/mvp-router
npm run build
pm2 start ./deploy/pm2_kickstart.sh --name lander