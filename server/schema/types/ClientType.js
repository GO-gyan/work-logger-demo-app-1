import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';
import AddressType from './AddressType';
import ClientService from '../../service/clientService';
import AssignmentType from './AssignmentType';

export default new GraphQLObjectType({
    name: 'ClientType',
    description: 'Clients, added by user',
    fields: {
        id: {
            type: GraphQLID,
            description: `Client's ID`
        },
        companyName: {
            type: GraphQLString,
            description: `Company full name`
        },
        name: {
            type: GraphQLString,
            description: `Client's full name`
        },
        email: {
            type: GraphQLString,
            description: `Company email`
        },
        phone: { 
            type: GraphQLString ,
            description: `Client's phone number`
        },
        language: { 
            type: GraphQLString,
            description: `Client's language`
        },
        currency: { 
            type: GraphQLString,
            description: `Client's currency`
        },
        notes: { 
            type: GraphQLString,
            description: `Any notes for the client`
        },
        addresses: {
            type: new GraphQLList(AddressType),
            description: `List of the address of a client`,
            resolve: (root) => {
                return ClientService.findAddresses(root.id);
            }
        },
        assignments: {
            type: new GraphQLList(AssignmentType),
            description: `List of assignments of a client`,
            resolve: (root) => {
                return ClientService.findAssignments(root.id);
            }
        }
    }
})