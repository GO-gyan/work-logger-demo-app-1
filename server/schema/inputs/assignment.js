import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'assignmentInput',
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        charges: { type: GraphQLFloat },
        chargeType: { type: GraphQLString }
    })
});