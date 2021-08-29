import React, { useState,useEffect } from 'react';
import AssetData from '../MockData.json'
import ErrorComponent from './ErrorComponent';



const AssetTable = () => {
    const [assetList, setAssetList] = useState(AssetData)
    const [sortType, setSortType] = useState('assetClass');
    const [hasError, setHasError] = useState(true);
    const columns = AssetData[0] && Object.keys(AssetData[0])
  

    useEffect(() => {
        const sortArray = type => {
        try{
          const types = {
            assetClass: 'assetClass',
            price: 'price',
            ticker: 'ticker',
          };
          const sortedBy = {
            'Equities'  : 0, 
            'Macro'   : 1, 
            'Credit' : 2,
          }
          const sortProperty = types[type];
          let sorted = [...assetList].sort((a, b) => {
              if(type === 'price'){
                if (a[sortProperty] < b[sortProperty]) {
                    return 1;
                  }
                  else if (a[sortProperty] > b[sortProperty]) {
                    return -1;
                  } 
                  return 0;
              }if(type === 'ticker'){
                if (a[sortProperty] < b[sortProperty]) {
                    return -1;
                  }
                  else if (a[sortProperty] > b[sortProperty]) {
                    return 1;
                  } 
                  return 0;
              }if(type === 'assetClass'){
                 return sortedBy[a.assetClass] - sortedBy[b.assetClass]
              }return 0;
            
                // return a[sortProperty] - b[sortProperty] 
          });
          setAssetList(sorted);
        }catch{
          setHasError(true);
        }};
        sortArray(sortType);
      }, [sortType]);


    return (
        <div style={{ marginTop: "60px" }}>
{!hasError && (
  <div>
            <select placeholder="Select Options"onChange={(e) => setSortType(e.target.value)} style={{width:'300px',height: '40px',marginTop:'-20px',marginBottom:'5px',backgroundColor: 'aqua'}} >
                <option value="assetClass">Assetclass</option>
                <option value="price">Price</option>
                <option value="ticker">Ticker</option>
            </select>
            
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>{AssetData[0] && columns.map((head,index) => <th key={index}>{head.toUpperCase()}</th>)}</tr>
                </thead>
                <tbody>
                    {assetList.map((asset,index) => {
                    let priceColor = asset.price >0 ? '#5448e2' : 'red';
                    let assetColor = (asset.assetClass === 'Equities') ? '#5448e2' : (asset.assetClass === 'Credit') ?'Green' : 'white';
                    return <tr key={index}>
                        <td>{asset.ticker}</td>
                        <td style={{background:priceColor}}>{asset.price}</td>
                        <td style={{background:assetColor}}>{asset.assetClass}</td>
                        {/* {columns.map(column => <td style={{background:priceColor}}>{row[column]}</td>)} */}
                    </tr>}
                    )}

                </tbody>
            </table> 
            
            </div>)}
            {hasError && <ErrorComponent></ErrorComponent>}
           
        </div>
    );
}

export default AssetTable;