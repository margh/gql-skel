import React, { PropTypes } from 'react';

const BoneDetails = function renderBoneDetails({ data }) {
  if (data.loading) {
    return (
      <div className="boneDetails"> Search for "clavicle" or "radius" </div>
    );
  }

  return (
    <div className="boneDetails">
      <div>Bone name: {data.bone.name}</div>
      <div>Bone broken: {data.bone.broken}</div>
    </div>
  );
};

BoneDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BoneDetails;
