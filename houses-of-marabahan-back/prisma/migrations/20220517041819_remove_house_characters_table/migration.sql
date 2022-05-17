/*
  Warnings:

  - You are about to drop the `housesCharacters` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `houseId` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "housesCharacters" DROP CONSTRAINT "housesCharacters_characterId_fkey";

-- DropForeignKey
ALTER TABLE "housesCharacters" DROP CONSTRAINT "housesCharacters_houseId_fkey";

-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "houseId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "housesCharacters";

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
