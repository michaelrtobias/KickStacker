#!/bin/bash
cd /home/ec2-user/KickStacker
pm2 start npm --name "shoesstacker" -- start
pm2 startup
pm2 save
pm2 restart all