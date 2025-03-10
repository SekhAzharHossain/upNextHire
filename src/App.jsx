import {Button} from "./components/ui/button"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./pages/LandingPage"
import OnBoarding from "./pages/OnBoarding"
import JobPage from "./pages/JobPage"
import JobsPage from "./pages/JobsPage"
import PostJob from "./pages/PostJob"
import SaveJobs from "./pages/SaveJobs"
import MyJob from "./pages/MyJob"
import JobListing from "./pages/JobListing"
import ProtectedRoute from "./components/protectedRoute"

import { ThemeProvider } from "./components/theme-provider"

const router= createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>,
      },
      {
        path:"/onboarding",
        element:
        <ProtectedRoute>
          <OnBoarding/>
        </ProtectedRoute>
      },
      {
        path:"/joblisting",
        element:<ProtectedRoute><JobListing/></ProtectedRoute>
      },
      {
        path:"/jobspage",
        element:<ProtectedRoute><JobsPage/></ProtectedRoute>
      },
      {
        path:"/jobpage/:id",
        element:<ProtectedRoute><JobPage/></ProtectedRoute>
      },
      {
        path:"/postjob",
        element:<ProtectedRoute><PostJob/></ProtectedRoute>
      },
      {
        path:"/savejobs",
        element:<ProtectedRoute><SaveJobs/></ProtectedRoute>
      },
      {
        path:"/myjobs",
        element:<ProtectedRoute><MyJob/></ProtectedRoute>
      }


    ]
  }
])

function App() {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
  </ThemeProvider>
}

export default App
