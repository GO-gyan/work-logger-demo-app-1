import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} from 'graphql';

export default new GraphQLObjectType({
    name: 'InvoiceType',
    description: 'Invoice for an assignment',
    fields: {
        id: {
            type: GraphQLID,
            description: `Invoice ID`
        },
        description: {
            type: GraphQLString,
            description: `Invoice description`
        },
        date: {
            type: GraphQLString,
            description: `Invoice created date`
        },
        totalTime: {
            type: GraphQLInt,
            description: `Total number of working hours`
        },
        totalAmount: {
            type: GraphQLFloat,
            description: `Total amount to be paid by client`
        },
        amountPaid: {
            type: GraphQLFloat,
            description: `Amount paid till date`
        },
        status: {
            type: GraphQLString,
            description: `Status of an invoice`
        }
    }
})