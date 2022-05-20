/*
  Warnings:

  - You are about to drop the `ActiveCharacter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActiveCharacter" DROP CONSTRAINT "ActiveCharacter_characterId_fkey";

-- DropForeignKey
ALTER TABLE "ActiveCharacter" DROP CONSTRAINT "ActiveCharacter_houseId_fkey";

-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "ActiveCharacter";
