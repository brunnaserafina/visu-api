import { prisma } from "@/config";

async function create(travelId: number, name: string, avaliation: number) {
  return prisma.attractions.create({
    data: {
      travel_id: travelId,
      name,
      avaliation,
    },
  });
}

const attractionsRepository = {
  create,
};

export default attractionsRepository;
