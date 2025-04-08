import { Router } from "express"
import { getFakeUsers, postFakeUsers } from "../controllers/mocks.controller.js"

const mocksRouter = Router()

mocksRouter.get("/mockingUsers", getFakeUsers)
mocksRouter.post("/generateData", postFakeUsers)

export default mocksRouter