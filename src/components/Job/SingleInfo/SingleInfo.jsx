import React, { Fragment } from 'react'
import { removeIcon } from '../../../utilities/images'

export default function SingleInfo(props) {
  return (
    <Fragment>
      {props.inList && (
        <button onClick={() => props.onClickHandler(props.children)}>
          {props.children}
        </button>
      )}
      {props.inFilter && (
        <>
          <p className='ps-2'>
            {props.children}
            <button className="removeBtn" onClick={() => props.deleteKeyWord(props.children)}>
              <img src={removeIcon} alt="Remove Filter" />
            </button>
          </p>
        </>
      )}
    </Fragment>
  )
}
