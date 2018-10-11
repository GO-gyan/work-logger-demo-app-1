import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'userInput',
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});