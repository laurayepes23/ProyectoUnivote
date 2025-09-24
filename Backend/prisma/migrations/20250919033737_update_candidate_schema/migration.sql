/*
  Warnings:

  - A unique constraint covering the columns `[correo_admin]` on the table `Administrador` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Administrador_correo_admin_key" ON "public"."Administrador"("correo_admin");
