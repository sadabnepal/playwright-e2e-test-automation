function requestRouter(request) {

    const { faker } = require("@faker-js/faker");
    const { join } = require("path");

    if (request.method === "GET" && request.path.endsWith("/posts")) {
        const { getAllPosts } = require(join(process.cwd(), 'mocks', 'helper', 'getAllPosts.js'));

        return getAllPosts();
    }

    if (request.method === "GET" && request.path.endsWith("/comments")) {
        const { getComments } = require(join(process.cwd(), 'mocks', 'helper', 'getComments.js'));

        return getComments(request);
    }

    if (request.method === "GET" && request.path.includes("/posts")) {
        const { getPostById } = require(join(process.cwd(), 'mocks', 'helper', 'getPostById.js'));

        return getPostById(request);
    }

    if (request.method === "POST" && request.path.endsWith("/posts")) {
        const { createPosts } = require(join(process.cwd(), 'mocks', 'helper', 'createPosts.js'));

        return createPosts(request);
    }

    if (request.method === "PUT" && request.path.includes("/posts")) {
        const { putPostById } = require(join(process.cwd(), 'mocks', 'helper', 'putPostById.js'));

        return putPostById(request);
    }


    if (request.method === "PATCH" && request.path.includes("/posts")) {
        const { patchPostById } = require(join(process.cwd(), 'mocks', 'helper', 'patchPostById.js'));

        return patchPostById(request);
    }

    if (request.method === "DELETE" && request.path.includes("/posts")) {
        const { deletePostById } = require(join(process.cwd(), 'mocks', 'helper', 'deletePostById.js'));
        return deletePostById(request);
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            data: "Default post method called"
        }
    }
}