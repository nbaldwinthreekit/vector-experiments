/*
  Warnings:

  - You are about to drop the column `metadata` on the `Attribute` table. All the data in the column will be lost.
  - You are about to drop the column `embedding` on the `AttributeOption` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `AttributeOption` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "embedding" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "Vectors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vectorString" TEXT NOT NULL,
    "vector" JSONB NOT NULL,
    "metadata" JSONB NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attribute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "embedding" JSONB NOT NULL,
    "productId" INTEGER,
    CONSTRAINT "Attribute_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Attribute" ("embedding", "id", "name") SELECT "embedding", "id", "name" FROM "Attribute";
DROP TABLE "Attribute";
ALTER TABLE "new_Attribute" RENAME TO "Attribute";
CREATE TABLE "new_AttributeOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "attributeId" INTEGER NOT NULL,
    CONSTRAINT "AttributeOption_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AttributeOption" ("attributeId", "id", "name") SELECT "attributeId", "id", "name" FROM "AttributeOption";
DROP TABLE "AttributeOption";
ALTER TABLE "new_AttributeOption" RENAME TO "AttributeOption";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
