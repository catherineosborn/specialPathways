import React from "react";
import Hannah from "../images/hannah.jpg"

export default function About() {
    return(
        <div className="aboutPage">
        <div className="aboutHeadings">
            <br/>
            <h1>About Us</h1>
            <br/>
            <h2>The Special Pathways Experience</h2>
            <br/>
        </div>
        <hr/>
        <div className="companyDescription">
            <p>	
            Special Pathways has been serving the Central Kentucky area since January of 2023. Founded by Hannah Dell'Acqua, Special Pathways provides an array of services to help support anyone in the special needs community. We are dedicated to providing resources and training to anyone within this community as well as any service providers.
            </p>
            <p>
            Call or email us to inquire about our services today!
            </p>
        </div>
        <hr/>
        <div className="hannahBio">
        <h2>Get to Know the Owner</h2>
            <div className="hannahImage">
                <img src={Hannah} alt="Hannah Dell'Acqua" height="400px" className="mb-4"/>
            </div>
            <h5>Hannah Dell'Acqua has served the special needs community for over a decade in various capacities.</h5>
            <p style={{ textAlign: "left" }}>
            From helping lead equine therapy lessons to teaching in a high school, moderate to severe special needs classroom, Hannah Dell'Acqua has a wealth of experience and time to grow her passion with working and serving the special needs community. With such knowledge and experience, Hannah wants to help you in any way that she can. Resource creation, teacher mentorship, professional development, and behavior management are all areas that Hannah has experience in and is able to help you with. 
            </p>

            <p style={{ textAlign: "left" }}>
            Hannah's passion for the special needs community began in college when she began leading equine therapy lessons with special needs students. Through this she learned about working with students with special needs in a unique way and atmosphere. She learned how to work with her fellow volunteers as well as her students and how to be a constant person of encouragement to those around her. 
            </p>

            <p style={{ textAlign: "left" }}>
            After graduation, she moved forward into working with a non-profit called Lord's Legacy Life Ministries. There she was able to expand her experience with working hands on with adults with special needs. She worked with them throughout the community teaching life skills and social skills, and in their homes working with their families collaborating and talking about best practices to use when working with the client. This opportunity only allowed for her passion and skills to grow. 
            </p>

            <p style={{ textAlign: "left" }}>
            Hannah has earned the Registered Behavior Technician (RBT) certification. With this certification, she will utilize Applied Behavior Analysis (ABA) therapy while working with her clients with autism. She has worked with children from the ages of 3 to 18 in school settings as well as in home with clients and their families. Hannah Specializes in collaborating with Family members to develop effective strategies that those persons can use to better interact with the client. 
            </p>

            <p style={{ textAlign: "left" }}>
            Hannah's experience extends to the high school moderate to severe special education classroom. This environment allowed her to engage more fully with her passion for working with and serving the special needs community. This experience has strengthened Hannah's belief that all students can be successful; the most powerful gift Special Pathways can give our clients if the ability to set meaningful life goals and the support, tools, and encouragement to meet them! 
            </p>

            <p style={{ textAlign: "left" }}>
            Special Pathways seeks to serve the special needs community holistically and to create better and more accommodating environments for those within it. Special Pathways is a resource for exceptional people and their families to help them find success at home, in school, and in the community where they build their lives!
            </p>
            <br/>
        </div>
        </div>
    );
}