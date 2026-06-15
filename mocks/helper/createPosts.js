import { faker } from "@faker-js/faker";

export const createPosts = (request) => {

    const body = JSON.parse(request.body);

    if (body.title === undefined || body.body === undefined || body.userId === undefined) {
        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "error": "mandate fields missing!!"
            }
        }
    }

    return {
        statusCode: 201,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            title: body.title,
            body: body.body,
            userId: body.userId,
            id: faker.number.int({ min: 31, max: 50 })
        }
    }

}