import React from 'react';

export default function Footer() {
    return (
        <footer>
        <div class="footer-area">
            <div class="foo_top padding-top-120 padding-bottom-65">
                
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                            <div class="foo-widget">
                                <div class="logo">
                                    <a href="/"> <img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                                <p>
                                    The hackathon is aimed to attract students from colleges all over India to ideate
                                    and implement their development skills in amalgamating AI/ML with web development to
                                    solve the various problem statements (anyone of the six in total).
                                </p>
                                <div class="social-links isdivision">
                                    <a target="_blank" href="https://discord.gg/GUhhaCt4us"><i
                                                class="fab fa-2x fa-discord "></i> </a>
                                    <span className="isspan" style={{color:'white'}}>Join us at discord</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                            <div class="foo-widget">
                                <h4 class="margin-bottom-20" style={{color:'turquoise'}}>contact us</h4>
                                <ul>
                                    <li>
                                        <span><i class="far fa-envelope"></i></span> <a href="mailto:snt.council@iiti.ac.in"
                                            class="__cf_email__" style={{color:'white'}}>snt.council@iiti.ac.in</a>
                                    </li>
                                    <li>
                                        <span><i class="far fa fa-phone"></i></span> <a
                                            class="__cf_email__" style={{color:'white'}} >6393716756</a>
                                    </li>
                                    <li>
                                        <span><i class="far fa fa-phone"></i></span> <a
                                            class="__cf_email__" style={{color:'white'}}>9133266129</a>
                                    </li>                                                                        
                                    <li style={{color:'white'}}>
                                        <span><i class="far fa-map-marker-alt" ></i></span>
                                        IIT Indore, Simrol, Indore, MP, India
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            <div class="foo-widget">
                                <h4 class="margin-bottom-20" style={{color:'turquoise'}}>useful links</h4>
                                <ul>
                                    <li  ><a href="#about" style={{color:'white'}}><i class="far fa-angle-double-right"></i> About Us</a>
                                    </li>
                                    <li  style={{color:'white'}}><a href="#prize" style={{color:'white'}}><i class="far fa-angle-double-right" style={{color:'white'}}></i> Prizes</a>
                                    </li>
                                    <li  style={{color:'white'}}><a href="#schedule" style={{color:'white'}}><i class="far fa-angle-double-right" style={{color:'white'}}></i>
                                            Schedule</a>
                                    </li>
                                    <li  style={{color:'white'}}><a href="#sponsor" style={{color:'white'}}><i class="far fa-angle-double-right" style={{color:'white'}}></i> Sponsors</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="foo_btm">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="copyright-text">
                                <span style={{color:'white'}}> &copy; copyright 2023 <a href="#"><b style={{color:'white'}}>ÉNOSIUM</b></a> All Rights
                                    Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    )
}