import {
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
} from 'graphql';

export const commonFields = {
    firstName: {
        type: GraphQLString,
        description: 'User first name',
    },
    lastName: {
        type: GraphQLString,
        description: 'User second name',
    },
    thirdName: {
        type: GraphQLString,
        description: 'User third name',
    },
    login: {
        type: GraphQLString,
        description: 'User login',
    },
    password: {
        type: GraphQLString,
        description: 'User password',
    },
    role: {
        type: GraphQLString,
        description: 'User role',
    },
};

export const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => {
        return {
            ...commonFields,
            id: {
                type: GraphQLInt,
                description: 'User ID',
            },
        };
    },
});

export const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'User input type',
    fields: () => {
        return {
            ...commonFields,
        };
    },
});
