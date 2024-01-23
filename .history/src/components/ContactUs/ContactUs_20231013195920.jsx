
import "./ContactUs.css";
import { useForm } from "react-hook-form";
import { useLanguageContext } from '../../Contexts/LanguageContext';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




const ContactUs = () => {
  const { setLanguage, isEnglish } =
  useLanguageContext();

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (


<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=  {isEnglish ? "First name" : "الاسم الأول"}
            {...register("firstName")}
          />
        </div>
        <div className="col ">
          <input
            type="text"
            className="form-control image-border"
            placeholder=  {isEnglish ? "Last name" : "اسم العائلة"}
            {...register("lastName")}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=  {isEnglish ? "Mobile Number" : "رقم الهاتف المحمول"}
            {...register("mobile", {
              required: true,
              pattern: /^\d(?:[- ]*\d){9}$/,
            })}
          />
          {errors.mobile && errors.mobile.type === "required" && (
            <p className="errorMsg">Mobile is required.</p>
          )}
          {errors.mobile && errors.mobile.type === "pattern" && (
            <p className="errorMsg">Mobile is not valid.</p>
          )}
        </div>
        <div className="col">
          <input
            type="email"
            className="form-control image-border"
            placeholder=  {isEnglish ? "Email-address" : "البريد الإلكتروني"}
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
      </div>
      <div className="row mb-4">
        {/* <div className="col">
          <select
            {...register("service")}
            className="form-control form-select image-border"
            style={{ color: "#595C5F" }}
          >
            <option value="">  {isEnglish ? "Choose Service" : "اختر الخدمة"}</option>

            <option value="Property Insurance">
            {isEnglish ? "Property Insurance" : "تأمين الملكية "} 
            </option>
            <option value="Motor Insurance"> {isEnglish ? "Motor Insurance" : "تأمين السيارات"}</option>
            <option value="Medical Insurance"> {isEnglish ? "Medical Insurance" : "التأمين الطبي"}</option>
            <option value="Marine Insurance"> {isEnglish ? "Marine Insurance" : "التأمين البحري"}</option>
            <option value="Engineering Insurance"> {isEnglish ? "Engineering Insurance" : "التأمين الهندسي"}</option>
            <option value="Liability Insurance"> {isEnglish ? "Liability Insurance" : "تأمين المسؤولية"}</option>
            <option value="Life Insurance"> {isEnglish ? "Life Insurance" : "تأمين الحياة"}</option>
            <option value="Miscellaneous Insurance"> {isEnglish ? "Miscellaneous Insurance" : "تأمين متنوع"}</option>
          </select>
        </div> */}
        <div className="col">
          <textarea
            className="form-control image-border"
            placeholder= {isEnglish ? "Message" : "الرساله"}
            id="exampleFormControlTextarea1"
            rows={3}
            {...register("message")}
          ></textarea>
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn2">
        {isEnglish ? "Send Message" : "أرسل رسالة"} 
        </button>
      </div>
    </form>
  );
};



//     <div className="p-4" >
//       <div className="row">
//         <h1 className="text-center m-4" id="title4">Contact Us</h1>
//       </div>
//       <div>
        
//       <div className='d-flex flex-row m-4 '>
//     <div className='w-50'>
//     <p>

//       <h5 className='mt-5'>  <span> <GrMapLocation/></span><strong> Address:</strong></h5> 2 Hussien Afify-Makram Ebied Nasr City
//     </p>
//     <p>
      
//       <h5 className='mt-5'> <span><GrMailOption/></span> <strong>Email:</strong></h5>  <a href="Mahmoud@SolimanBrok.Com">Mahmoud@SolimanBrok.Com</a>
//      </p>
//     <p>
        
//      <h5 className='mt-5'> <span><FcPhone/></span><strong>Phone:</strong> </h5>01282153333-01226303959
//      </p>
//      </div>
//     <div >
//      <div className='location-img '>
//       <img src={location}  alt="logo"/>
//      </div>
//      </div>
//     {/* <p>
//        <strong>Website:</strong> <br/><a href="https://example.com">example.com</a>
//     </p> */}
    
//  </div>

//       </div>
  
//       </div>
      


//   )
// }

export default ContactUs;