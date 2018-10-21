import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'addressInput',
    fields: () => ({
        street1: { type: GraphQLString },
        street2: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        postal: { type: GraphQLString },
        country: { type: GraphQLString }
    })
});