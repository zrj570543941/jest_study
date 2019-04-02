import React from 'react';
import Link from '../comps/Link';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Link />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
