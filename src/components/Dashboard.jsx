import { WiredCard } from 'wired-elements-react'

import './Dashboard.css'

export default function Dashboard(props) {
  return <WiredCard className='Dashboard' elevation={3}>
    <h1>Hello {props.name}!</h1>
    {props.children}
  </WiredCard>;
}