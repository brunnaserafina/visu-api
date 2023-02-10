import { prisma } from "@/config";

async function findByEmail(email: string) {
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

async function create(name: string, email: string, password: string) {
  return prisma.users.create({
    data: {
      name,
      email,
      password,
    },
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
