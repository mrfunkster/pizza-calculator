import React from 'react'

import './UnaviablePage.css'

const UnaviablePage = ({
    history,
}) => {
    console.log(history)
    return (
        <div className="unaviable-page">
            <h2>Ooops!</h2>
            <h3>It looks like you trying to get unaviable resources from "<span className="gold-span">{document.location.host}/</span><span>{history.location.pathname.substr(1)}</span>" and got a bad result like <br/>"<span>error 404</span>"</h3>
            <h3>Don't worry about it! Just click on the button bellow and relax :)</h3>
            <div className="link-button">
                <div className="un-btn" onClick={() => history.push('/')}>Go Back</div>
            </div>
        </div>
    )
}

export default UnaviablePage