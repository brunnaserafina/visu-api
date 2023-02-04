import favoritesRepository from "@/repositories/favorites-repository";

export async function postFavoriteByTravelId(userId: number, travelId: number) {
  await favoritesRepository.createFavorite(userId, travelId);
}

export async function removeFavoriteByTravelId(userId: number, travelId: number) {
  const favorite = await favoritesRepository.findFavorite(userId, travelId);

  await favoritesRepository.deleteFavorite(favorite.id);
}

export async function getAllFavoritesByUserId(userId: number) {
  const favorites = await favoritesRepository.findManyFavorites(userId);
  return favorites;
}
