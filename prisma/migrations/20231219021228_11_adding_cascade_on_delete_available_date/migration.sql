-- DropForeignKey
ALTER TABLE "Time" DROP CONSTRAINT "Time_availableDateId_fkey";

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_availableDateId_fkey" FOREIGN KEY ("availableDateId") REFERENCES "AvailableDate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
