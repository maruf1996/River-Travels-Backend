/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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

const getLaunchDetailses = async (options: any) => {
  const { searchTerm } = options
  // console.log(searchTerm)

  const result = await prisma.launchDetails.findMany({
    include: {
      root: true,
      shedule: true,
    },
    where: {
      root: {
        name: {
          contains: searchTerm,
        },
      },
    },
  })
  return result
}

const getLaunchDetails = async (id: string): Promise<LaunchDetails | null> => {
  const result = await prisma.launchDetails.findUnique({
    where: {
      id,
    },
    include: {
      root: true,
      shedule: true,
      stuff: true,
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
