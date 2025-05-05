/*
  Warnings:

  - You are about to drop the column `vector` on the `AttributeOption` table. All the data in the column will be lost.
  - You are about to drop the column `vector` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `vector` on the `Variant` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AttributeOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attribute" TEXT NOT NULL,
    "attributeOption" TEXT NOT NULL,
    "metadata" JSONB NOT NULL
);
INSERT INTO "new_AttributeOption" ("attribute", "attributeOption", "id", "metadata") SELECT "attribute", "attributeOption", "id", "metadata" FROM "AttributeOption";
DROP TABLE "AttributeOption";
ALTER TABLE "new_AttributeOption" RENAME TO "AttributeOption";
CREATE UNIQUE INDEX "AttributeOption_attribute_attributeOption_key" ON "AttributeOption"("attribute", "attributeOption");
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB NOT NULL
);
INSERT INTO "new_Product" ("description", "id", "metadata", "productName") SELECT "description", "id", "metadata", "productName" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_productName_key" ON "Product"("productName");
CREATE TABLE "new_Variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "configuration" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Variant" ("configuration", "id", "metadata", "productId") SELECT "configuration", "id", "metadata", "productId" FROM "Variant";
DROP TABLE "Variant";
ALTER TABLE "new_Variant" RENAME TO "Variant";
CREATE UNIQUE INDEX "Variant_productId_configuration_key" ON "Variant"("productId", "configuration");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
