import { render, screen ,fireEvent} from '@testing-library/react';
import AssetTable from '../AssetTable';
const mockedsetSortType = jest.fn()
jest.mock('../../MockData.json', () => ([1, 2, 3]));

describe('unit testing for asset table',()=>{


it('Should renders dropdown element', async () => {
    render(<AssetTable 
      sortType = {[]}
      setSortType = {mockedsetSortType}
    />);
    const dropdownElement = screen.getByPlaceholderText(/Select Options/i);
    expect(dropdownElement).toBeInTheDocument();
  });

  it('Should be able to select assetClass from dropdown', async () => {
    render(<AssetTable 
      sortType = {[]}
      setSortType = {mockedsetSortType}
    />);
    const dropdownElement = screen.getByPlaceholderText(/Select Options/i);
    fireEvent.change(dropdownElement,{target:{value:"assetClass"}})
    expect(dropdownElement.value).toBe("assetClass");
  });
  it('Should be able to select price from dropdown', async () => {
    render(<AssetTable 
      sortType = {[]}
      setSortType = {mockedsetSortType}
    />);
    const dropdownElement = screen.getByPlaceholderText(/Select Options/i);
    fireEvent.change(dropdownElement,{target:{value:"price"}})
    expect(dropdownElement.value).toBe("price");
  });
  it('Should be able to select ticker from dropdown', async () => {
    render(<AssetTable 
      sortType = {[]}
      setSortType = {mockedsetSortType}
    />);
    const dropdownElement = screen.getByPlaceholderText(/Select Options/i);
    fireEvent.change(dropdownElement,{target:{value:"ticker"}})
    expect(dropdownElement.value).toBe("ticker");
  });

  it('Should renders table element', () => {
    render(<AssetTable />);
    const tableElement = screen.getByTestId('table-element');
    expect(tableElement).toBeInTheDocument();
  });
  
});
