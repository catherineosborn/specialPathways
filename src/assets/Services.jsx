import React, { useRef, useState, useEffect } from "react";
import FS from "../images/Family Services.png";
import ES from "../images/Educational Services.png";
import CMS from "../images/Church and Ministry Services_Special Pathways.png";
import SETF from "../images/Services for Equine Therapy Facilities_Special Pathways.png";

export default function Services() {
    useEffect(() => {
        // Check if a fragment identifier is present in the URL
        const fragment = window.location.hash.substring(1);
        if (fragment) {
          // Find the target element with the matching id
          const targetElement = document.getElementById(fragment);
          if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

    const [visibleServices, setVisibleServices] = useState({
        family: false,
        educational: false,
        church: false,
        equine: false,
    });

    const toggleServiceVisibility = (service) => {
        const updatedServices = { ...visibleServices };
        updatedServices[service] = !updatedServices[service];
        setVisibleServices(updatedServices);

        // Update the URL fragment identifier based on the open services
        const fragment = Object.keys(updatedServices)
            .filter((key) => updatedServices[key])
            .join(",");
        window.location.hash = fragment;
    };

    // Function to check if a service is open
    const isServiceOpen = (service) => visibleServices[service];

    return(
        <div className="servicesPage">
        <div className="mainHeader">
            <br/>
        <h1>Our Services</h1>
        <br/>
        <hr/>
    
    
        </div>

        <div className="servicesList">
        <div>
            <br/>
            <img src={FS} alt="Family Services" height="300px"/>
            <br/>
            <br/>
            <br/>
            <h2
                onClick={() => toggleServiceVisibility("family")}
                style={{ cursor: "pointer" }}
                id="family"
            >
            Family Services{" "}
            <span
                className={`arrow-icon ${
                    isServiceOpen("family") ? "up-arrow" : "down-arrow"
                }`}
            ></span>
          </h2>
            <br/>
            {isServiceOpen("family") && (<><p style={{ textAlign: "left" }}>
                        <span style={{ fontWeight: "bold" }}>Please see the list below for the services that we provide for families</span>
                    </p><p style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>IEP Review - </span> When you receive an IEP for your school-aged child; we can help you review the document thoroughly to make sure you have a full understanding of what each section of the IEP means. If you have remaining questions or concerns for your child's educational team, we can help you formulate them and send them to the team.
                        </p><p style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>IEP Support - </span>If you have an IEP meeting coming up for your school-aged child, we will meet with you and go over any questions that you might have before going into the meeting. We will also help you prepare any questions or points that you would like to discuss with your student's educational team.
                        </p><p style={{ textAlign: "left" }}>
                            If you are at the beginning of the process of obtaining an IEP for your child, we are here to help you go through the paper-work, explain what each section means, as well as help you fill out any paper work that is needed. We want to make sure you have the best understanding of what the process is and what each step means so that you can ask any questions or voice any concerns to your child's IEP team when you feel the need.
                        </p><p style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>Resource Creation - </span>Whether you need a behavioral chart, transition chart, a social story, or a life skill "How-To", we are here to help you create it. Each resource will be created specifically for your child with special needs. If you have a specific need we would love to meet with you to help you figure out which resource best fits your child and your family.
                        </p><p style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>Family Advocacy in IEP Meetings - </span>We offer advocacy services for you and your student during IEP meetings. Our main goal is to make sure that your student is receiving the best that your school district is able to offer that best fits your student's needs. **
                        </p></>)}
                        <br/>
        </div>

        <div>
            <img src={ES} alt="Educational Services" height="300px"/>
            <br/>
            <br/>
            <br/>
            <h2
                onClick={() => toggleServiceVisibility("educational")}
                style={{ cursor: "pointer" }}
                id="educational"
            >
            Educational Services{" "}
            <span
                className={`arrow-icon ${
                    isServiceOpen("educational") ? "up-arrow" : "down-arrow"
                }`}
            ></span>
          </h2>
          <br/>{isServiceOpen("educational") && (
            <><p style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>We provide consulting services to all educational platforms, e.g., school districts, private schools, daycare/ pre-school centers, etc. Please see the list below for the services that we provide.</span>
                        </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>IEP Support - </span>From district wide IEP support to helping a single teacher within your district, we are here to help. We will meet with a group of teachers or just one teacher and help them with writing their students' IEP. This can range from creating specific goals for a student, to creating an entire IEP from the beginning. We can also meet with teachers and go over their students current IEPs and see how their goals can fit into their daily curriculum. This will lead into Curriculum Development and Curriculum Support Services.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Curriculum Development and Support - </span>There are many times when it is difficult to find the right curriculum that fits your classroom and each of your students' needs. We are here to help you find a curriculum that suits your classrooms' needs or help you piece together a curriculum of your own for your classroom.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Resource Creation - </span>We know your teachers are busy, so we are here to help with any and all resource creation that they might need within their classrooms. These resources can range from transition boards, behavior tracking, token boards, social stories, and more. We meet with the teacher individually to talk about the needed resources for within their classroom or for a specific student. We can also meet with other service providers that meet with any of the students to help create resources as well.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Professional Development - </span>As your special needs consultant, we offer professional development
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontStyle: "italic" }}>Special Education Teachers - </span>Your Special Education teachers are always busy and on the go! With this they are constantly running into situations within their classrooms and within IEP meetings with families that they are having to learn something new for. We are here to offer that support through specified professional development that your teachers are actually going to be able to utilize. A couple of the topics that we provide professional development on are behavior and classroom management, IEP Development, Goal creation and Data collection. If you have a specific topic that you would like your teachers to have professional development on, please reach out and we will work with you to create a specified professional development just for your teachers.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontStyle: "italic" }}>General Education Teachers - </span>When we think of special education, we think of special education teachers, service providers, their students and their families. Sometimes we forget that our general education teachers can learn a lot about certain aspects of special education, and how they can utilize this information within their classrooms. Some topics that we offer professional development on are "What are IEPs?", "What are accommodations and modifications, and why are they important?", and Behavioral and Classroom Management.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontStyle: "italic" }}>Para-Educators - </span>There are often times that we focus on the teachers and students when we talk about special education. We sometimes forget those that support our teachers within the classroom; our paraprofessionals! If our teachers receive continual education, we believe our paraprofessionals should as well. The professional development we offer for paraprofessionals is very customizable. Since each special education program is different we believe that it is important to collaborate with you and your teachers to make sure we are training your paraprofessionals on the specifics of your program. We also provide generalized behavior management trainings and IEP/goal - data collection trainings.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Program Audit - </span>
                                At the beginning of the audit process, there will be a meeting with your school administrator and special education teachers. In this meeting, there will discussion about where the program is now, what areas you believe need to be worked on, and what goals you have for your program.
                            </p><p style={{ textAlign: "left" }}>
                                After the first meet, the observations for each classroom in the program will be scheduled. Each of these observations will be a full day observation. This is so that the person observing will be able to fully grasp how the program is operated and how efficient it is within each classroom.
                            </p><p style={{ textAlign: "left" }}>
                                After observations are completed, you will receive the audit report. With this, you will also receive a notification to schedule a final meeting with administrators and teachers as well. In this meeting, the audit report will be reviewed. If anyone has any questions about what is in the report, this will be the time to ask them.  There will also be discussion about the goals that we set in the first meeting and what they need to achieve  these goals.
                            </p><p style={{ textAlign: "left" }}>
                                We believe that it is important to have all team members that are involved in the special needs program in this first and last meeting since they are the ones with the students and can truly see what is working and see where the deficits lie. We aim to have them involved in the goal making process as well as be given the chance to talk about what support they feel like they need.
                            </p></>)}
                            <br/>
        </div>

        <div>
            <img src={CMS} alt="Church and Ministry Services" height="300px"/>
            <br/>
            <br/>
            <br/>
            <h2
                onClick={() => toggleServiceVisibility("church")}
                style={{ cursor: "pointer" }}
                id="church"
            >
            Church and Ministry Services{" "}
            <span
                className={`arrow-icon ${
                    isServiceOpen("church") ? "up-arrow" : "down-arrow"
                }`}
            ></span>
          </h2>
            <br/>
            {isServiceOpen("church") && (
            <><p style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>Please see the list below for the services that we provide for churches and church ministries.</span>
                        </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Program/ Ministry Development - </span>If your church is feeling led to start a special needs ministry, we are here to help you get started! We can help you create policies and procedures, help you figure out which ministry model will best fit the needs that you have within your church and community, etc.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Program/ Ministry Support - </span>If you already have a special needs ministry but have areas that you need support in, we are here to help. From creating resources, learning how to modify Sunday school curriculum, to training volunteers, we would love to work with you to accomplish these goals.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Volunteer Training - </span>We have a basic training that has already been outlined, but would love to work with you on your specific needs in how you would like your volunteers trained. We can either create the training for you and you run your training sessions, or we can collaborate with you and create the training as well as run your training sessions for your volunteers.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Event Planning - </span>If you are in need of helping plan specific events for your special needs ministry, we would love to work with you. We can help you plan respite nights, create a special needs aspect to your Vacation Bible School, along with other events that might be specific to you.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Sunday School Support for inclusion of students with Special Needs with their volunteer buddies - </span>We can work with you, your Sunday School teachers and your volunteers on how to create an inclusive environment within their classrooms for students with special needs and their peers.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Resource Creation - </span>Even if you do not or are not in the place to have a special needs ministry, but still want to have resources to help accommodate what you do have; we are here to work with you and create resources for you that will help you do that.
                            </p></>)}
                            <br/>
        </div>

        <div>
            <img src={SETF} alt="Services for Equine Therapy Facilities" height="300px"/>
            <br/>
            <br/>
            <br/>
            <h2
                onClick={() => toggleServiceVisibility("equine")}
                style={{ cursor: "pointer" }}
                id="equine"
            >
            Services for Equine Therapy Facilities{" "}
                <span
                    className={`arrow-icon ${
                        isServiceOpen("equine") ? "up-arrow" : "down-arrow"
                    }`}
                ></span>
          </h2><br/>
            {isServiceOpen("equine") && (
            <><p style={{ textAlign: "left" }}>
                            <span style={{ fontWeight: "bold" }}>Please see the list below for the services that we provide to Equine Therapy Facilities.</span>
                        </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Curriculum Development and Support - </span>If you are in need of support of creating and developing your curriculum or lessons for your lessons with children or adults with special needs, we would love to help. Whether it is collaborating with you and working on modifying the curriculum that you already have or creating lessons from scratch, we are here for you!
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Resource Creation - </span>We know that you are busy with your students, and your horses, so you may not have time to create all of the materials and resources that you need for your lessons! Please give us a call if you need help with this.
                            </p><p style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>Volunteer and Staff Training - </span>We have experience in working with both horses and the special needs community, so we are here to help train your volunteers and staff in any way that we can. We would collaborate with you on what you would want specifically in each training. We would then create the training for you and either give it to you to use in your sessions with your volunteers, or we could lead the training sessions for you.
                            </p></>)}
                            <br/>
        </div>
        </div>
        </div>
    );
}