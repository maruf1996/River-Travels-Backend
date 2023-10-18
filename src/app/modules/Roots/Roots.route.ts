import express from 'express'
import { RootController } from './Roots.controller'

const router = express.Router()

router.post('/create-root', RootController.createRoot)
router.get('/:id', RootController.getRoot)
router.patch('/:id', RootController.updateRoot)
router.delete('/:id', RootController.deleteRoot)
router.get('/', RootController.getRoots)

export const RootRoutes = router
