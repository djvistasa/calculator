import { render } from '@testing-library/react-native';
import React from 'react';
import Calculator from '.';

test('does component render', () => {
  const tree = render(<Calculator />);
  tree;
});
