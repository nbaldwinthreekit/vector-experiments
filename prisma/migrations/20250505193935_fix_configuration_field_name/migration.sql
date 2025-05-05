/*
  Warnings:

  - You are about to drop the column `config` on the `Variant` table. All the data in the column will be lost.
  - Added the required column `configuration` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "vector" JSONB NOT NULL,
    "configuration" JSONB NOT NULL,
    "metadata" JSONB NOT NULL,
    CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Variant" ("id", "metadata", "productId", "vector") SELECT "id", "metadata", "productId", "vector" FROM "Variant";
DROP TABLE "Variant";
ALTER TABLE "new_Variant" RENAME TO "Variant";
CREATE INDEX "Variant_productId_idx" ON "Variant"("productId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
