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
  });
}

const travelRepository = {
  create,
  findTravels,
};

export default travelRepository;
