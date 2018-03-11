/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = (state) => state.get('global')

const selectRoute = (state) => state.get('route')

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
)

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
)

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
)

const makeSelectSuccess = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('success')
)

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
)

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
)

const updateHeaderTitle = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('title')
)

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccess,
  makeSelectRepos,
  makeSelectLocation,
  updateHeaderTitle,
}