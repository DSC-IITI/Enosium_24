import React from 'react';
import './Sponsor.css';

export default  function Sponsor() {
    return (
        <>
        <div id="sponsor" class="brand-area padding-top-110 padding-bottom-90">
        <div class="container">
            <div class="row justify-content-center margin-bottom-20">
                <div class="col-lg-6 wow fadeInUp">
                    <div class="common-title text-center">
                        <h5>sponsor</h5>
                        <h2 style={{color:'turquoise'}}>meet our <span>sponsors</span></h2>
                        <p class="margin-top-20">
                            Our plethora of amazing sponsors stand out splendidly with their full and invaluable
                            support.
                        </p>
                    </div>
                </div>
            </div>
            <h3 class="text-align:left" style={{color:'turquoise'}}>Title Sponsor</h3>
            <div class="row justify-content-center ">
                
                
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".2s">
                        <div class="single-brand icon idiv iscard">
                            <a href="https://www.chisquarex.com"><img className='img2'  src="assets/img/logo/chi.jpeg" alt="" /></a>
                            <br /><p >Chi SquareX</p>
                        </div>
                    </div>
        

            </div>
            <h3 class="text-align:left" style={{color:'turquoise'}}>Platinum</h3>
            <div class="row  justify-content-center">
                
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".2s">
                    <div  class="single-brand icon idiv iscard">
                        <img className='img2 '  src="assets/img/logo/snt.png" alt="" />
                        <hr />
                        <p>Science and Technology Council, IIT Indore</p>
                    </div>
                    
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn i1div" data-wow-delay=".4s">
                <div  class="single-brand icon idiv iscard">
                        <img className='img2 '  src="assets/img/logo/gymkhana.jpg" alt="" />
                        <hr />
                        <p>Students Gymkhana, IIT Indore</p>
                    </div>
                </div>
            </div>
            <div hidden class="row justify-content-center">
                <h3>Silver</h3>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".2s">
                    <div class="single-brand icon">
                        <a target="_blank" href="https://tezos.com/"><img src="assets/img/sponsors/tezos1.png" alt=""  className='img1'/></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".4s">
                    <div class="single-brand icon">
                        <a target="_blank" href="https://www.dozee.health/"><img src="assets/img/sponsors/dozee1.png" alt="" className='img1' /></a>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".4s">
                    <div class="single-brand icon">
                        <a target="_blank" href="https://filecoin.io/"><img src="assets/img/sponsors/filecoin1.png" alt="" className='img1' /></a>
                       
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".4s">
                    <div class="single-brand icon">
                        <a target="_blank" href="https://celo.org/"><img src="assets/img/sponsors/celo1.png" alt=""  className="img1"/></a>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="speaker" class="speaker-area padding-top-110 padding-bottom-120">
    <div class="spe-shapes">
        <img src="assets/img/shape/e_vec5.png" alt="" class="vec_1" />
        <img src="assets/img/shape/vec_1.png" alt="" class="vec_2 item-rotate" />
        <img src="assets/img/shape/e_vec9.png" alt="" class="vec_3 d-none d-md-block" />
    </div>
    <div class="container">
        <div class="row justify-content-center margin-bottom-20">
            <div class="col-lg-6">
                <div class="common-title text-center">
                    <h5>Community Partners</h5>
                    <h2 style={{color:'turquoise'}}>meet our <span>Community Partners</span></h2>
                    <p class="margin-top-20">
                        We are elated to present to you our supportive team of our amazing community partners, who stand by us to further transcend our team.
                    </p>
                </div>
            </div>
        </div>

        <div class="row justify-content-center is">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".4s">
                <div class="single-brand isdivide">
                    <a href="https://fluxus.co.in/"><img className='isimage' src="assets/img/speaker/fluxus.jpeg" alt="" /></a>
                </div>
            </div> 
                     
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".4s">
                <div  class="single-brand isdivide">
                   <a href="https://unstop.com/hackathon/enosium-indian-institute-of-technology-iit-indore-576408"> <img className='isimage' src="assets/img/speaker/ingenium.jpeg" alt="" /></a>
                </div>
            </div>
            
            
        </div>
        <div class="row justify-content-center" >
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 wow zoomIn" data-wow-delay=".4s">
                <div class="single-brand isdivide">
                    <a href="https://gdsc.community.dev/school-of-data-science-and-forecasting-indore/"><img className='isimage' src="assets/img/speaker/Screenshot 2023-01-09 at 10.37.08 AM.png" alt="" /></a>
                </div>
            </div> 
        </div>
    </div>
</div>
    </>



    )
}