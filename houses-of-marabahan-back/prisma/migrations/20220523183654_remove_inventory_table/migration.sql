/*
  Warnings:

  - You are about to drop the column `inventoryId` on the `inventoriesItems` table. All the data in the column will be lost.
  - You are about to drop the `inventories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `characterId` to the `inventoriesItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "inventories" DROP CONSTRAINT "inventories_characterId_fkey";

-- DropForeignKey
ALTER TABLE "inventoriesItems" DROP CONSTRAINT "inventoriesItems_inventoryId_fkey";

-- AlterTable
ALTER TABLE "inventoriesItems" DROP COLUMN "inventoryId",
ADD COLUMN     "characterId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "inventories";

-- CreateTable
CREATE TABLE "_CharacterToCharacterItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToCharacterItem_AB_unique" ON "_CharacterToCharacterItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToCharacterItem_B_index" ON "_CharacterToCharacterItem"("B");

-- AddForeignKey
ALTER TABLE "_CharacterToCharacterItem" ADD CONSTRAINT "_CharacterToCharacterItem_A_fkey" FOREIGN KEY ("A") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCharacterItem" ADD CONSTRAINT "_CharacterToCharacterItem_B_fkey" FOREIGN KEY ("B") REFERENCES "inventoriesItems"("id") ON DELETE CASCADE ON UPDATE CASCADE;
