import { render, screen } from '@testing-library/react';
import ErrorComponent from '../ErrorComponent';

it('Should renders header text', () => {
  render(<ErrorComponent />);
  const headingElement = screen.getByText(/No asset data found/i);
  expect(headingElement).toBeInTheDocument();
});
it('Should renders heading', () => {
    render(<ErrorComponent />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
