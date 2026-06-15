import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial loading state', () => {
  render(<App />);
  const linkElement = screen.getByText(/Carregando/i);
  expect(linkElement).toBeInTheDocument();
});
