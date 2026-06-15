import { faker } from "@faker-js/faker";

export const getPostById = (request) => {
    const postId = request.path.split("/").pop();

    if (isNaN(postId)) {
        return {
            statusCode: 400,
            body: {
                error: `invalid post id: ${postId}`
            }
        };
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            id: Number(postId),
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            userId: Number(postId)
        }
    }
}