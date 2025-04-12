import React from 'react';

// css 
import '../assets/css/Client_Slider.css'

//became partner images
import p1 from "../assets/images/p1.jpeg"
import p2 from "../assets/images/p2.png"
import p3 from "../assets/images/p3.png"
import p4 from "../assets/images/p4.png"


function Client_Slider() {
  return (
    <div>
       {/* client slider  */}
       <div className="row" data-aos="fade-up">
          <div className="heading-format col-lg-12">
            <h6>BUSINESS ASSOCIATES</h6>
          <h1>
            Authorised Business <br /> Associates
          </h1>
            <div className="line"></div>
          </div>
        </div>

        <div class="slider">
            <div class="bd-best" data-aos="fade-up">
                <div class="bd-best-list">
                  <figure class="bd-best-item" >
                    <img class="kl_img" src={p1} alt=""/>
                  </figure>
                  <figure class="bd-best-item">
                    <img class="kl_img" src={p2} alt=""/>
                  </figure>
                  <figure class="bd-best-item" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img class="kl_img" src={p3} alt="" style={{width:'85%' , height:'85%'}}/>
                  </figure>
                  <figure class="bd-best-item" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img class="kl_img" src={p4} alt="" style={{width:'85%' , height:'85%'}}/>
                  </figure>
                  <figure class="bd-best-item" >
                    <img class="kl_img" src={p1} alt=""/>
                  </figure>
                  <figure class="bd-best-item">
                    <img class="kl_img" src={p2} alt=""/>
                  </figure>
                  <figure class="bd-best-item P-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img class="kl_img" src={p3} alt=""  style={{width:'85%' , height:'85%'}}/>
                  </figure>
                  <figure class="bd-best-item" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img class="kl_img" src={p4} alt="" style={{width:'85%' , height:'85%'}}/>
                  </figure>
                  <figure class="bd-best-item" >
                    <img class="kl_img" src={p1} alt=""/>
                  </figure>
                  <figure class="bd-best-item">
                    <img class="kl_img" src={p2} alt=""/>
                  </figure>
                  <figure class="bd-best-item P-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img class="kl_img" src={p3} alt=""  style={{width:'85%' , height:'85%'}}/>
                  </figure>
                  <figure class="bd-best-item" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img class="kl_img" src={p4} alt="" style={{width:'85%' , height:'85%'}}/>
                  </figure>
                  <figure class="bd-best-item" >
                    <img class="kl_img" src={p1} alt=""/>
                  </figure>
                  <figure class="bd-best-item">
                    <img class="kl_img" src={p2} alt=""/>
                  </figure>
                  <figure class="bd-best-item P-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img class="kl_img" src={p3} alt=""  style={{width:'85%' , height:'85%'}}/>
                  </figure>
                  <figure class="bd-best-item" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img class="kl_img" src={p4} alt="" style={{width:'85%' , height:'85%'}}/>
                  </figure>
                 
                 
                 
                           
                </div>
           </div>
        </div>
        {/* client slider  */}
    </div>
  );
}

export default Client_Slider;
