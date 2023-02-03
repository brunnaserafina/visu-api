import accommodationsRepository from "@/repositories/accommodations-repository";
import attractionsRepository from "@/repositories/attractions-repository";
import picturesRepository from "@/repositories/pictures-repository";
import restaurantsRepository from "@/repositories/restaurants-repository";
import travelRepository from "@/repositories/travel-repository";
import { Accomodation } from "@/schemas/post-schemas";

export async function newPost(
  userId: number,
  cityOrigin: string,
  cityDestination: string,
  dateStart: Date,
  dateEnd: Date,
  spent: number,
  summary: string,
  avaliation: number,
) {
  const travel = await travelRepository.create(
    userId,
    cityOrigin,
    cityDestination,
    dateStart,
    dateEnd,
    spent,
    summary,
    avaliation,
  );

  return travel;
}

export async function newAttractions(travelId: number, attractions: Array<any>): Promise<void> {
  for (const attraction of attractions) {
    await attractionsRepository.create(travelId, attraction.name, attraction.avaliation);
  }
}

export async function newRestaurants(travelId: number, restaurants: Array<any>): Promise<void> {
  for (const restaurant of restaurants) {
    await restaurantsRepository.create(travelId, restaurant.name, restaurant.avaliation);
  }
}

export async function newAccommodation(travelId: number, accommodation: Accomodation): Promise<void> {
  await accommodationsRepository.create(travelId, accommodation.type, accommodation.localization);
}

export async function newPicture(travelId: number, picture: string): Promise<void> {
  await picturesRepository.create(travelId, picture);
}

export async function getAllTravels() {
  const travels = await travelRepository.findTravels();

  return travels;
}
