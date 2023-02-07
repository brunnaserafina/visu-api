import { PrismaClient } from "@prisma/client";
import faker from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await cleanDb();
  await seedUsers();
  await seedSessions();
  await seedTravels();
  await seedAccomodations();
  await seedRestaurants();
  await seedAttractions();
  await seedPictures();
}

async function cleanDb() {
  await prisma.accommodations.deleteMany({});
  await prisma.restaurants.deleteMany({});
  await prisma.attractions.deleteMany({});
  await prisma.pictures.deleteMany({});
  await prisma.favorites.deleteMany({});
  await prisma.travels.deleteMany({});
  await prisma.sessions.deleteMany({});
  await prisma.users.deleteMany({});
}

async function seedUsers() {
  await prisma.users.createMany({
    data: [
      {
        id: 1,
        name: "Jeferson Serafina",
        email: "jeferson.serafina@gmail.com",
        password: "123456",
      },
      {
        id: 2,
        name: "Alexandre Hoffmann Júnior",
        email: "alexandre.hoffmann@gmail.com",
        password: "123456",
      },
      {
        id: 3,
        name: "Marlise Serafina",
        email: "marlise.serafina@gmail.com",
        password: "123456",
      },
      {
        id: 4,
        name: "Evelyn Albino",
        email: "evelyn.albino@gmail.com",
        password: "123456",
      },
    ],
  });
}

async function seedSessions() {
  await prisma.sessions.createMany({
    data: [
      {
        user_id: 1,
        token: faker.datatype.uuid(),
      },
      {
        user_id: 2,
        token: faker.datatype.uuid(),
      },
      {
        user_id: 3,
        token: faker.datatype.uuid(),
      },
    ],
  });
}

async function seedTravels() {
  await prisma.travels.createMany({
    data: [
      {
        id: 1,
        user_id: 4,
        city_origin: "Criciúma - SC",
        city_destination: "Curitiba - PR",
        date_start: new Date("2023-01-22T00:00:00Z"),
        date_end: new Date("2023-01-24T00:00:00Z"),
        spent: 800,
        summary:
          "Viajar sozinha para Curitiba é muito tranquilo e gosto de recomendar como primeiro destino para quem é mais urbano e prefere atividades históricas. Curitiba tem muito verde também nos seus inúmeros parques espalhados pela cidade. A cidade é um dos meus destinos prediletos por ter várias opções do que fazer tanto no inverno, quanto no verão. Além de tudo, a gastronomia é incrível e o que não falta por lá são ótimas cervejas artesanais para conhecer.",
        avaliation: 5,
      },
      {
        id: 2,
        user_id: 1,
        city_origin: "Florianópolis - SC",
        city_destination: "Manaus - AM",
        date_start: new Date("2023-01-04T00:00:00Z"),
        date_end: new Date("2023-01-07T00:00:00Z"),
        spent: 2000,
        summary:
          "Viajar para Manaus deveria estar na lista de prioridade dos viajantes brasileiros - é tão interessante e enriquecedor que você muitas vezes esquece que está no Brasil. Viajar para Manaus é viver experiências únicas, experimentar novos sabores e estar no meio da maior reserva natural do planeta!",
        avaliation: 5,
      },
      {
        id: 3,
        user_id: 3,
        city_origin: "Laguna - SC",
        city_destination: "Gramado - RS",
        date_start: new Date("2022-08-10T00:00:00Z"),
        date_end: new Date("2022-08-15T00:00:00Z"),
        spent: 1000,
        summary:
          "Ruas floridas, friozinho e boa gastronomia, um local perfeito para viajar a dois. O que mais me surpreendeu nessa viagem foi a organização, limpeza e principalmente a natureza. Tem muito verde na cidade e eu estava sentindo falta disso depois do isolamento de quase dois anos.",
        avaliation: 5,
      },
      {
        id: 4,
        user_id: 2,
        city_origin: "Urussanga - SC",
        city_destination: "São Thomé das Letras - MG",
        date_start: new Date("2022-12-10T00:00:00Z"),
        date_end: new Date("2022-12-18T00:00:00Z"),
        spent: 4000,
        summary:
          "A cidade é apaixonante e oferece muitas opções para um final de semana agitado ou uma semana inteira de atividades e auto conhecimento. É uma cidade mágica e mística, já quero voltar novamente!",
        avaliation: 5,
      },
    ],
  });
}

async function seedAccomodations() {
  await prisma.accommodations.createMany({
    data: [
      {
        travel_id: 1,
        type: "Hostel",
        localization: "Hostel Social - Café e Bar. Rua Brg. Franco, 2691 - Rebouças.",
      },
      {
        travel_id: 2,
        type: "Airbnb",
        localization: "Av. Djalma Batista - Nossa Sra. das Graças",
      },
      {
        travel_id: 3,
        type: "Hotel",
        localization: "Buona Vitta Gramado. Estr. Profa. Elvira Apolo Benetti, 150 - Carniel",
      },
      {
        travel_id: 4,
        type: "Airbnb",
        localization: "Mística Hotel & Pousada. R. Projetada 4.",
      },
    ],
  });
}

async function seedRestaurants() {
  await prisma.restaurants.createMany({
    data: [
      {
        travel_id: 1,
        name: "Lisboa Gastronomia",
        avaliation: 5,
      },
      {
        travel_id: 1,
        name: "Calabouço Restaurante e Pizzaria",
        avaliation: 4,
      },
      {
        travel_id: 1,
        name: "Terrazza 40",
        avaliation: 4,
      },
      {
        travel_id: 2,
        name: "Restaurante Banzeiro Manaus",
        avaliation: 4,
      },
      {
        travel_id: 2,
        name: "Caxiri Manaus",
        avaliation: 4,
      },
      {
        travel_id: 2,
        name: "Ancho Steak Burger",
        avaliation: 5,
      },
      {
        travel_id: 3,
        name: "Josephina",
        avaliation: 5,
      },
      {
        travel_id: 3,
        name: "Neni Pizza e Pasta",
        avaliation: 4,
      },
      {
        travel_id: 3,
        name: "Casa Della Salumeria",
        avaliation: 5,
      },
      {
        travel_id: 4,
        name: "O Alquimista Praça",
        avaliation: 5,
      },
      {
        travel_id: 4,
        name: "Pastelarica",
        avaliation: 5,
      },
      {
        travel_id: 4,
        name: "Jardim Secreto Restaurante & Lounge",
        avaliation: 5,
      },
    ],
  });
}

async function seedAttractions() {
  await prisma.attractions.createMany({
    data: [
      {
        travel_id: 1,
        name: "Jardim botânico",
        avaliation: 3,
      },
      {
        travel_id: 1,
        name: "Museu Oscar Niemeyer",
        avaliation: 4,
      },
      {
        travel_id: 1,
        name: "Parque Tanguá",
        avaliation: 5,
      },
      {
        travel_id: 2,
        name: "Teatro Amazonas",
        avaliation: 4,
      },
      {
        travel_id: 2,
        name: "Palácio Rio Negro",
        avaliation: 4,
      },
      {
        travel_id: 2,
        name: "Parque Municipal do Mindu",
        avaliation: 5,
      },
      {
        travel_id: 3,
        name: "Lago Negro",
        avaliation: 5,
      },
      {
        travel_id: 3,
        name: "Rua Coberta",
        avaliation: 5,
      },
      {
        travel_id: 3,
        name: "Mini Mundo",
        avaliation: 5,
      },
      {
        travel_id: 3,
        name: "Praça das Etnias",
        avaliation: 3,
      },
      {
        travel_id: 4,
        name: "Cachoeira da Lua",
        avaliation: 5,
      },
      {
        travel_id: 4,
        name: "Pedra da Bruxa São Thomé das Letras",
        avaliation: 5,
      },
      {
        travel_id: 4,
        name: "Ladeira do Amendoim",
        avaliation: 4,
      },
      {
        travel_id: 4,
        name: "Pirâmide São Thomé das Letras",
        avaliation: 4,
      },
    ],
  });
}

async function seedPictures() {
  await prisma.pictures.createMany({
    data: [
      {
        travel_id: 1,
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/55/Tangu%C3%A1_Curitiba.jpg",
      },
      {
        travel_id: 2,
        picture: "https://farm5.staticflickr.com/4754/38993102365_aff83d090e_z.jpg",
      },
      {
        travel_id: 3,
        picture:
          "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-gramado-capa2019-04.jpg",
      },
      {
        travel_id: 4,
        picture:
          "https://vamosdepenaestrada.com.br/wp-content/uploads/2019/02/40002185_1221371458004912_2707787686818611200_o-1080x675.jpg",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
