export interface JsonParams extends Record<string, unknown> {
  name: string
}

export interface JsonReturns extends Record<string, unknown> {
  name: string
}

export interface JsonCommand {
  name: string
  parameters?: JsonParams[]
  returns?: JsonReturns[]
}

export interface JsonEvent {
  name: string
  parameters?: JsonParams[]
}

export interface JsonDomain {
  domain: string
  commands: JsonCommand[]
  events: JsonEvent[]
}

export interface JsonProtocol {
  domains: JsonDomain[]
}
