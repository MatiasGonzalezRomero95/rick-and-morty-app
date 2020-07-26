import React from 'react';
import {render, screen} from '@testing-library/react';

import CharacterCard from './CharacterCard';

describe('Pagination', () => {
  test('renders Character Card component', () => {
    // prepare
    const fakedCharacter = fakeCharacter();

    // action
    render(<CharacterCard character={fakedCharacter}/>);

    // asserts
    const characterCardElement = screen.getByTestId('character-card');
    const characterNameElement = screen.getByRole('heading', { name: new RegExp(fakedCharacter.name, 'i')});
    const characterStatusName = screen.getByRole('button', { name: new RegExp(fakedCharacter.status, 'i')})
    expect(characterCardElement).toBeInTheDocument();
    expect(characterNameElement).toBeInTheDocument();
    expect(characterStatusName).toBeInTheDocument();
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
    },
    episode: [
      { name: 'Pilot' }
    ]
  }
);
