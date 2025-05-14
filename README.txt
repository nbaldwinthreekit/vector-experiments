Purpose: This is a back end test saddle API for digesting configurations and variant data, vectorizing those inputs, storing in a local sqlite db for analysis.
In particular, this allows for testing vectorization behavior of different transformer models.

Node Version: v22.14.0

Shoot me a message for .env

To run:

npm install
npm run dev

Notes:
- Get sqliteViewer extension so you can view the database directly in VScode.
- To populate with new data without changing the db schema:
1. run: npx prisma db push --force-reset
2. Send data from raw_data folder to correct route. Straight copy paste as JSON into the request body.

router.use('/ingest-configuration', ingestConfiguration);
router.use('/ingest-variants', ingestVariants);
router.use('/get-composed-vector-similarity', getComposedVectorSimilarity);
router.use('/get-composed-vector-similarity-bulk', getComposedVectorSimilarityBulk);
router.use('/get-variants-by-semantic-search', getVariantsBySematicSearch);