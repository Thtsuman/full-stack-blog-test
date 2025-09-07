import { AppWrapper, Navbar } from "./components"
import { createClassNames } from "./tool"


const App = () => {
  return (
    <AppWrapper>
      <div className={
        createClassNames("px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64")
      }>
        {/* navbar */}
        <Navbar />
        {/* breadcrumbs */}
        {/* introduction */}
        {/* feature posts */}
        {/* posts list */}
      </div>
    </AppWrapper>
  )
}

export default App