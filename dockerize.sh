#!/bin/bash
cd frontend
npm install
ng build --prod

cd ..
docker-compose build
docker-compose up