import { render } from '@testing-library/react';
import React from 'react';
import App from '~/App';

test('default test', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Hello, world!/i);

	expect(linkElement).toBeInTheDocument();
});
