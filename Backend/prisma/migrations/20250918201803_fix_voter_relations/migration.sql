-- DropForeignKey
ALTER TABLE "public"."Voter" DROP CONSTRAINT "Voter_id_election_fkey";

-- AlterTable
ALTER TABLE "public"."Voter" ALTER COLUMN "id_election" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Voter" ADD CONSTRAINT "Voter_id_election_fkey" FOREIGN KEY ("id_election") REFERENCES "public"."Election"("id_election") ON DELETE SET NULL ON UPDATE CASCADE;
