import React from 'react'
import './Brand.css'
import {
  google, slack, shopify, atlassian,dropbox} from './imports'
function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt=""/>
      </div>
      <div>
  <img src={slack} alt="" />
</div>
<div>
  <img src={shopify} alt="" />
</div>
<div>
  <img src={atlassian} alt="" />
</div>
<div>
  <img src={dropbox} alt="" />
</div>

    </div>
    
  )
}

export default Brand
