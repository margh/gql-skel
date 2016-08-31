import BoneDetails from '../components/bone-details';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

const GET_BONE = gql `
  query getBone($boneName: String!) {
    bone(name: $boneName) {
      name
      broken,
    }
  }
`;

// Add the GraphQL data to the component's properties
const addData = graphql(GET_BONE, {
  options: (ownProps) => ({ variables: { boneName: ownProps.boneName } }),
});

// Add the redux state to the component's properties
const addState = connect(
  (state) => ({ boneName: state.bone })
);

export default addState(addData(BoneDetails));
