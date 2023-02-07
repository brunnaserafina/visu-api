import { prisma } from "@/config";

async function createFavorite(userId: number, travelId: number) {
  return await prisma.favorites.create({
    data: {
      user_id: userId,
      travel_id: travelId,
    },
  });
}

async function findFavorite(userId: number, travelId: number) {
  return prisma.favorites.findFirst({
    where: {
      user_id: userId,
      travel_id: travelId,
    },
  });
}

async function deleteFavorite(id: number) {
  return prisma.favorites.delete({
    where: {
      id,
    },
  });
}

async function findManyFavorites(userId: number) {
  return prisma.favorites.findMany({
    where: {
      user_id: userId,
    },
    select: {
      travels: {
        select: {
          id: true,
          city_destination: true,
          date_start: true,
          date_end: true,
          avaliation: true,
          users: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
  });
}

const favoritesRepository = {
  createFavorite,
  findFavorite,
  deleteFavorite,
  findManyFavorites,
};

export default favoritesRepository;
