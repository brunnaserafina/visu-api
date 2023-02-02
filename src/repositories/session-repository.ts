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

const sessionRepository = {
  create,
};

export default sessionRepository;
