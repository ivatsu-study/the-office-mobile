import { CHARACTERS, CREW, EPISODES, QUOTES } from './url';

export const fetchCharacters = () => fetch(CHARACTERS).then((res) => res.json());
export const fetchCrew = () => fetch(CREW).then((res) => res.json());
export const fetchEpisodes = () => fetch(EPISODES).then((res) => res.json());
export const fetchQuotes = () => fetch(QUOTES).then((res) => res.json());
