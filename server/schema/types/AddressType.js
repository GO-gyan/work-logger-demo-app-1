import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'AddressType',
    description: 'Address of a client',
    fields: {
        id: {
            type: GraphQLID,
            description: `Address ID`
        },
        street1: {
            type: GraphQLString,
            description: `Address line 1`
        },
        street2: {
            type: GraphQLString,
            description: `Address line 2`
        },
        city: {
            type: GraphQLString,
            description: `City name of the client`
        },
        state: { 
            type: GraphQLString ,
            description: `State name of the client`
        },
        postal: { 
            type: GraphQLString,
            description: `Postal code of the client`
        },
        country: { 
            type: GraphQLString,
            description: `Country name of the client`
        }
    }
})