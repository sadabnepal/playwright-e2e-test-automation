import { faker } from "@faker-js/faker";


export const createRandomPostData = {
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    userId: faker.number.int({ min: 1, max: 10 })
};