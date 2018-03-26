import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Listitem, {Docs} from '@components/Listitem'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Listitem Example">
        <Listitem>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Listitem>
      </Example>
    </Documentation>
  )
}
