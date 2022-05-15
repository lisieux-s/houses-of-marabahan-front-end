/*
  Warnings:

  - You are about to drop the `Storage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StorageItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StorageItem" DROP CONSTRAINT "StorageItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "StorageItem" DROP CONSTRAINT "StorageItem_storageId_fkey";

-- AlterTable
ALTER TABLE "items" ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "Storage";

-- DropTable
DROP TABLE "StorageItem";

-- CreateTable
CREATE TABLE "houseItem" (
    "id" SERIAL NOT NULL,
    "houseId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "houseItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "houseItem" ADD CONSTRAINT "houseItem_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "houseItem" ADD CONSTRAINT "houseItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
