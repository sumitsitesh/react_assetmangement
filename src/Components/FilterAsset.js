import React,{Fragment} from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'assetClass', value: 'assetClass' },
  { key: 2, text: 'price', value: 'price' },
  { key: 3, text: 'ticker', value: 'ticker' },
]

const assetClass = [
    { key: 1, text: 'equity', value: 'equity' },
    { key: 2, text: 'macro', value: 'macro' },
    { key: 3, text: 'credit', value: 'credit' },
  ]

const FilterAsset = () => (
    <Fragment style={{marginTop: "-120px"}}>
  <Dropdown clearable options={options} selection />
  {/* <Dropdown clearable options={assetClass} selection /> */}
  </Fragment>
)

export default FilterAsset