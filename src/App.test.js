import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage title', () => {
  render(<App />);
  const titleElement = screen.getByText(/FichesNum/i);
  expect(titleElement).toBeInTheDocument();
});
