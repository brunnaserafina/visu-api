import { prisma } from "@/config";

async function create(travelId: number, name: string, avaliation: number) {
  return prisma.restaurants.create({
    data: {
      travel_id: travelId,
      name,
      avaliation,
    },
  });
}

const restaurantsRepository = {
  create,
};

export default restaurantsRepository;
