import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Contacts.css'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'

const Contacts = ({
    contactsPageTitle
}) => {
    return (
        <div className="contacts-page">
            <ScrollToTopOnMount />
            <h2>{contactsPageTitle}</h2>
        </div>
    )
}

const mapDispatchToProps = state => ({
    contactsPageTitle: state.localization.main.mainContent.contacts.contactsPageTitle
})

Contacts.propTypes = {
    contactsPageTitle: PropTypes.string
}

Contacts.defaultProps = {
    contactsPageTitle: "Contacts Page Title..."
}

export default connect(
    mapDispatchToProps
)(Contacts)