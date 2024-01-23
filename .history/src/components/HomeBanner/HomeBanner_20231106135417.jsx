import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Banner from "./../../assets/images/background-banner1.jpeg";
import Banner1 from "./../../assets/images/background-banner2.jpg";
import Banner2 from "./../../assets/images/camera3.jpg";
import { useForm } from "react-hook-form";
import "./HomeBanner.css";
import { useLanguageContext } from '../../Contexts/LanguageContext';
const HomeBanner = () => {
    const { setLanguage, isEnglish } =
    useLanguageContext();
    const form = useRef();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
  
  
    
    emailjs.sendForm('service_ygoe0z9', 'template_e9z2uxf', form.current, 'nacxQawaWpJvSBSzE')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
  
      });
      alert("MESSAGE SENT SUCCESSFULLY");
    }
  return (
    <>
     <div id="carouselExampleIndicators" className="carousel slide  ">
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active " style={{ backgroundImage:  `url(${Banner})`,
        height:'90vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>

      <div className="carousel-caption "id='caption'>
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item  " style={{ backgroundImage:  `url(${Banner1})`,
        height:'90vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
     
    </div>
    <div className="carousel-item" style={{ backgroundImage:  `url(${Banner})`,
        height:'90vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>



</div>

<div className="row ">
        <div className="col p-4 m-4 d-flex" style={{ alignSelf: "center" }}>
          <div className="container p-4  bgcolor rounded">
            <h3 className="text-center mt-4 ">   {isEnglish ? "Ask For Motor Quotation" : " اسأل عن تأمين سيارتك"}</h3>
            <p className="text-center ">
            {isEnglish ? "personal info" : " البيانات الشخصيه"}
            </p>
<form className="mt-4" ref={form} onSubmit={handleSubmit(onSubmit)}>

      <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=   {isEnglish ? "Name" : " --الاْسم--"}
            {...register("firstName")}
          />
        </div>
        <div className="col">
          
          <input
            type="text"
            className="form-control  image-border"
            placeholder=   {isEnglish ? "Mobile no." : " --رقم الهاتف--"}
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
      </div>
      <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=   {isEnglish ? "Date of Birth" : " --تاريخ الميلاد--"}
            {...register("firstName")}
          />
        </div>
        <div className="col">
        <input
            type="email"
            className="form-control image-border"
            placeholder= {isEnglish ? "Email-address" : --"البريد الإلكتروني--"}
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
      
 
    <p className='text-center'>   {isEnglish ? "Viechle info" : " بيانات السيارة"}</p>
    <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=   {isEnglish ? "Manufacture" : " --نوع السياره--"}
            {...register("firstName")}
          />
        </div>
        </div>
        <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=   {isEnglish ? "Version" : " --الموديل--"}
            {...register("firstName")}
          />
        </div>
        </div>
        <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=   {isEnglish ? "Year of Manufacture" : " --سنة الصنع--"}
            {...register("firstName")}
          />
        </div>
        </div>
        <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder=   {isEnglish ? "Market Value" : " --القيمه السوقيه--"}
            {...register("firstName")}
          />
        </div>
        </div>
        
    </form>
    </div>
    
    <div className="container p-4  bgcolor rounded mx-4">
            <h3 className="text-center mt-4 ">Send us a message</h3>
            <p className="text-center ">
              Get in Touch for any Type of insurance Services.
            </p>
<form className="m-4 " onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="row mb-4">
        <div className="col ">
          <input
            type="text"
            className="form-control  image-border"
            placeholder="First name"
            {...register("firstName")}
          />
        </div>
 
      </div> */}
      <div className="row mb-4">
        <div className="col">
          <input
            type="text"
            className="form-control  image-border"
            placeholder={isEnglish ? "Mobile no." : " --رقم الهاتف--"}
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
       
      </div>
      {/* <div className="row mb-4"> */}
        <div className="col">
        <input
            type="email"
            className="form-control image-border"
            placeholder={isEnglish ? "Email-address" : --"البريد الإلكتروني--"}
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
        <div className="col mt-4">
          <textarea
            className="form-control image-border"
            placeholder="Message"
            id="exampleFormControlTextarea1"
            rows={3}
            {...register("message")}
          ></textarea>
        {/* </div> */}
      </div>
      <div className="text-center ">
        <button type="submit" className="btn2">
          Send Message
        </button>
      </div>
    </form>
    </div>
    
    </div>
    
    </div>
  </>
  )
}

export default HomeBanner;