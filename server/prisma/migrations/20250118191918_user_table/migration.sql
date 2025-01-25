/*
  Warnings:

  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `oauth_id` on the `users` table. All the data in the column will be lost.
  - Added the required column `oauthId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_at",
DROP COLUMN "oauth_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "oauthId" TEXT NOT NULL,
ADD COLUMN     "refreshToken" TEXT;
