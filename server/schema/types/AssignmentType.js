import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLFloat
} from 'graphql';

export default new GraphQLObjectType({
    name: 'AssignmentType',
    description: 'Assignment for a client',
    fields: {
        id: {
            type: GraphQLID,
            description: `Assignment ID`
        },
        title: {
            type: GraphQLString,
            description: `Title of an assignment`
        },
        description: {
            type: GraphQLString,
            description: `Description for an assignment`
        },
        status: {
            type: GraphQLString,
            description: `Status of an assignment`
        },
        charges: { 
            type: GraphQLFloat ,
            description: `Charge for an assignment`
        },
        chargeType: { 
            type: GraphQLString,
            description: `Type of charges`
        }
    }
})