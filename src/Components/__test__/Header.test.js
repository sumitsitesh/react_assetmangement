import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should renders header text', () => {
  render(<Header />);
  const headingElement = screen.getByText(/FINANCIAL INSTRUMENTS/i);
  expect(headingElement).toBeInTheDocument();
});
it('Should renders header text', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
