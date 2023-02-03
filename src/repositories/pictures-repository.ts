import { prisma } from "@/config";

async function create(travelId: number, picture: string) {
  return prisma.pictures.create({
    data: {
      picture,
      travel_id: travelId,
    },
  });
}

const picturesRepository = {
  create,
};

export default picturesRepository;
