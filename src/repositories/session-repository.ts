import { prisma } from "@/config";

async function create(id: number, token: string) {
  return prisma.sessions.create({
    data: {
      user_id: id,
      token,
      active: true,
    },
  });
}

async function find(userId: number) {
  return prisma.sessions.findFirst({
    where: {
      user_id: userId,
    },
  });
}

const sessionRepository = {
  create,
  find,
};

export default sessionRepository;
