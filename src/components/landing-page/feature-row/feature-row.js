import React from 'react';

const FeatureRow = (props) => {
    return (
        <div className="row featurette">
            {props.children}
        </div>
    )
};

export default FeatureRow;