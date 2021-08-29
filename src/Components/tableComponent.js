import React, { useState, useEffect, Fragment } from 'react';
import AssetData from '../MockData.json'
import ErrorComponent from './ErrorComponent';

const types = {
  assetClass: 'assetClass',
  price: 'price',
  ticker: 'ticker',
};
const sortedBy = {
  'Equities': 0,
  'Macro': 1,
  'Credit': 2,
}

const AssetTable = () => {
  const [assetList, setAssetList] = useState(AssetData)
  const [sortType, setSortType] = useState('assetClass');
  const [hasError, setHasError] = useState(false);
  const columns = AssetData[0] && Object.keys(AssetData[0])

  const sortArray = type => {
    try {

      const sortProperty = types[type];
      let sorted = [...assetList].sort((a, b) => {
        if (type === 'price') {
          if (a[sortProperty] < b[sortProperty]) {
            return 1;
          }
          else if (a[sortProperty] > b[sortProperty]) {
            return -1;
          }
          return 0;
        } if (type === 'ticker') {
          if (a[sortProperty] < b[sortProperty]) {
            return -1;
          }
          else if (a[sortProperty] > b[sortProperty]) {
            return 1;
          }
          return 0;
        } if (type === 'assetClass') {
          return sortedBy[a.assetClass] - sortedBy[b.assetClass]
        } return 0;
      });
      setAssetList(sorted);
    } catch {
      setHasError(true);
    }
  };

  useEffect(() => {
    sortArray(sortType);
  }, [sortType]);


  return (
    <div style={{ marginTop: "60px" }}>
      {!hasError && (
        <div className="assetSel">
          <Fragment >

            <h2 className='child'> Assets Sorted By:</h2>

            <div className='child'>
              <select placeholder="Select Options" onChange={(e) => setSortType(e.target.value)} style={{ width: '300px', height: '40px', marginTop: '-20px', marginBottom: '5px', backgroundColor: '#112d64', color: 'white',fontSize: 'calc(1px + 2vmin)'}} >
                <option value="assetClass">Assetclass</option>
                <option value="price">Price</option>
                <option value="ticker">Ticker</option>
              </select>
            </div>
          </Fragment>

          <table className='assets'>
            <thead >
              <tr>{AssetData[0] && columns.map((head, index) => <th key={index}>{head.toUpperCase()}</th>)}</tr>
            </thead>
            <tbody >
              {assetList.map((asset, index) => {
                let priceColor = asset.price > 0 ? '#5448e2' : 'red';
                let assetColor = (asset.assetClass === 'Equities') ? '#5448e2' : (asset.assetClass === 'Credit') ? 'Green' : 'white';
                return <tr key={index}>
                  <td>{asset.ticker}</td>
                  <td style={{ background: priceColor }}>{asset.price}</td>
                  <td style={{ background: assetColor }}>{asset.assetClass}</td>
                </tr>
              }
              )}

            </tbody>
          </table>

        </div>)}
      {hasError && <ErrorComponent></ErrorComponent>}

    </div>
  );
}

export default AssetTable;