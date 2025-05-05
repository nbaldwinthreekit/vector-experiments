/*
  Warnings:

  - A unique constraint covering the columns `[productId,configuration]` on the table `Variant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Variant_productId_configuration_key" ON "Variant"("productId", "configuration");
