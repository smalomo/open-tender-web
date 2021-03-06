import React from 'react'
import propTypes from 'prop-types'
import BarLoader from 'react-spinners/BarLoader'

const SectionLoading = ({ loading }) => {
  return (
    <div className="section__loading">
      <div className="section__loading__loader">
        <BarLoader size={100} loading={loading} />
      </div>
    </div>
  )
}

SectionLoading.displayName = 'SectionLoading'
SectionLoading.propTypes = {
  loading: propTypes.bool,
}

export default SectionLoading
