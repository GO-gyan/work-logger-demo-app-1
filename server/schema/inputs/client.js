import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'clientInput',
    fields: () => ({
        companyName: { type: GraphQLString },
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        phone: { type: GraphQLString },
        language: { type: GraphQLString },
        currency: { type: GraphQLString },
        notes: { type: GraphQLString },
    })
});