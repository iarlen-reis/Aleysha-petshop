-- CreateTable
CREATE TABLE "AvailableDate" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AvailableDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Time" (
    "id" TEXT NOT NULL,
    "timeSlot" TEXT NOT NULL,
    "availableDateId" TEXT NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "availableDateId" TEXT NOT NULL,
    "timeSlotId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_availableDateId_fkey" FOREIGN KEY ("availableDateId") REFERENCES "AvailableDate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_availableDateId_fkey" FOREIGN KEY ("availableDateId") REFERENCES "AvailableDate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
