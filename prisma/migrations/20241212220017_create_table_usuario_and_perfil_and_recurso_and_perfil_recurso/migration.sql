-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250),
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id_perfil" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perfil" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(250) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "perfil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recurso" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recurso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perfil_recurso" (
    "perfil_id" INTEGER NOT NULL,
    "recurso_id" INTEGER NOT NULL,

    CONSTRAINT "perfil_recurso_pkey" PRIMARY KEY ("perfil_id","recurso_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "perfil_descricao_key" ON "perfil"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "recurso_descricao_key" ON "recurso"("descricao");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_perfil_fkey" FOREIGN KEY ("id_perfil") REFERENCES "perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perfil_recurso" ADD CONSTRAINT "perfil_recurso_perfil_id_fkey" FOREIGN KEY ("perfil_id") REFERENCES "perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perfil_recurso" ADD CONSTRAINT "perfil_recurso_recurso_id_fkey" FOREIGN KEY ("recurso_id") REFERENCES "recurso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
