export const deletePostById = (request) => {
    const postId = request.path.split("/").pop();

    if (isNaN(postId)) {
        return {
            statusCode: 404,
            body: {}
        };
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {}
    }
}