import assert from 'assert';
import { sortArray } from '../SortUtil';

const assetdata = 
[{
  "ticker": "ALPHA",
  "price": 3150.67,
  "assetClass": "Credit"
},
{
  "ticker": "BETA",
  "price": 3791.37,
  "assetClass": "Equities"
},
{
  "ticker": "GAMMA",
  "price": 2299.1,
  "assetClass": "Equities"
}]

const assetsorteddata = 
[{
    "ticker": "BETA",
    "price": 3791.37,
    "assetClass": "Equities"
  },
  {
  "ticker": "ALPHA",
  "price": 3150.67,
  "assetClass": "Credit"
},

{
  "ticker": "GAMMA",
  "price": 2299.1,
  "assetClass": "Equities"
}]


describe('unit testing for asset table',()=>{


    it('Should return false for empty asset list', async () => {
       const result = sortArray()
        expect(result).toBe(false)
       
      });

      it('Should return sorted array based on asset type', async () => {
        const result = sortArray('price',assetdata)
        //  expect(result).toBe(false)
        expect(
            result
        ).toEqual(
            assetsorteddata
        );
        
        
       });

    })