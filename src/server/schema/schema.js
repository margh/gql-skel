import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLEnumType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} from 'graphql';

// import {
//   connectionArgs,
//   connectionDefinitions,
//   connectionFromArray,
//   cursorForObjectInConnection,
//   fromGlobalId,
//   globalIdField,
//   mutationWithClientMutationId,
//   nodeDefinitions,
// } from 'graphql-relay';

const BONES = {
  clavicle: {
    name: 'Clavicle',
    broken: 'while snowboarding',
    status: 'All good',
  },
  radius: {
    name: 'Radius',
    broken: 'on the tram tracks',
    status: 'Broken',
  },
};

const BoneStatusEnum = new GraphQLEnumType({
  name: 'BoneStatus',
  description: 'Type of fibre optic connection',
  values: {
    BROKEN: {
      value: 'Broken',
      didItHurt: 'yep',
    },
    NOT_BROKEN: {
      value: 'All good',
      didItHurt: 'nope',
    },
  },
});

const BoneType = new GraphQLObjectType({
  name: 'Bone',
  description: 'represents a bone',
  fields: () => ({
    name: { type: GraphQLString },
    broken: { type: GraphQLString },
    status: { type: BoneStatusEnum },
  }),
});

const queryType = new GraphQLObjectType({
  name: 'SavviSchema',
  description: 'Network Inventory Schema',
  fields: () => ({
    bone: {
      type: BoneType,
      args: {
        name: {
          description: 'What happened bruh?',
          type: GraphQLString,
        },
      },
      resolve: (root, { name }) => BONES[name],
    },
  }),
});

export const schema = new GraphQLSchema({
  query: queryType,
  // mutation: mutationType,
});
