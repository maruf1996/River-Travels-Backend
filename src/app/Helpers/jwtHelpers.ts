import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string,
): string => {
  return jwt.sign(payload, secret, { expiresIn: expireTime })
}

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  // console.log(token, secret)
  return jwt.verify(token, secret) as JwtPayload
}

const decodeToken = (token: string) => {
  return jwt.decode(token)
}

export const jwtHelpers = { createToken, verifyToken, decodeToken }
