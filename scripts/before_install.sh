#!/bin/bash
cd /home/ec2-user/KickStacker

yum -y update

curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
yum install nodejs npm
