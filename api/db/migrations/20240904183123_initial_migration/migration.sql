-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Renter" (
    "renterId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Renter_pkey" PRIMARY KEY ("renterId")
);

-- CreateTable
CREATE TABLE "Rental" (
    "rentalId" SERIAL NOT NULL,
    "seatingType" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "guestLimit" INTEGER NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("rentalId")
);

-- CreateTable
CREATE TABLE "Address" (
    "addressId" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "stateOrProvince" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "rentalId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("addressId")
);

-- CreateTable
CREATE TABLE "Event" (
    "eventId" SERIAL NOT NULL,
    "eventName" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventCity" TEXT NOT NULL,
    "eventCountry" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Renter_email_key" ON "Renter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Renter_phoneNumber_key" ON "Renter"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Address_rentalId_key" ON "Address"("rentalId");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Renter"("renterId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("rentalId") ON DELETE RESTRICT ON UPDATE CASCADE;
