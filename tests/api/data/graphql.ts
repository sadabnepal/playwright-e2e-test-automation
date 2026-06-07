export const queryFilterCharacterByName = (name: string) => ({
    query: `query Query($name: String) {
        characters(filter: {name: $name}) {
            info {
                count
            }
            results {
                id
                name
                status
                gender
                species
            }
        }
    }`,
    variables: { name }
});

export const getAllCharacters = () => ({
    query: `query Query {
        characters {
            info {
                count
            }
            results {
                id
                name
                status
                gender
                species
            }
        }
    }`
});