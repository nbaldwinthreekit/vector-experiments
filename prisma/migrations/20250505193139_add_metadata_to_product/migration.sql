/*
  Warnings:

  - Added the required column `metadata` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vector" JSONB NOT NULL,
    "metadata" JSONB NOT NULL
);
INSERT INTO "new_Product" ("description", "id", "productName", "vector") SELECT "description", "id", "productName", "vector" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_productName_key" ON "Product"("productName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
