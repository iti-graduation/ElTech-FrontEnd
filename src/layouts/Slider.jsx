import React, { useEffect } from "react";


import Scroll from "../assets/images/home/scroll.png";
import Layer1 from "../assets/images/home/layer1.jpg";


const Slider = () => {

    useEffect(() => {
        var revapi = window.$('#rev_slider_1').show().revolution({
            delay: 7000,
            responsiveLevels: [1200, 1140, 778, 480],
            gridwidth: [1140, 920, 700, 380],
            sliderLayout: 'fullscreen',
            navigation: {
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onmobile: false,
                    hide_onleave: false,
                    left: {
                        h_align: "right",
                        v_align: "bottom",
                        h_offset: 208,
                        v_offset: 100
                    },
                    right: {
                        h_align: "right",
                        v_align: "bottom",
                        h_offset: 130,
                        v_offset: 100
                    }
                }
            }
        });
        revapi.one('revolution.slide.onloaded', function () {
            var currentSlide = parseInt(revapi.revcurrentslide(), 10) + 1;
            currentSlide = (currentSlide < 10 ? '0'+currentSlide : currentSlide);
            var totalSlides = revapi.revmaxslide();
            totalSlides = (totalSlides < 10 ? '0'+totalSlides : totalSlides);
            window.$('.slider-counter .total-item').html(totalSlides);
            window.$('.slider-counter .current-item').html(currentSlide);
        });
        revapi.on('revolution.slide.onafterswap', function (event, data) {

            var currentSlide = revapi.revcurrentslide();
            currentSlide = (currentSlide < 10 ? '0'+currentSlide : currentSlide);
            window.$('.slider-counter .current-item').html(currentSlide);
        });
    })

  return (
    <section className="slider-01">
      {/* <!-- Scroll Btn --> */}
      <div className="scroll-down">
        <a href="/">scroll to explore</a>
        <img src={Scroll} alt="" />
      </div>
      {/* <!-- Scroll Btn --> */}

      {/* <!-- Counting Item --> */}
      <div className="slider-counter">
        <span className="current-item">02</span>
        <span className="bar"></span>
        <span className="total-item">04</span>
      </div>
      {/* <!-- Counting Item --> */}

      <div className="rev_slider_wrapper">
        <div
          id="rev_slider_1"
          className="rev_slider fullwidthabanner"
          style={{ display:"none" }}
          data-version="5.4.1"
        >
          <ul>
            <li className="rev-slidebg">
              <div
                className="tp-caption tp-resizeme textRes title-1"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['-132','-110','-60','-70']"
                data-fontsize="['60','45','40','36']"
                data-fontweight="700"
                data-lineheight="['72','50','52','46']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#000000']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{
                    zIndex:"5",
                    whiteSpace: "normal",
                    textTransform: "none"
                }}
              >
                The Device That Takes You Higher.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['17','17','50','40']"
                data-fontsize="['24','20','18','18']"
                data-fontweight="400"
                data-lineheight="['36','32','30','28']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#666666']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{zIndex: "5", whiteSpace: "normal", textTransform: "none"}}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod
                tempor incididunt ut labore et dolo aliqua. Ut enim ad minim
                veniam.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['145','145','150','145']"
                data-fontsize="14"
                data-fontweight="700"
                data-lineheight=".8"
                data-width="['auto']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#FFF']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{
                    zIndex: 5
                }}
              >
                <a href="/" className="goru-btn">
                  view collection
                </a>
              </div>
              <div
                className="tp-caption tp-resizeme slider-image"
                data-x="['right','right','center','center']"
                data-hoffset="['-50','50','0','0']"
                data-y="['middle']"
                data-voffset="['0']"
                data-width="['auto','350','auto','auto']"
                data-height="['auto']"
                data-type="image"
                data-responsive_offset="off"
                data-frames='[{"delay":3500,"speed":2500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,25]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,25]"
                style={{zIndex: "5"}}
              >
                <img src={Layer1} alt="" />
              </div>
            </li>
            <li className="rev-slidebg">
              <div
                className="tp-caption tp-resizeme textRes title-1"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['-132','-110','-60','-70']"
                data-fontsize="['60','45','40','36']"
                data-fontweight="700"
                data-lineheight="['72','50','52','46']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#000000']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{
                    zIndex: "5",  whiteSpace: "normal", textTransform: "none"
                }}
              >
                The Device That Takes You Higher.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['17','17','50','40']"
                data-fontsize="['24','20','18','18']"
                data-fontweight="400"
                data-lineheight="['36','32','30','28']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#666666']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{
                    zIndex: "5", whiteSpace: "normal", textTransform: "none"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod
                tempor incididunt ut labore et dolo aliqua. Ut enim ad minim
                veniam.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['145','145','150','145']"
                data-fontsize="14"
                data-fontweight="700"
                data-lineheight=".8"
                data-width="['auto']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#FFF']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{ zIndex: "5" }}
              >
                <a href="/" className="goru-btn">
                  view collection
                </a>
              </div>
              <div
                className="tp-caption tp-resizeme slider-image"
                data-x="['right','right','center','center']"
                data-hoffset="['-50','50','0','0']"
                data-y="['middle']"
                data-voffset="['0']"
                data-width="['auto','350','auto','auto']"
                data-height="['auto']"
                data-type="image"
                data-responsive_offset="off"
                data-frames='[{"delay":3500,"speed":2500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,25]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,25]"
                style={{ zIndex: "5" }}
              >
                <img src={Layer1} alt="" />
              </div>
            </li>
            <li className="rev-slidebg">
              <div
                className="tp-caption tp-resizeme textRes title-1"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['-132','-110','-60','-70']"
                data-fontsize="['60','45','40','36']"
                data-fontweight="700"
                data-lineheight="['72','50','52','46']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#000000']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{ zIndex: "5",  whiteSpace: "normal", textTransform: "none" }}
              >
                The Device That Takes You Higher.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['17','17','50','40']"
                data-fontsize="['24','20','18','18']"
                data-fontweight="400"
                data-lineheight="['36','32','30','28']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#666666']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{ zIndex: "5", whiteSpace: "normal", textTransform: "none" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod
                tempor incididunt ut labore et dolo aliqua. Ut enim ad minim
                veniam.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['145','145','150','145']"
                data-fontsize="14"
                data-fontweight="700"
                data-lineheight=".8"
                data-width="['auto']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#FFF']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{ zIndex: "5" }}
              >
                <a href="/" className="goru-btn">
                  view collection
                </a>
              </div>
              <div
                className="tp-caption tp-resizeme slider-image"
                data-x="['right','right','center','center']"
                data-hoffset="['-50','50','0','0']"
                data-y="['middle']"
                data-voffset="['0']"
                data-width="['auto','350','auto','auto']"
                data-height="['auto']"
                data-type="image"
                data-responsive_offset="off"
                data-frames='[{"delay":3500,"speed":2500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,25]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,25]"
                style={{ zIndex: "5" }}
              >
                <img src={Layer1} alt="" />
              </div>
            </li>
            <li className="rev-slidebg">
              <div
                className="tp-caption tp-resizeme textRes title-1"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['-132','-110','-60','-70']"
                data-fontsize="['60','45','40','36']"
                data-fontweight="700"
                data-lineheight="['72','50','52','46']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#000000']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{ zIndex: "5", whiteSpace: "normal", textTransform: "none" }}
              >
                The Device That Takes You Higher.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['17','17','50','40']"
                data-fontsize="['24','20','18','18']"
                data-fontweight="400"
                data-lineheight="['36','32','30','28']"
                data-width="['570','500','500','100%']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#666666']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="['left','left','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{ zIndex: "5", whiteSpace: "normal", textTransform: "none" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicin do eiu smod
                tempor incididunt ut labore et dolo aliqua. Ut enim ad minim
                veniam.
              </div>
              <div
                className="tp-caption tp-resizeme textRes"
                data-x="['left','left','center','center']"
                data-hoffset="['0']"
                data-y="['middle']"
                data-voffset="['145','145','150','145']"
                data-fontsize="14"
                data-fontweight="700"
                data-lineheight=".8"
                data-width="['auto']"
                data-height="['auto']"
                data-whitesapce="['normal']"
                data-color="['#FFF']"
                data-type="text"
                data-responsive_offset="off"
                data-frames='[{"delay":2500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                                 {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,20]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,20]"
                style={{ zIndex: "5" }}
              >
                <a href="/" className="goru-btn">
                  view collection
                </a>
              </div>
              <div
                className="tp-caption tp-resizeme slider-image"
                data-x="['right','right','center','center']"
                data-hoffset="['-50','50','0','0']"
                data-y="['middle']"
                data-voffset="['0']"
                data-width="['auto','350','auto','auto']"
                data-height="['auto']"
                data-type="image"
                data-responsive_offset="off"
                data-frames='[{"delay":3500,"speed":2500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-textalign="center"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,25]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,25]"
                style={{ zIndex: "5" }}
              >
                <img src={Layer1} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;
