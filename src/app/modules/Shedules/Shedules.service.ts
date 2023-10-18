import { Shedule } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const createShedule = async (data: Shedule): Promise<Shedule> => {
  const result = await prisma.shedule.create({
    data,
  })
  return result
}

const getShedules = async () => {
  const result = await prisma.shedule.findMany({})
  return result
}

const getShedule = async (id: string): Promise<Shedule | null> => {
  const result = await prisma.shedule.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateShedule = async (
  id: string,
  payload: Partial<Shedule>,
): Promise<Shedule> => {
  const result = await prisma.shedule.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteShedule = async (id: string) => {
  const result = await prisma.shedule.delete({
    where: {
      id,
    },
  })
  return result
}

export const SheduleService = {
  createShedule,
  getShedules,
  getShedule,
  updateShedule,
  deleteShedule,
}
