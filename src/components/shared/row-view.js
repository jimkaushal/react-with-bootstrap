import React from 'react';

const RowView = ({children, showRuler}) => {
    return (<>
        {showRuler ? <hr className="featurette-divider"/> : null}
        <div className="row">
            {children}
        </div>
        </>
    )
};

export default RowView;