import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
    <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level'></div>
      </div>
    </div>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  
  .skill__bar {
    height: 10px;
    background-color: #A8D0E6;
    padding: 1px;
  }
  .skill__level {
    background-color: #374785;
       width: ${p => p.level || 0}%;
       height: 8px;
  }
`
