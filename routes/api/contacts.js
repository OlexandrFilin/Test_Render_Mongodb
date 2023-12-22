import { Router } from 'express'

import {getAll,getById,add, update, remove}  from "../../conrolers/contacts-controler.js"
import isEmptyBody from '../../middlewares/isEmptyBody.js'
import isNoContact from '../../middlewares/isNoContact.js'

const router = Router()

router.get('/', getAll)

router.get('/:contactId', getById,isNoContact )

router.post('/',isEmptyBody, add);


router.delete('/:contactId', remove)

router.put('/:contactId',isEmptyBody,update )


export default router
