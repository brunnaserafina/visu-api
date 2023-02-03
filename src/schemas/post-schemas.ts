import Joi from "joi";

export const PostTravelSchema = Joi.object<PostTravelParams>({
  cityOrigin: Joi.string().required(),
  cityDestination: Joi.string().required(),
  dateStart: Joi.date().required(),
  dateEnd: Joi.date().required(),
  spent: Joi.number(),
  summary: Joi.string().required(),
  avaliation: Joi.number().required(),
  attractions: Joi.array(),
  restaurants: Joi.array(),
  accommodation: Joi.object(),
  picture: Joi.string().required(),
});

export type PostTravelParams = {
  cityOrigin: string;
  cityDestination: string;
  dateStart: Date;
  dateEnd: Date;
  spent: number;
  summary: string;
  avaliation: number;
  attractions: Array<any>;
  restaurants: Array<any>;
  accommodation: Accomodation;
  picture: string;
};

export type Accomodation = {
  type: string;
  localization: string;
};
