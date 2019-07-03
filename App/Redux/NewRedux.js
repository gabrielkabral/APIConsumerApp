// @flow
// noinspection ES6CheckImport
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Tipos e Criadores de ações ------------- */

const { Types, Creators } = createActions({
  newRequest: null,
  newSuccess: ['dados'],
  newFailure: null
})

export const NewTypes = Types
export default Creators

/* ------------- Tipos Flow ------------- */

export type NewState = Immutable<{
  carregando: ?boolean,
  erro: ?boolean,
  compartilhar: ?boolean,
  dados: any
}>

/* ------------- Estado Inicial ------------- */

export const INITIAL_STATE = Immutable({
  carregando: null,
  erro: null,
  compartilhar: null,
  dados: {}
})

/* ------------- Redutores ------------- */

export const request = (state: NewState) => state.merge({ carregando: true })

export const success = (state: NewState, { dados }: { dados: any }) =>
  state.merge({ carregando: false, erro: null, dados })

export const failure = (state: NewState) => state.merge({ carregando: false, erro: true })

/* ------------- Conectar redutores aos tipos ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NEW_REQUEST]: request,
  [Types.NEW_SUCCESS]: success,
  [Types.NEW_FAILURE]: failure
})
