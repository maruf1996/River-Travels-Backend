import { Admin } from '@prisma/client'
import { prisma } from '../../../Shared/prisma'

const createAdmin = async (data: Admin): Promise<Admin> => {
  const result = await prisma.admin.create({
    data,
  })
  return result
}

const getAdmins = async () => {
  const result = await prisma.admin.findMany({})
  return result
}

const getAdmin = async (id: string): Promise<Admin | null> => {
  const result = await prisma.admin.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateAdmin = async (
  id: string,
  payload: Partial<Admin>,
): Promise<Admin> => {
  const result = await prisma.admin.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteAdmin = async (id: string) => {
  const result = await prisma.admin.delete({
    where: {
      id,
    },
  })
  return result
}

export const AdminService = {
  createAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
}
