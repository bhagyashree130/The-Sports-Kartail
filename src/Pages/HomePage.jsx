import React from 'react'
import Logo from "../Assets/Logo.jpeg"
import Banner from "../Assets/banner.jpeg"
import Group1 from "../Assets/group.jpeg"
import Group2 from "../Assets/group1.jpeg"
import Group3 from "../Assets/group2.jpeg"
import AboutUsImage from "../Assets/pik.jpeg"
import ContactUsImage from "../Assets/contact.png"
import { Link } from "react-scroll";
import emailjs from 'emailjs-com';
import { useRef } from 'react';


export const HomePage = () => {
    return (
        <>

            <Header />
            <div className='bgIMG'>
                <div id="Home" className="imagesection">
                    <img src={Banner} alt="" />
                </div>
                <div id className="blogsection">
                    <div className="blogelemets"><div className="imageblog"><img src={Group1} alt="" /></div> <div className="contentblog">
                        <h1>Lorem ipsum </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos amet debitis perferendis ipsum voluptatem autem beatae. Expedita, laboriosam, non quod aperiam, perferendis ratione veritatis earum voluptate fugiat praesentium porro.</p></div> </div>
                    <div className="blogelemets"> <div className="imageblog"><img src={Group2} alt="" /></div> <div className="contentblog">
                        <h1>Lorem ipsum </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos amet debitis perferendis ipsum voluptatem autem beatae. Expedita, laboriosam, non quod aperiam, perferendis ratione veritatis earum voluptate fugiat praesentium porro.</p></div></div>
                    <div className="blogelemets"><div className="imageblog"><img src={Group3} alt="" /></div> <div className="contentblog">
                        <h1>Lorem ipsum </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos amet debitis perferendis ipsum voluptatem autem beatae. Expedita, laboriosam, non quod aperiam, perferendis ratione veritatis earum voluptate fugiat praesentium porro.</p></div> </div>
                </div>

                <div id="AboutUs" className="aboutusheading">
                    <h1>About Us</h1>
                </div>
                <div className="aboutusinfocontainer">
                    <div className="avboutusimage">
                        <img src={AboutUsImage} alt="" />
                    </div>
                    <div className="aboutuscontent">
                        <div className="aboutuscontentheading">
                            <h3>Lorem Ipsum</h3>
                            <h5>Lorem Ipsum doler Ipsum</h5>
                        </div>
                        <div className="aboutuscontentinfo">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi qui placeat, inventore totam enim cumque accusamus nihil, pariatur molestias voluptatum voluptate eos expedita, sit hic aut numquam fugit. Iste neque, praesentium enim, fugit repellendus ea voluptas officia ducimus porro amet rem! Exercitationem dolore at sint optio? Fugiat ratione quibusdam repellat voluptate omnis non corporis aut hic, esse consequatur tempora officiis quis dolores adipisci unde officia sequi quos ipsam sunt architecto. Enim maxime possimus nulla aperiam voluptate adipisci, blanditiis obcaecati ea distinctio tempora. Rem delectus odit dolorem magnam ea, et voluptate debitis excepturi alias iste ratione. Ipsa doloribus iure incidunt. Impedit quis hic libero perferendis eius nemo totam, accusantium neque minima rem harum maxime atque omnis unde velit dolorem nostrum aperiam amet nisi est ex illum veritatis nulla in? Et aperiam blanditiis modi error sequi. Esse incidunt maxime, facere non assumenda suscipit facilis cupiditate dicta. Ex officiis debitis facilis laudantium ab.</p>
                        </div>
                    </div>
                </div>


                <div className="statscontainer">
                    <div className="statselements"><h1>Sonipat</h1><h3>200+</h3></div>
                    <div className="statselements"><h1>Delhi</h1><h3>500+</h3></div>
                    <div className="statselements"><h1>Jaipur</h1><h3>400+</h3></div>

                </div>


                <div id="Contact" className="contactheading">
                    <h1>Contact</h1>
                </div>
                <div className="contactsubheading"><h1>We'd love to hear back from you</h1></div>

                <div className="contactformcontainer">

                    <div className="contactimage"><img src={ContactUsImage} alt="" /></div>
                    <div className="contactform"><Form /></div>
                </div>

                <div className="footer">
                    <h1>@2021 The Sportskartail. All Rights Reserved</h1>
                </div>
            </div>
        </>
    )
}



const Header = () => {

    return (
        <>
            <div className="headercontainer">
                <div className="headerelement"><div><Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={1000}>Home</Link></div></div>





                <div className="headerelement"><div><Link
                    activeClass="active"
                    to="AboutUs"
                    spy={true}
                    smooth={true}
                    duration={1000}>About Us</Link></div></div>
                <div className="headerelement"><img src={Logo} alt="LOGO" className='headerimg' /></div>
                <div className="headerelement"><div><Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}>Contact</Link></div></div>
                <div className="headerelement"><div><Link
                    activeClass="active"
                    to="Blog"
                    spy={true}
                    smooth={true}
                    duration={1000}>Launchpad</Link></div></div>
            </div>
        </>
    )
}


const Form = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const form = useRef();
    return (
        <>
            <form ref={form} onSubmit={sendEmail} action="" >
                <div className="form1line">
                    <input type="text" id="fname" name="fname" placeholder='Name' />
                    <input type="email" id="email" name="email" placeholder='Email' />
                </div>
                <div className="form2line">

                    <input type="text" id="Subject" name="Subject" placeholder='Subject' />
                    <input type="number" id="number" name="number" placeholder='Phone Number' />
                </div>
                <div className="form3line">
                    <textarea id="w3review" name="w3review" rows="5" cols="65" placeholder='Message' />
                </div>
                <div className="submitbutton">
                    <button>Submit</button>
                </div>



            </form>

        </>
    )
}