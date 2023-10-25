/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client'
import httpStatus from 'http-status'
import { Secret } from 'jsonwebtoken'
import ApiError from '../../../Errors/ApiError'
import { prisma } from '../../../Shared/prisma'
import config from '../../../config'
import { jwtHelpers } from '../../Helpers/jwtHelpers'
import { ILoginUserResponse } from './Auth.interface'

const createUser = async (data: User): Promise<User | null> => {
  const result = await prisma.user.create({ data })
  return result
}

const loginUser = async (payload: any): Promise<ILoginUserResponse> => {
  const { email, password } = payload

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

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!admin && !launchStuff && !user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'User does not exist')
  }

  const isUserExist = admin || launchStuff || user

  if (isUserExist && isUserExist.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  // Create access token and refresh token
  const payloadData = {
    email: isUserExist!.email,
    role: isUserExist!.role,
    phoneNumber: isUserExist!.contactNo,
    profileImg: isUserExist!.profileImg,
    fullName: isUserExist!.name,
  }

  const accessToken = jwtHelpers.createToken(
    payloadData,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  return { accessToken }
}

const refreshToken = async (token: string) => {
  if (!token) {
    throw new Error('Token is required')
  }

  let decodedToken: any = null
  try {
    decodedToken = jwtHelpers.decodeToken(token)
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token')
  }

  //checking deleted user's refresh token
  const { email, role, phoneNumber, fullName, profileImg } = decodedToken

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

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

  if (!admin && !launchStuff && !user) {
    throw new Error('User does not Exist')
  }

  // generate new token
  const payloadData = {
    email,
    role,
    phoneNumber,
    profileImg,
    fullName,
  }

  const refreshToken = jwtHelpers.createToken(
    payloadData,
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  return {
    refreshToken,
  }
}

export const AuthServices = { createUser, loginUser, refreshToken }
