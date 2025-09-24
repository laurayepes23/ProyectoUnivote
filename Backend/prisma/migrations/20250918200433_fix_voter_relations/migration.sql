/*
  Warnings:

  - You are about to drop the column `electionId` on the `Candidate` table. All the data in the column will be lost.
  - You are about to drop the column `admin_id` on the `Election` table. All the data in the column will be lost.
  - You are about to drop the column `candidateId` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `candidateId` on the `Result` table. All the data in the column will be lost.
  - You are about to drop the column `electionId` on the `Result` table. All the data in the column will be lost.
  - You are about to drop the column `candidateId` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `voterId` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `careerId` on the `Voter` table. All the data in the column will be lost.
  - You are about to drop the column `electionId` on the `Voter` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `Voter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_election]` on the table `Result` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_candidate]` on the table `Result` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_voter]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_election` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_admin` to the `Election` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_candidate` to the `Proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_candidate` to the `Result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_election` to the `Result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_voter` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_career` to the `Voter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_election` to the `Voter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_role` to the `Voter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Candidate" DROP CONSTRAINT "Candidate_electionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Election" DROP CONSTRAINT "Election_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Proposal" DROP CONSTRAINT "Proposal_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Result" DROP CONSTRAINT "Result_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Result" DROP CONSTRAINT "Result_electionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Vote" DROP CONSTRAINT "Vote_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Vote" DROP CONSTRAINT "Vote_voterId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Voter" DROP CONSTRAINT "Voter_careerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Voter" DROP CONSTRAINT "Voter_electionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Voter" DROP CONSTRAINT "Voter_roleId_fkey";

-- DropIndex
DROP INDEX "public"."Result_candidateId_key";

-- DropIndex
DROP INDEX "public"."Result_electionId_key";

-- DropIndex
DROP INDEX "public"."Vote_voterId_key";

-- AlterTable
ALTER TABLE "public"."Candidate" DROP COLUMN "electionId",
ADD COLUMN     "id_election" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Election" DROP COLUMN "admin_id",
ADD COLUMN     "id_admin" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Proposal" DROP COLUMN "candidateId",
ADD COLUMN     "id_candidate" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Result" DROP COLUMN "candidateId",
DROP COLUMN "electionId",
ADD COLUMN     "id_candidate" INTEGER NOT NULL,
ADD COLUMN     "id_election" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Vote" DROP COLUMN "candidateId",
DROP COLUMN "voterId",
ADD COLUMN     "id_candidate" INTEGER,
ADD COLUMN     "id_voter" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Voter" DROP COLUMN "careerId",
DROP COLUMN "electionId",
DROP COLUMN "roleId",
ADD COLUMN     "id_career" INTEGER NOT NULL,
ADD COLUMN     "id_election" INTEGER NOT NULL,
ADD COLUMN     "id_role" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Result_id_election_key" ON "public"."Result"("id_election");

-- CreateIndex
CREATE UNIQUE INDEX "Result_id_candidate_key" ON "public"."Result"("id_candidate");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_id_voter_key" ON "public"."Vote"("id_voter");

-- AddForeignKey
ALTER TABLE "public"."Voter" ADD CONSTRAINT "Voter_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "public"."Role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Voter" ADD CONSTRAINT "Voter_id_election_fkey" FOREIGN KEY ("id_election") REFERENCES "public"."Election"("id_election") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Voter" ADD CONSTRAINT "Voter_id_career_fkey" FOREIGN KEY ("id_career") REFERENCES "public"."Career"("id_career") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Election" ADD CONSTRAINT "Election_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "public"."Administrador"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Candidate" ADD CONSTRAINT "Candidate_id_election_fkey" FOREIGN KEY ("id_election") REFERENCES "public"."Election"("id_election") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_id_voter_fkey" FOREIGN KEY ("id_voter") REFERENCES "public"."Voter"("id_voter") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_id_candidate_fkey" FOREIGN KEY ("id_candidate") REFERENCES "public"."Candidate"("id_candidate") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Proposal" ADD CONSTRAINT "Proposal_id_candidate_fkey" FOREIGN KEY ("id_candidate") REFERENCES "public"."Candidate"("id_candidate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Result" ADD CONSTRAINT "Result_id_election_fkey" FOREIGN KEY ("id_election") REFERENCES "public"."Election"("id_election") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Result" ADD CONSTRAINT "Result_id_candidate_fkey" FOREIGN KEY ("id_candidate") REFERENCES "public"."Candidate"("id_candidate") ON DELETE RESTRICT ON UPDATE CASCADE;
