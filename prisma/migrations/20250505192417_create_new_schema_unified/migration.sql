-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vector" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "AttributeOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attribute" TEXT NOT NULL,
    "attributeOption" TEXT NOT NULL,
    "vector" JSONB NOT NULL,
    "metadata" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "Variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "vector" JSONB NOT NULL,
    "config" JSONB NOT NULL,
    "metadata" JSONB NOT NULL,
    CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductAttributeOption" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "attributeOptionId" INTEGER NOT NULL,
    CONSTRAINT "ProductAttributeOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductAttributeOption_attributeOptionId_fkey" FOREIGN KEY ("attributeOptionId") REFERENCES "AttributeOption" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_productName_key" ON "Product"("productName");

-- CreateIndex
CREATE UNIQUE INDEX "AttributeOption_attribute_attributeOption_key" ON "AttributeOption"("attribute", "attributeOption");

-- CreateIndex
CREATE INDEX "Variant_productId_idx" ON "Variant"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAttributeOption_productId_attributeOptionId_key" ON "ProductAttributeOption"("productId", "attributeOptionId");
