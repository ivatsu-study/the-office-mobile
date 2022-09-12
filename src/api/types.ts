export interface ICharacter {
  _id: string
  firstname: string
  lastname: string
}

export interface ICrewMember {
  _id: string
  name: string
  role: string
}

interface IDirector {
  _id: string
  name: string
  role: string
}

interface IWriter {
  _id: string
  name: string
  role: string
}

export interface IEpisode {
  _id: string
  airDate: string
  description: string
  director: IDirector
  title: string
  writer: IWriter
}

export interface IQuote {
  _id: string
  character: ICharacter
  content: string
}
