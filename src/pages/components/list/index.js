import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import List, {Docs} from '@components/List'
import ListItem from '@components/ListItem'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="List Example">
        <List>
          <ListItem>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
        </List>
      </Example>
    </Documentation>
  )
}
