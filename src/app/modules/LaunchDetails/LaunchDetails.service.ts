import { LaunchDetails } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const createLaunchDetails = async (
  data: LaunchDetails,
): Promise<LaunchDetails> => {
  const result = await prisma.launchDetails.create({
    data,
  })
  return result
}

const getLaunchDetailses = async () => {
  const result = await prisma.launchDetails.findMany({})
  return result
}

const getLaunchDetails = async (id: string): Promise<LaunchDetails | null> => {
  const result = await prisma.launchDetails.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateLaunchDetails = async (
  id: string,
  payload: Partial<LaunchDetails>,
): Promise<LaunchDetails> => {
  const result = await prisma.launchDetails.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteLaunchDetails = async (id: string) => {
  const result = await prisma.launchDetails.delete({
    where: {
      id,
    },
  })
  return result
}

export const LaunchDetailsService = {
  createLaunchDetails,
  getLaunchDetailses,
  getLaunchDetails,
  updateLaunchDetails,
  deleteLaunchDetails,
}
