/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../Loader';
import { toRGB } from '@test/utils';

import '../styles/index.less';

describe('Loader styles', () => {
  it('Should render correct toggle styles', () => {
    render(<Loader />);
    const loader = screen.getByRole('progressbar');
    const loaderSpinner = loader.querySelector('.rs-loader-spin');

    expect(loader).to.have.style('height', '18px');
    expect(window.getComputedStyle(loaderSpinner as HTMLElement, ':after').borderColor).to.equal(
      `${toRGB('#a6a6a6')} ${toRGB('#0000')} ${toRGB('#0000')}`
    );
  });
});
