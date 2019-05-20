import React from 'react';

const FooterView = ({ children, showRuler }) => {
    return <>
        <hr className="featurette-divider"/>
        <footer class="container">
            <p class="float-right"><a href="#">Back to top</a></p>
            <p>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </footer>
    </>
};

export default FooterView;