import { User } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const getUsers = async (): Promise<User[] | null> => {
  const result = await prisma.user.findMany()
  return result
}

const getUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: { id },
  })
  return result
}
const updateUser = async (
  id: string,
  payload: Partial<User>,
): Promise<Partial<User> | null> => {
  const result = await prisma.user.update({
    where: { id },
    data: payload,
  })
  return result
}

const deleteUser = async (id: string) => {
  const result = await prisma.user.delete({
    where: { id },
  })
  return result
}

export const UserService = { getUsers, getUser, updateUser, deleteUser }
