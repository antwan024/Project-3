import React from 'react'
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'Home', active: true, name: 'Home' },
  { key: 'Activity', name: 'Activity' },
  { key: 'LogIn', name: 'LogIn' },
]


const MenuExampleProps = () => <Menu items={items} />

export default MenuExampleProps