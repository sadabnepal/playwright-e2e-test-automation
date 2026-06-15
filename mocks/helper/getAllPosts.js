import { faker } from "@faker-js/faker";

export const getAllPosts = () => {

    const userData = [];

    for (let i = 1; i <= 30; i++) {
        const data = {
            id: i,
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            userId: i
        }
        userData.push(data);
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: userData
    }
}