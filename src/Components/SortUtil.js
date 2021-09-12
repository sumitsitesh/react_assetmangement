


const sortedBy = {
    'Equities': 0,
    'Macro': 1,
    'Credit': 2,
  }

const types = {
    assetClass: 'assetClass',
    price: 'price',
    ticker: 'ticker',
  };

export  const sortArray = (type,assetList) => {

    if(!assetList || !assetList.length) return false
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
      return sorted
    //   setAssetList(sorted); //setting state post select option
    } catch {
        return false
    //   setHasError(true);
    }
  };