import React from 'react'
import propTypes from 'prop-types'

const SectionEmpty = ({ message }) => (
  <div className="section__empty">
    <div className="section__empty__message">
      <p>{message}</p>
    </div>
  </div>
)

SectionEmpty.displayName = 'SectionEmpty'
SectionEmpty.propTypes = {
  message: propTypes.string,
}

export default SectionEmpty
