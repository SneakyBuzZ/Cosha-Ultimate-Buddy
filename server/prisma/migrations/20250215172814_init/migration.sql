-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT DEFAULT 'https://i.pinimg.com/564x/55/c0/85/55c085feb7b403317aa4ba9fa247ece6.jpg',
    "oauthId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "project_collaborators" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "collaboratorId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "commit_summaries" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "summary" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "project_files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "summary" TEXT,
    "projectId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "user_email_index" ON "users"("email");

-- CreateIndex
CREATE INDEX "user_name_index" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "projects_id_key" ON "projects"("id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_name_key" ON "projects"("name");

-- CreateIndex
CREATE UNIQUE INDEX "projects_url_key" ON "projects"("url");

-- CreateIndex
CREATE INDEX "project_ownerId_index" ON "projects"("ownerId");

-- CreateIndex
CREATE INDEX "project_name_index" ON "projects"("name");

-- CreateIndex
CREATE INDEX "project_url_index" ON "projects"("url");

-- CreateIndex
CREATE UNIQUE INDEX "project_collaborators_id_key" ON "project_collaborators"("id");

-- CreateIndex
CREATE INDEX "project_collaborator_projectId_index" ON "project_collaborators"("projectId");

-- CreateIndex
CREATE INDEX "project_collaborator_collaboratorId_index" ON "project_collaborators"("collaboratorId");

-- CreateIndex
CREATE UNIQUE INDEX "commit_summaries_id_key" ON "commit_summaries"("id");

-- CreateIndex
CREATE INDEX "commit_summary_projectId_index" ON "commit_summaries"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "project_files_id_key" ON "project_files"("id");

-- CreateIndex
CREATE INDEX "project_files_projectId_index" ON "project_files"("projectId");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_collaborators" ADD CONSTRAINT "project_collaborators_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_collaborators" ADD CONSTRAINT "project_collaborators_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commit_summaries" ADD CONSTRAINT "commit_summaries_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_files" ADD CONSTRAINT "project_files_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
