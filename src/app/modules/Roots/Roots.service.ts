import { Root } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const createRoot = async (data: Root): Promise<Root> => {
  const result = await prisma.root.create({
    data,
  })
  return result
}

const getRoots = async () => {
  const result = await prisma.root.findMany({})
  return result
}

const getRoot = async (id: string): Promise<Root | null> => {
  const result = await prisma.root.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateRoot = async (
  id: string,
  payload: Partial<Root>,
): Promise<Root> => {
  const result = await prisma.root.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteRoot = async (id: string) => {
  const result = await prisma.root.delete({
    where: {
      id,
    },
  })
  return result
}

export const RootService = {
  createRoot,
  getRoots,
  getRoot,
  updateRoot,
  deleteRoot,
}
