import React, { Component } from "react";
import Slider from "react-slick";
import img_cor from '../constant.js'
import '../Css/dashboard.css'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import { withRouter } from "react-router";


class Carousel extends Component {
    render() {
        const settings = {

            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 100,
            autoplaySpeed: 2000,
            cssEase: "linear",
            
        };
        return (
            <div>
                <div id="carouselandglobe">

                    {/* <div className="empty-space">

                    </div> */}

                    <div id="carousel-items">
                        {/* <Slider {...settings}> */}
                            {/* {img_cor.map((data) => (
                        
                        <div className="carousel-item" >
                            <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src={data.img_src} className="img-1" id="img1"></img>
                            <div className="c-slide__content | js-slide__content">
                                <h1 className="c-slide__title">{data.title}</h1>
                                <p className="c-slide__text">{data.text}</p>
                                <span className="c-slide__link">{data.link}</span>
                            </div>
                        </div>
                        
                    ))} */}
                            {/* <div className="carousel-item" >
                            <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src={data.img_src} className="img-1" id="img1"></img>
                            <div className="c-slide__content | js-slide__content">
                                <h1 className="c-slide__title">{data.title}</h1>
                                <p className="c-slide__text">{data.text}</p>
                                <span className="c-slide__link">{data.link}</span>
                            </div>
                        </div>*/}
                            <div className="carousel-item" >

                                <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                                <div className="c-slide__content | js-slide__content">
                                    <h1 className="c-slide__title">James Island</h1>
                                    <p className="c-slide__text">Southern Gulf Islands, British Columbia, Canada</p>
                                    <span className="c-slide__link">Explore</span>
                                </div>
                            </div>
                            <div className="carousel-item" id="3">

                                <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                                <div className="c-slide__content | js-slide__content">
                                    <h1 className="c-slide__title">CostaTerra</h1>
                                    <p className="c-slide__text">Comporta, Portugal</p>
                                    <span className="c-slide__link">Explore</span>
                                </div>
                            </div>
                            <div className="carousel-item" id="4">

                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                        <div className="c-slide__content | js-slide__content">
                            <h1 className="c-slide__title">James Island</h1>
                            <p className="c-slide__text">Southern Gulf Islands, British Columbia, Canada</p>
                            <span className="c-slide__link">Explore</span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>
                        <div className="c-slide__content | js-slide__content">
                            <h1 className="c-slide__title">Driftwood</h1>
                            <p className="c-slide__text">Austin, Texas</p>
                            <span className="c-slide__link">Explore</span>
                        </div>
                    </div>
                            


                            {/* 
                        <div className="carousel-item" >

                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                        <div className="c-slide__content | js-slide__content">
                            <h1 className="c-slide__title">James Island</h1>
                            <p className="c-slide__text">Southern Gulf Islands, British Columbia, Canada</p>
                            <span className="c-slide__link">Explore</span>
                        </div>
                    </div>
                    <div className="carousel-item" id="3">

                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                        <div className="c-slide__content | js-slide__content">
                            <h1 className="c-slide__title">CostaTerra</h1>
                            <p className="c-slide__text">Comporta, Portugal</p>
                            <span className="c-slide__link">Explore</span>
                        </div>
                    </div>
                    <div className="carousel-item" id="4">

                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6492/LM-Coco-Point-Barbuda-0266_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6492/LM-Coco-Point-Barbuda-0266_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>
                        <div className="c-slide__content | js-slide__content">
                            <h1 className="c-slide__title">Barbuda Ocean Club</h1>
                            <p className="c-slide__text">Barbuda, West Indies</p>
                            <span className="c-slide__link">Explore</span>
                        </div>
                    </div>
                    <div className="carousel-item" id="4">

                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                        <div className="c-slide__content | js-slide__content">
                            <h1 className="c-slide__title">James Island</h1>
                            <p className="c-slide__text">Southern Gulf Islands, British Columbia, Canada</p>
                            <span className="c-slide__link">Explore</span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>
                        <div className="c-slide__content | js-slide__content">
                            <h1 className="c-slide__title">Driftwood</h1>
                            <p className="c-slide__text">Austin, Texas</p>
                            <span className="c-slide__link">Explore</span>
                        </div>
                    </div> 
                    */}
                        {/* </Slider> */}
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter (Carousel)