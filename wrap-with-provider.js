import React from "react"
import store from "app/store"
import { Provider } from "react-redux"
import { TinaProvider, TinaCMS } from "tinacms"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  const cms = new TinaCMS({
    sidebar: true,
  })
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <Provider store={store}>
      <TinaProvider cms={cms}>{element}</TinaProvider>
    </Provider>
  )
}
