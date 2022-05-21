/*
  Warnings:

  - You are about to drop the column `spriteUrl` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `spriteUrl` on the `kinds` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "spriteUrl",
ADD COLUMN     "categoryId" INTEGER DEFAULT 1;

-- AlterTable
ALTER TABLE "kinds" DROP COLUMN "spriteUrl",
ADD COLUMN     "spritePath" TEXT;

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
