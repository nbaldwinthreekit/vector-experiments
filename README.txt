Shoot me a message for .env

npm install
npm run dev

Notes:
- Database is included in repo. It will be populated with whatever data I was experimenting with when you pulled.
- Get sqliteViewer extension so you can view the database directly in VScode.
- To populate with new data without changing the db schema:
1. run: npx prisma db push --force-reset
2. Check out raw_data folder. Has correctly formatted raw data to copy-pasta to postman.