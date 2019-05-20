import React from 'react';
import Wording from '../../shared/wording';
import Heading from '../../shared/heading';

const HeadingColumn = (props) => {
    const headline = 'Heading';
    const paragraph = 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.';
    const text = 'View Details';
    const imageData = 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
    return <>
        <div className="col-lg-4">
            <img className="rounded-circle" src={imageData} alt="rounded" width="140" height="140" />
            <Heading value={headline} />
            <Wording paragraph={paragraph} />
            <button className="btn btn-secondary">{text}&nbsp;<i className="fa fa-angle-double-right"></i></button>
        </div>
    </>
};

export default HeadingColumn;