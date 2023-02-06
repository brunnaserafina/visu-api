import { prisma } from "@/config";

async function create(
  userId: number,
  cityOrigin: string,
  cityDestination: string,
  dateStart: Date,
  dateEnd: Date,
  spent: number,
  summary: string,
  avaliation: number,
) {
  return prisma.travels.create({
    data: {
      user_id: userId,
      city_origin: cityOrigin,
      city_destination: cityDestination,
      date_start: dateStart,
      date_end: dateEnd,
      spent,
      summary,
      avaliation,
    },
  });
}

async function findTravels() {
  return prisma.travels.findMany({
    select: {
      id: true,
      city_destination: true,
      date_start: true,
      date_end: true,
      avaliation: true,
      users: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      date_start: "desc",
    },
  });
}

async function findTravelsByUserId(userId: number) {
  return prisma.travels.findMany({
    where: {
      user_id: userId,
    },
    select: {
      id: true,
      city_destination: true,
      date_start: true,
      date_end: true,
      avaliation: true,
      users: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
}

async function findTravelById(travelId: number) {
  return prisma.travels.findUnique({
    where: {
      id: travelId,
    },
    select: {
      id: true,
      users: {
        select: {
          name: true,
        },
      },
      city_origin: true,
      city_destination: true,
      date_start: true,
      date_end: true,
      spent: true,
      summary: true,
      avaliation: true,
      accommodations: {
        select: {
          type: true,
          localization: true,
        },
      },
      restaurants: {
        select: {
          name: true,
          avaliation: true,
        },
      },
      attractions: {
        select: {
          name: true,
          avaliation: true,
        },
      },
      pictures: {
        select: {
          picture: true,
        },
      },
    },
  });
}

const travelRepository = {
  create,
  findTravels,
  findTravelsByUserId,
  findTravelById,
};

export default travelRepository;
