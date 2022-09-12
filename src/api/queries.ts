import { ICharacter, ICrewMember, IEpisode, IQuote } from './types'
import { CHARACTERS, CREW, EPISODES, QUOTES } from './url'

async function request<T> (url: string): Promise<T> {
  const response = await fetch(url)
  const { data } = await response.json()
  return data
}

export async function fetchCharacters (): Promise<ICharacter[]> {
  return await request(CHARACTERS)
}

export async function fetchCrew (): Promise<ICrewMember[]> {
  return await request(CREW)
}

export async function fetchEpisodes (): Promise<IEpisode[]> {
  return await request(EPISODES)
}

export async function fetchQuotes (): Promise<IQuote[]> {
  return await request(QUOTES)
}
