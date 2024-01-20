import React from 'react'
import img8 from '../image/img8.png'
import img7 from '../image/img7.png'
import img9 from '../image/img9.jpeg'


const About = () => {
  return (
    <div id="about" class="fea-area padding-top-120 padding-bottom-90">
        <div class="fea-shapes">
            
            <img src="assets/img/shape/e_vec3.png" alt="" class="vec_1"/>
            <img src="assets/img/shape/e_vec5.png" alt="" class="vec_2"/>
        </div>
        <div class="container position-relative">
            <div class="row align-items-center">
                <div class="col-lg-6 wow slideInLeft">
                    <div class="fea-left">
                        <div class="common-title">
                            <h5>About Us</h5>
                            <h2 style={{color:'#40e0d0'}}>learn new <span>things and connect</span> with awesome people</h2>
                            <p class="margin-top-20">
                            The Cynaptics Club stands as IIT Indore's premier student body exclusively focused on Machine Learning. Demonstrating a proactive engagement with the cutting-edge trends in Machine Learning and AI, the club is dedicated to leveraging these technologies for the betterment of society. Through impactful projects with social relevance and the organization of workshops and talk sessions, the Cynaptics Club is a dynamic hub connecting students with distinguished individuals leading advancements in AI/ML across diverse domains.

                            <p>
                            <br />
                            Google Developer Student Club IITI (GDSC-IITI), a collaborative venture with Google Developers, stands as a vibrant club catering to passionate students within global developer communities.This unique platform is dedicated to bridging the gap between theoretical knowledge and practical application. Focusing on Android, Web, Cloud, and Data Science, GDSC-IITI offers students the opportunity not only to learn through peer-to-peer workshops but also to actively contribute to solving real-world problems for the local community through sponsored projects.
                            </p>
                            </p>


                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="fea-right">
                        <div class="row">
                            <div class="col-12 wow fadeInUp">
                                <img src={img7} alt="" style={{border:'5px solid #7F89FF', boxShadow:'0 0 10px 2px #48abe0'}}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 wow fadeInDown">
                                <img src={img8} alt="" style={{border:'5px solid #7F89FF', boxShadow:'0 0 10px 2px #48abe0'}}/>
                            </div>
                            <div class="col-6 wow fadeInDown" data-wow-delay=".2s">
                                <img src={img9} alt="" style={{border:'5px solid #7F89FF', boxShadow:'0 0 10px 2px #48abe0'}}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 wow fadeInUp">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About