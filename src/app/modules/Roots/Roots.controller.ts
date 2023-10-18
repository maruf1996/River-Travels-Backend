import { NextFunction, Request, Response } from 'express'
import { RootService } from './Roots.service'

const createRoot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await RootService.createRoot(data)
    res.status(200).json({
      status: 'success',
      message: 'Root Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getRoots = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RootService.getRoots()
    res.status(200).json({
      status: 'success',
      message: 'Roots Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getRoot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await RootService.getRoot(id)
    res.status(200).json({
      status: 'success',
      message: 'Root Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateRoot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await RootService.updateRoot(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Root updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteRoot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await RootService.deleteRoot(id)
    res.status(200).json({
      status: 'success',
      message: 'Root Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const RootController = {
  createRoot,
  getRoots,
  getRoot,
  updateRoot,
  deleteRoot,
}
