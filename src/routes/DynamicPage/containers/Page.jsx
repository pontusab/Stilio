import React from 'react';

const Page = (props) => (
  <div>
    <h1>{`Welcome to page: ${props.params.id}`}</h1>
  </div>
);

Page.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default Page;
