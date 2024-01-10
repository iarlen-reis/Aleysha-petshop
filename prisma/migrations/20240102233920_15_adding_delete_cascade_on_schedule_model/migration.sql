-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_availableDateId_fkey";

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_availableDateId_fkey" FOREIGN KEY ("availableDateId") REFERENCES "AvailableDate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
