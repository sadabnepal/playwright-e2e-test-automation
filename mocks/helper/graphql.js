function inject(request) {
    const body = JSON.parse(request.body);
    const query = body.query || "";
    const variables = body.variables || {};

    function handleCharacters(variables) {

        const fs = require("fs");
        const path = require("path");

        const fixture = JSON.parse(
            fs.readFileSync(
                path.join(process.cwd(), "mocks/fixtures/characters.json"),
                "utf8"
            )
        );

        // Filter by name if variable provided
        const name = variables.name?.toLowerCase();
        const results = name
            ? fixture.filter(c => c.name.toLowerCase().includes(name))
            : fixture;

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: {
                    characters: {
                        info: { count: results.length },
                        results
                    }
                }
            })
        };
    }

    if (query.includes("characters")) {
        return handleCharacters(variables);
    }

    return {
        statusCode: 400,
        body: JSON.stringify({ errors: [{ message: "unknown operation" }] })
    };
}