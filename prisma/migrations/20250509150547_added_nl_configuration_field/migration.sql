/*
  Warnings:

  - Added the required column `nlConfiguration` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "configuration" TEXT NOT NULL,
    "nlConfiguration" TEXT NOT NULL,
    "embedding" JSONB NOT NULL,
    "metadata" JSONB NOT NULL,
    CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Variant" ("configuration", "embedding", "id", "metadata", "productId", "productName") SELECT "configuration", "embedding", "id", "metadata", "productId", "productName" FROM "Variant";
DROP TABLE "Variant";
ALTER TABLE "new_Variant" RENAME TO "Variant";
CREATE UNIQUE INDEX "Variant_productName_configuration_key" ON "Variant"("productName", "configuration");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
