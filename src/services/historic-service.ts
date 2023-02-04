import travelRepository from "@/repositories/travel-repository";

export async function getHistoricByUserId(userId: number) {
  const travelsByUser = await travelRepository.findTravelsByUserId(userId);

  return travelsByUser;
}
