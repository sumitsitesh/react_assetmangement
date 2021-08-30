import { render, screen } from '@testing-library/react';
import ErrorComponent from '../ErrorComponent';
const ChildComponent= () => {throw new Error()};


it('Should renders error message', () => {
  render(<ErrorComponent > <ChildComponent/></ErrorComponent>);
  const headingElement = screen.getByText(/No asset data found/i);
  expect(headingElement).toBeInTheDocument();
});

it('Should renders header text', () => {
    render(<ErrorComponent > <ChildComponent/></ErrorComponent>);
    const headingElement = screen.getByText(/No asset data found/i);
    expect(headingElement).toBeInTheDocument();
  });


