Purpose: This is a backend API for digesting configurations and variant data, vectorizing those inputs, and storing in a local sqlite db for analysis.

Node Version: v22.14.0

Shoot me a message for .env

To run:

npm install
npm run dev

Notes:
- Get sqliteViewer extension so you can view the database directly in VScode.
- To populate with new data without changing the db schema:
1. run: npx prisma db push --force-reset
2. Check out raw_data folder. Has correctly formatted raw data to copy-pasta to postman.