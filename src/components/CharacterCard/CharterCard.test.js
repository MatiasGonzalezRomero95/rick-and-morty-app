import React from 'react';
import {render, screen} from '@testing-library/react';

import CharacterCard from './CharacterCard';

describe('Pagination', () => {
  test('renders Character Card component', () => {
    render(<CharacterCard character={fakeCharacter()}/>);

    const characterCardElement = screen.getByTestId('character-card');

    expect(characterCardElement).toBeInTheDocument();
  });
});

const fakeCharacter = () => (
  {
    name: 'Rick Sanchez',
    gender: 'Male',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {
      name: 'Earth (Replacement Dimension)'
    },
    origin: {
      name: 'Earth (C-137) '
    }
  }
);
