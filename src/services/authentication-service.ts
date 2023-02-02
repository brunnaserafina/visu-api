import sessionRepository from "@/repositories/session-repository";
import userRepository from "@/repositories/user-repository";

import jwt from "jsonwebtoken";

async function signIn(name: string, email: string, idSession: string) {
  let user = await userRepository.findByEmail(email);

  if (!user) {
    user = await userRepository.create(name, email, idSession);
  }

  const token = await createSession(user.id);

  return {
    id: user.id,
    name,
    email,
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);

  await sessionRepository.create(userId, token);

  return token;
}

const authenticationService = {
  signIn,
};

export default authenticationService;
