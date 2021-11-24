// Abstracted equal sign to avoid editors re-writing template string as html with quotes.
import { EQ, INDENT, NEW_LINE } from "../support"
import { TypesTemplate } from "../types"

export const typesTemplate = ({
  defs,
  paramsLookup,
  resultLookup
}: TypesTemplate): string =>
  `
import Protocol from "devtools-protocol"

export type SessionID = Protocol.Target.SessionID
export type TargetID = Protocol.Target.TargetID
export type TargetInfo = Protocol.Target.TargetInfo
export type FrameId = Protocol.Page.FrameId
export type BrowserContextID = Protocol.Browser.BrowserContextID
export type VisualViewport = Protocol.Page.VisualViewport


export interface AuxData {
  isDefault: boolean
  type: string
  frameId: string
}

export type ExecutionContextDescription = Omit<Protocol.Runtime.ExecutionContextDescription, "auxData"> & {
  auxData: AuxData
}

export type ExecutionContextCreatedEvent = Protocol.Runtime.ExecutionContextCreatedEvent & {
  context: ExecutionContextDescription
}

${defs.join(NEW_LINE)}

export interface ParamsLookup {
  ${paramsLookup.join(`,` + INDENT)}
}

export interface ResultLookup {
  ${resultLookup.join(`,` + INDENT)}
}

export type Param = keyof ParamsLookup
export type Result = keyof ResultLookup


export interface RequestMessage<T extends Param ${EQ} Param>  {
  id: number
  sessionId: SessionID | undefined
  method: T
  params: ParamsLookup[T]
}

export interface ResponseMessage<T extends Result ${EQ} Result> {
  id: number
  sessionId: SessionID | undefined
  result: ResultLookup[T]
}

export interface EventMessage<T extends Param ${EQ} Param> {
  sessionId: SessionID | undefined
  method: T
  params: ParamsLookup[T]
}



`.trim()
