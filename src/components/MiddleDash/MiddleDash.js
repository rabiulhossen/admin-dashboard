import React from 'react'
import Card from '../Card/Card'
import Cards from '../cARDS/Cards'
import BasicTable from '../Table/Table'

import './MiddleDash.css'

export default function MiddleDash() {
  return (
   <div className="middleDash"><h1>Dashboard</h1>
   <Cards />
   <BasicTable />
   </div>
  )
}
