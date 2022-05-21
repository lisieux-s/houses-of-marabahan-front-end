/*
  Warnings:

  - You are about to drop the column `spritePath` on the `kinds` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "items" ALTER COLUMN "categoryId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "kinds" DROP COLUMN "spritePath";
