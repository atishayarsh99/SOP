#To start
npm run dev

#To start in ec2#
npm run dev -- --host 0.0.0.0

#To start with pm2#
pm2 start npm --name "frontend" -- run dev -- --host 0.0.0.0


#To build
npm run build

#To set enviroment
VITE_BASE_URL = http://20.84.104.134:3000
