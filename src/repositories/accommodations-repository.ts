import { prisma } from "@/config";

async function create(travelId: number, type: string, localization: string) {
  return prisma.accommodations.create({
    data: {
      travel_id: travelId,
      type,
      localization,
    },
  });
}

const accommodationsRepository = {
  create,
};

export default accommodationsRepository;
