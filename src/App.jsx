import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import HomePage from "./pages/HomePage";
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage ,{jobLoader} from './pages/Jobpage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';




const App = () => {


  // Add New Jon
  const addJob = async(newJob)=>{
    const res = await fetch ('/api/jobs' , {
      method:'POST',
      headers :{
      'Content-Type' : 'applocation.json'
    },
  body : JSON.stringify(newJob),
  });
    return;
  };

  // Add Delete Job
   const deleteJob = async(id) =>{
    const res = await fetch (`/api/jobs/${id}`, {
      method:'DELETE',
      
    });
    return;
   };

  //  update Job
  const updateJob = async(job)=>{
    const res = await fetch (`/api/jobs/${job.id}` , {
      method:'PUT',
      headers :{
      'Content-Type' : 'applocation.json'
    },
  body : JSON.stringify(job),
  });
    return;
  };


  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage AddJobSubmit={addJob} />} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} 
      loader= {jobLoader} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader= {jobLoader} />
      <Route path='/*' element={<NotFoundPage />} />
  
    </Route>
  )
  );
  return <RouterProvider router={router} />
  //  <>
  //  <Navbar />
  //  <Hero  />
  //  <HomeCards  />
  //  <JobListings />
  //  <ViewAllJobs />
  //  </>

};

export default App

