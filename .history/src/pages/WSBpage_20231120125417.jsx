import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import WhySoliman from '../components/WhoWeAre/WhySoliman'
import Doctor from '../components/WhoWeAre/Doctor'
import DoctorCards from '../components/WhoWeAre/DoctorCards'
import Present from '../components/Present/Present'

const WSBpage = () => {
  return (
    <div>

<WhySoliman/>
<Present/>

<Doctor/>
<DoctorCards/>
<Footer/>
    </div>
  )
}

export default WSBpage