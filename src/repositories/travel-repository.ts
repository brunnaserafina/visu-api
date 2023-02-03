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

const travelRepository = {
  create,
};

export default travelRepository;
