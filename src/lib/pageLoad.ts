
import { writable } from 'svelte/store';

// eslint-disable-next-line import/prefer-default-export
export const transitionOver = writable(false);
export const currentCardState = writable('ABOUT');
