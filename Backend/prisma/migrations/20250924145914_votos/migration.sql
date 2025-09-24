/*
  Warnings:

  - A unique constraint covering the columns `[id_election]` on the table `Result` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_candidate]` on the table `Result` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Vote" ADD COLUMN     "id_election" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Result_id_election_key" ON "public"."Result"("id_election");

-- CreateIndex
CREATE UNIQUE INDEX "Result_id_candidate_key" ON "public"."Result"("id_candidate");

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_id_election_fkey" FOREIGN KEY ("id_election") REFERENCES "public"."Election"("id_election") ON DELETE SET NULL ON UPDATE CASCADE;
