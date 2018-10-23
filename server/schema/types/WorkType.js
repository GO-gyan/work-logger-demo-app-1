import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
    name: 'WorkType',
    description: 'Work for an assignment',
    fields: {
        id: {
            type: GraphQLID,
            description: `Work ID`
        },
        title: {
            type: GraphQLString,
            description: `Work title`
        },
        description: {
            type: GraphQLString,
            description: `Work description`
        },
        noOfHours: {
            type: GraphQLInt,
            description: `Total number of working hours`
        }
    }
})