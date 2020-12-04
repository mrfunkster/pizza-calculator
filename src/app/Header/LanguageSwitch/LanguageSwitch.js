import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { switchToEN, switchToRU } from '../../../common/store/actions'

import './LanguageSwitch.css'

const LanguageSwitch = ({
    currentLanguage,
    currentFlag,
    switchToEN,
    switchToRU
}) => {

    const LanguageSwitch = () => {
        if(currentLanguage === "EN") {
            switchToRU()
        } else {
            switchToEN()
        }
    }

    return (
        <div className="col-sm-4 col language-switch">
            <div className="language"
                onClick={() => LanguageSwitch()}
            >
                <span>{currentLanguage}</span>
                {/* <span>{currentFlag}</span> */}
            </div> 
        </div>
    );
}

const mapStateToProps = state => ({
    currentLanguage: state.localization.header.language.currentLanguage,
    currentFlag: state.localization.header.language.currentFlag
})

const mapDispatchToProps = {
    switchToEN,
    switchToRU
}

LanguageSwitch.propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    currentFlag:     PropTypes.string,
    switchToEN:      PropTypes.func.isRequired,
    switchToRU:      PropTypes.func.isRequired
}

LanguageSwitch.defaultProps = {
    currentFlag: "No flag..."
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageSwitch)