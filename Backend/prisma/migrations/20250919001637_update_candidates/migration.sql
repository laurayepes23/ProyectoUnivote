/*
  Warnings:

  - Added the required column `contrasena_candidate` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Candidate" ADD COLUMN     "contrasena_candidate" TEXT NOT NULL;
