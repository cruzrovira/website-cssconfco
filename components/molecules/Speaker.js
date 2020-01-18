import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { choices } from '../../utils/designTokens'

const Speaker = ({ image, children }) => {
  return (
    <Fragment>
      <div className="speaker">
        {children && <div className="info">{children}</div>}
      </div>
      <style jsx>{`
        .speaker {
		  display: inline-flex;
		  flex-direction: column;
		  justify-content: flex-end;
		  align-items: flex-end;
		  text-align: right;
		  background-image: url('/static/images/speakers/${image}.png');
		  background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 300px;
		  width: 300px;
		  margin: ${choices.spacing[8]} ${choices.spacing[8]} ${choices.spacing[10]} ;
		}

		.info {
			margin-bottom: -20px;
		}
      `}</style>
    </Fragment>
  )
}

Speaker.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string
}

export default Speaker
