/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import httpStatus from 'http-status'
import { Secret } from 'jsonwebtoken'
import ApiError from '../../../Errors/ApiError'
import { prisma } from '../../../Shared/prisma'
import config from '../../../config'
import { jwtHelpers } from '../../Helpers/jwtHelpers'
import { ILoginUserResponse } from './Auth.interface'

const createUser = async (data: User): Promise<User | null> => {
  data.password = bcrypt.hashSync(data.password, 12)
  const result = await prisma.user.create({ data })
  return result
}

const loginUser = async (traveller: User): Promise<ILoginUserResponse> => {
  const user = await prisma.user.findUnique({
    where: {
      email: traveller.email,
    },
  })
  // console.log(traveller)

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
  }

  const userExist = await bcrypt.compare(traveller.password, user.password)

  if (!userExist) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials')
  }

  // create access token and refresh token
  const payloadData = {
    email: user!.email,
    role: user!.role,
    phoneNumber: user!.contactNo,
    fullName: user!.name,
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
  const { email } = decodedToken

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  // generate new token
  const payloadData = {
    email: user!.email,
    role: user!.role,
    phoneNumber: user!.contactNo,
    fullName: user!.name,
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
