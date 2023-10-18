import { LaunchStuff } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const createStuff = async (data: LaunchStuff): Promise<LaunchStuff> => {
  const result = await prisma.launchStuff.create({
    data,
  })
  return result
}

const getStuffs = async () => {
  const result = await prisma.launchStuff.findMany({})
  return result
}

const getStuff = async (id: string): Promise<LaunchStuff | null> => {
  const result = await prisma.launchStuff.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateStuff = async (
  id: string,
  payload: Partial<LaunchStuff>,
): Promise<LaunchStuff> => {
  const result = await prisma.launchStuff.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteStuff = async (id: string) => {
  const result = await prisma.launchStuff.delete({
    where: {
      id,
    },
  })
  return result
}

export const StuffService = {
  createStuff,
  getStuffs,
  getStuff,
  updateStuff,
  deleteStuff,
}
