import React, { useState,useEffect } from 'react';

// import FilterAsset from './FilterAsset';
import AssetData from '../MockData.json'



const AssetTable = () => {
    const [assetList, setAssetList] = useState(AssetData)
    const [sortType, setSortType] = useState('assetClass');
    const columns = AssetData[0] && Object.keys(AssetData[0])
  




    useEffect(() => {
        const sortArray = type => {
            console.log(type)
          const types = {
            assetClass: 'assetClass',
            price: 'price',
            ticker: 'ticker',
          };
          const sortProperty = types[type];
          console.log("sort by property::::",sortProperty);
          const sorted = [...assetList].sort((a, b) => {
                return a[sortProperty] - b[sortProperty] 
          });
          console.log("sorted field....",sorted);
          setAssetList(sorted);
        };
    
        sortArray(sortType);
      }, [sortType]);


    return (
        <div style={{ marginTop: "60px" }}>

            <select onChange={(e) => setSortType(e.target.value)}>
                <option value="assetClass">Assetclass</option>
                <option value="price">Price</option>
                <option value="ticker">Ticker</option>
            </select>
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr >{AssetData[0] && columns.map(head => <th>{head.toUpperCase()}</th>)}</tr>
                </thead>
                <tbody>
                    {assetList.map(asset => {
                    let priceColor = asset.price >0 ? '#5448e2' : 'red';
                    let assetColor = (asset.assetClass === 'Equities') ? '#5448e2' : (asset.assetClass === 'Credit') ?'Green' : 'white';
                    return <tr>
                        <td>{asset.ticker}</td>
                        <td style={{background:priceColor}}>{asset.price}</td>
                        <td style={{background:assetColor}}>{asset.assetClass}</td>
                        {/* {columns.map(column => <td style={{background:priceColor}}>{row[column]}</td>)} */}
                    </tr>}
                    )}

                </tbody>
            </table>
        </div>
    );
}

export default AssetTable;