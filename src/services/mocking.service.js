import { faker } from "@faker-js/faker"
import { hashPassword } from "../utils/bcrypt.js"


export const createFakeUser = async () => {
return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: await hashPassword("12345678"),
    role: faker.helpers.arrayElement(["user", "admin"])
}
}


export const createNUsers = async (num) => {
const users = []
for (let i = 0; i < num; i++) {
    users.push(await createFakeUser())
}
return users
}