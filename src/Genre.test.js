import { screen, render } from '@testing-library/react'
import Genre from './Genre';

describe(Genre.name, () => {
    it('renders nothing without `id`', () => {
        // const { container } = render(<Genre />);
        // expect(container.firstChild).toBeNull();
        // screen.debug();
        render(<Genre />);
        expect(screen.queryByTestId("genre")).not.toBeInTheDocument();
    });

    it('renders nothing without `id`', () => {
        // const { container } = render(<Genre />);
        // expect(container.firstChild).toBeNull();
        // screen.debug();
        render(<Genre id="123456789"/>);
        expect(screen.queryByTestId("genre")).not.toBeInTheDocument();
    });

    it('renders nothing without `id`', () => {
        // const { container } = render(<Genre />);
        // expect(container.firstChild).toBeNull();
        // screen.debug();
        render(<Genre id="53"/>);
        expect(screen.getByText("Science Fiction")).toBeInTheDocument();
    });
});