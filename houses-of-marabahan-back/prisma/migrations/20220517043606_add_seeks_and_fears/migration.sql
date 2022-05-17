/*
  Warnings:

  - Added the required column `fears` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seeks` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "fears" TEXT NOT NULL,
ADD COLUMN     "seeks" TEXT NOT NULL;
