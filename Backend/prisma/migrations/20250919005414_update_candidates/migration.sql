/*
  Warnings:

  - A unique constraint covering the columns `[num_doc_candidate]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[correo_candidate]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_career` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_role` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Candidate" DROP CONSTRAINT "Candidate_id_election_fkey";

-- AlterTable
ALTER TABLE "public"."Candidate" ADD COLUMN     "id_career" INTEGER NOT NULL,
ADD COLUMN     "id_role" INTEGER NOT NULL,
ALTER COLUMN "id_election" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_num_doc_candidate_key" ON "public"."Candidate"("num_doc_candidate");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_correo_candidate_key" ON "public"."Candidate"("correo_candidate");

-- AddForeignKey
ALTER TABLE "public"."Candidate" ADD CONSTRAINT "Candidate_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "public"."Role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Candidate" ADD CONSTRAINT "Candidate_id_career_fkey" FOREIGN KEY ("id_career") REFERENCES "public"."Career"("id_career") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Candidate" ADD CONSTRAINT "Candidate_id_election_fkey" FOREIGN KEY ("id_election") REFERENCES "public"."Election"("id_election") ON DELETE SET NULL ON UPDATE CASCADE;
