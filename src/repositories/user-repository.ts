import { prisma } from "@/config";

async function findByEmail(email: string) {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function create(name: string, email: string, idSession: string) {
  return prisma.users.create({
    data: {
      name,
      email,
      password: idSession,
    },
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
