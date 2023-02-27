-- CreateTable
CREATE TABLE "accommodations" (
    "id" SERIAL NOT NULL,
    "travel_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "localization" TEXT NOT NULL,

    CONSTRAINT "accommodations_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attractions" (
    "id" SERIAL NOT NULL,
    "travel_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "avaliation" INTEGER NOT NULL,

    CONSTRAINT "attractions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "travel_id" INTEGER NOT NULL,

    CONSTRAINT "favorites_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pictures" (
    "id" SERIAL NOT NULL,
    "picture" TEXT NOT NULL,
    "travel_id" INTEGER NOT NULL,

    CONSTRAINT "pictures_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurants" (
    "id" SERIAL NOT NULL,
    "travel_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "avaliation" INTEGER NOT NULL,

    CONSTRAINT "restaurants_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travels" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "city_origin" TEXT NOT NULL,
    "city_destination" TEXT NOT NULL,
    "date_start" DATE NOT NULL,
    "date_end" DATE NOT NULL,
    "spent" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "avaliation" INTEGER NOT NULL,

    CONSTRAINT "travels_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accommodations" ADD CONSTRAINT "accommodations_fk0" FOREIGN KEY ("travel_id") REFERENCES "travels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "attractions" ADD CONSTRAINT "attractions_fk0" FOREIGN KEY ("travel_id") REFERENCES "travels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("travel_id") REFERENCES "travels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pictures" ADD CONSTRAINT "pictures_fk0" FOREIGN KEY ("travel_id") REFERENCES "travels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_fk0" FOREIGN KEY ("travel_id") REFERENCES "travels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travels" ADD CONSTRAINT "travels_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
