import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs;

export const ListItem = ({showToggle = false, primary, secondary, children}) => {
  return (
    <div className="pf-c-list__item">
      <div className="pf-c-list__header">
        <div className="pf-l-split">
          {showToggle && <div className="pf-l-split__secondary"><i className="fas fa-chevron-down"/></div>}
          <div className="pf-l-split__primary">{primary}</div>
          <div className="pf-l-split__secondary">{secondary}</div>
        </div>
      </div>
      {children && <div className="pf-c-list_body">{children}</div>}
    </div>
  )
};

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-list ${className}`}>
     {children}
    </div>
  )
};
