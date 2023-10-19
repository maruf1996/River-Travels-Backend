import httpStatus from 'http-status'
import ApiError from '../../../Errors/ApiError'
import { prisma } from '../../../Shared/prisma'

const myProfile = async (email: string) => {
  let isUserExist

  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  })

  const launchStuff = await prisma.launchStuff.findUnique({
    where: {
      email,
    },
  })

  const traveller = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!admin && !launchStuff && !traveller) {
    throw new Error('User does not Exist')
  }

  if (admin || launchStuff || traveller) {
    isUserExist = admin || launchStuff || traveller
  }

  if (!isUserExist) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials')
  }
  return isUserExist
}

export const ProfileService = { myProfile }
