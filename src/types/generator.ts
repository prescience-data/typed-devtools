export interface MappedCommand {
  name: string
  params?: string[]
  returns?: string[]
  hasParams: boolean
  hasResult: boolean
}

export interface MappedEvent {
  name: string
  params?: string[]
  hasParams: boolean
}

export interface MappedDomain {
  domain: string
  commands: MappedCommand[]
  events: MappedEvent[]
  names: string[]
  methods: string[]
  defs: string
}
