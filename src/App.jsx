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

import { supabase } from '../utils/supabase'

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
        element:<OnBoarding/>
      },
      {
        path:"/joblisting",
        element:<JobListing/>
      },
      {
        path:"/jobspage",
        element:<JobsPage/>
      },
      {
        path:"/jobpage/:id",
        element:<JobPage/>
      },
      {
        path:"/postjob",
        element:<PostJob/>
      },
      {
        path:"/savejobs",
        element:<SaveJobs/>
      },
      {
        path:"/myjobs",
        element:<MyJob/>
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
