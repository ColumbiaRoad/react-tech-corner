/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import Quote from '../components/Quote';
import Header from '../components/Header';

storiesOf('Welcome', module)
  .add('to Storybook', () =>
    <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      Hello Hot Reload!
    </Button>))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Semantic UI', module)
  .add('Quote component', () =>
    <Quote text="We can import our components and hot reload them!" />);

storiesOf('Futu Family', module)
  .add('Header banner', () => <Header />);
