import travelRepository from "@/repositories/travel-repository";

export async function getAllTravels() {
  const travels = await travelRepository.findTravels();

  return travels;
}

export async function getTravelById(travelId: number) {
  const travel = await travelRepository.findTravelById(travelId);

  return travel;
}
