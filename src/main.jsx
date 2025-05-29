import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import './index.css'
import {App} from './App.jsx'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import {NotFound} from './pages/not-found'
import { CreateEvent } from './pages/create-event'
import { MyProvider } from './context/user'
import { MyEvents } from './pages/my-events'
import { ApprovedEvent } from './pages/approved-events'
import { DataProvider } from './context/event-data'
import { AllEvents } from './pages/admin/all-events'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/admin/all-events' element={<AllEvents/>}></Route>
      <Route path='/' element={<App />}/>
    <Route path='login' element={<LoginPage/>}/>
    <Route path='signup' element={<SignupPage/>} />
    <Route path='/create-event' element={<CreateEvent/>}/>
    <Route path='/approved-events' element={<ApprovedEvent/>}></Route>
    {/* <Route path='/my-events' element={<MyEvents/>}/> */}
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </DataProvider> 
    </MyProvider>
  </StrictMode>
)
