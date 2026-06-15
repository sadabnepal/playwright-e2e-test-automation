export const putPostById = (request) => {
    const postId = request.path.split("/").pop();

    if (isNaN(postId)) {
        return {
            statusCode: 400,
            body: {
                error: `invalid post id: ${postId}`
            }
        };
    }

    const { title, body, userId } = JSON.parse(request.body);

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            id: Number(postId),
            title: title,
            body: body,
            userId: Number(postId),
        }
    }
}