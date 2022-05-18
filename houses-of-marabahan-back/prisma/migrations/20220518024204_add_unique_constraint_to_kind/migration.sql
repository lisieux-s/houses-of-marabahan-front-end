/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `kinds` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "kinds_name_key" ON "kinds"("name");
