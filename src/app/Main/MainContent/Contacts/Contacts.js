import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

import './Contacts.css'
import ScrollToTopOnMount from '../../../../common/components/ScrollToTopOnMount'

const Contacts = ({
    contactsPageTitle
}) => {
    return (
        <motion.div className="contacts-page"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, transition: 'ease-in-out' }}
        >
            <ScrollToTopOnMount />
            <h2>{contactsPageTitle}</h2>
        </motion.div>
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