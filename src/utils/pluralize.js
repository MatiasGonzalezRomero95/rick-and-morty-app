export const pluralize = ({count, noun, suffix = 's'}) => `${noun}${count > 1 ? suffix : ''}`;

export const prefix = ({count, prefixOne, prefixTwo}) => count > 0 ? prefixOne : prefixTwo;