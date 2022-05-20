-- CreateTable
CREATE TABLE "ActiveCharacter" (
    "id" SERIAL NOT NULL,
    "characterId" INTEGER NOT NULL,
    "houseId" INTEGER NOT NULL,

    CONSTRAINT "ActiveCharacter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActiveCharacter" ADD CONSTRAINT "ActiveCharacter_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveCharacter" ADD CONSTRAINT "ActiveCharacter_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
