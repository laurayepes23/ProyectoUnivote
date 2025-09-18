-- CreateTable
CREATE TABLE "public"."Administrador" (
    "id_admin" SERIAL NOT NULL,
    "nombre_admin" TEXT NOT NULL,
    "apellido_admin" TEXT NOT NULL,
    "tipo_doc_admin" TEXT NOT NULL,
    "num_doc_admin" BIGINT NOT NULL,
    "correo_admin" TEXT NOT NULL,
    "contrasena_admin" TEXT NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "public"."Voter" (
    "id_voter" SERIAL NOT NULL,
    "nombre_voter" TEXT NOT NULL,
    "apellido_voter" TEXT NOT NULL,
    "tipo_doc_voter" TEXT NOT NULL,
    "num_doc_voter" BIGINT NOT NULL,
    "correo_voter" TEXT NOT NULL,
    "estado_voter" TEXT NOT NULL,
    "contrasena_voter" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "electionId" INTEGER NOT NULL,
    "careerId" INTEGER NOT NULL,

    CONSTRAINT "Voter_pkey" PRIMARY KEY ("id_voter")
);

-- CreateTable
CREATE TABLE "public"."Election" (
    "id_election" SERIAL NOT NULL,
    "nombre_election" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "estado_election" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,

    CONSTRAINT "Election_pkey" PRIMARY KEY ("id_election")
);

-- CreateTable
CREATE TABLE "public"."Candidate" (
    "id_candidate" SERIAL NOT NULL,
    "nombre_candidate" TEXT NOT NULL,
    "apellido_candidate" TEXT NOT NULL,
    "tipo_doc_candidate" TEXT NOT NULL,
    "num_doc_candidate" BIGINT NOT NULL,
    "correo_candidate" TEXT NOT NULL,
    "estado_candidate" TEXT NOT NULL,
    "foto_candidate" TEXT NOT NULL,
    "electionId" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id_candidate")
);

-- CreateTable
CREATE TABLE "public"."Vote" (
    "id_vote" SERIAL NOT NULL,
    "fecha_vote" TIMESTAMP(3) NOT NULL,
    "hora_vote" TIMESTAMP(3) NOT NULL,
    "voterId" INTEGER NOT NULL,
    "candidateId" INTEGER,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id_vote")
);

-- CreateTable
CREATE TABLE "public"."Proposal" (
    "id_proposal" SERIAL NOT NULL,
    "titulo_proposal" TEXT NOT NULL,
    "descripcion_proposal" TEXT NOT NULL,
    "estado_proposal" TEXT NOT NULL,
    "candidateId" INTEGER NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id_proposal")
);

-- CreateTable
CREATE TABLE "public"."Career" (
    "id_career" SERIAL NOT NULL,
    "nombre_career" TEXT NOT NULL,
    "facultad_career" TEXT NOT NULL,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id_career")
);

-- CreateTable
CREATE TABLE "public"."Result" (
    "id_result" SERIAL NOT NULL,
    "total_votes" INTEGER NOT NULL,
    "electionId" INTEGER NOT NULL,
    "candidateId" INTEGER NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id_result")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id_role" SERIAL NOT NULL,
    "nombre_role" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id_role")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voter_num_doc_voter_key" ON "public"."Voter"("num_doc_voter");

-- CreateIndex
CREATE UNIQUE INDEX "Voter_correo_voter_key" ON "public"."Voter"("correo_voter");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_voterId_key" ON "public"."Vote"("voterId");

-- CreateIndex
CREATE UNIQUE INDEX "Result_electionId_key" ON "public"."Result"("electionId");

-- CreateIndex
CREATE UNIQUE INDEX "Result_candidateId_key" ON "public"."Result"("candidateId");

-- AddForeignKey
ALTER TABLE "public"."Voter" ADD CONSTRAINT "Voter_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Voter" ADD CONSTRAINT "Voter_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "public"."Election"("id_election") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Voter" ADD CONSTRAINT "Voter_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id_career") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Election" ADD CONSTRAINT "Election_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "public"."Administrador"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Candidate" ADD CONSTRAINT "Candidate_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "public"."Election"("id_election") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "public"."Voter"("id_voter") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vote" ADD CONSTRAINT "Vote_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "public"."Candidate"("id_candidate") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Proposal" ADD CONSTRAINT "Proposal_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "public"."Candidate"("id_candidate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Result" ADD CONSTRAINT "Result_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "public"."Election"("id_election") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Result" ADD CONSTRAINT "Result_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "public"."Candidate"("id_candidate") ON DELETE RESTRICT ON UPDATE CASCADE;
