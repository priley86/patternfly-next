import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs;

export const ListItem = ({showToggle = false, isExpanded = false, primary, secondary, children}) => {
  return (
    <div className={`pf-c-list-item ${showToggle && 'pf-is-expanded'}`}>


      <div className="pf-c-list-item__header">


        <div className="pf-l-split">
          {showToggle && (
            <div className="pf-l-split__secondary">
              <button className="" aria-label="Chevron down">
                <i className={`fas ${!isExpanded && 'fa-chevron-right'} ${isExpanded && 'fa-chevron-down'}`}/>
              </button>
            </div>
          )}
          <div className="pf-l-split__primary">{primary}</div>
          <div className="pf-l-split__secondary">{secondary}</div>
        </div>
      </div>


      {children && isExpanded && <div className="pf-c-list-item__body">{children}</div>}
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
