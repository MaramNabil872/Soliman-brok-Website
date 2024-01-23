import React from 'react'
import Medical from '../components/Present/Medical'
import Footer from '../components/Footer/Footer'
import Doctor from '../components/WhoWeAre/Doctor'
import DoctorCards from '../components/WhoWeAre/DoctorCards'

const MedicalPage = () => {
  return (
    <div>
        <Medical/>
        <Doctor/>
<DoctorCards/>

        <Footer/>
    </div>
  )
}

export default MedicalPage