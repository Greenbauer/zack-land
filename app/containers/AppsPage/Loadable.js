/**
 * Asynchronously loads the component for AppsPage
 */

import React from 'react'
import loadable from 'utils/loadable'
import Spinner from 'components/Spinner'

export default loadable(() => import('./index'), {
  fallback: <Spinner />,
})
