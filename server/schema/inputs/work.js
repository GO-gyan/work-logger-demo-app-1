import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'workInput',
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        noOfHours: { type: GraphQLInt }
    })
});