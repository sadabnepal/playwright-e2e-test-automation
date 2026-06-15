export const getComments = (request) => {
    const postId = request.path.split("/")[1];

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            status: `todo for post id: ${postId} of /comments`
        }
    }
}