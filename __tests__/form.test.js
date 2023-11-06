import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import ReservationForm from '@/app/components/ReservationForm';
import Reservations from '@/app/reservations/page';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Reservations form', () => {
  it('successfully renders on screen', () => {
    render(<Reservations />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('Form wont submit if fields are empty', () => {
    render(<ReservationForm />);
    const submitButton = screen.getByText('Reserve');

    act(() => {
      fireEvent.click(submitButton);
    });

    waitFor(() => {
      const nameInput = screen.getByLabelText('Name');
      expect(nameInput).toBeInvalid();
    });
  });
});
