import React, { Component } from 'react'
import { PortfolioPage } from 'react-dev-portfolio-builder'
import 'react-dev-portfolio-builder/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProfileImage from "./images/profile.jpeg";
import InternShip from "./images/internship.webp"
import Ict from "./images/ict.webp";
import Aie from "./images/aie.jpeg";
import Cbse from "./images/CBSE.png";


export default class Example extends Component {
  render() {
    return (
      <PortfolioPage
        user={{
          firstname: 'Shubham',
          lastname: 'Kumar',
          headline: 'Student Teacher',
          imageUrl: ProfileImage,
          title: "at Army Institute of Education",
          mailto: "ssshubham109@gmail.com",
          linkedin: 'https://www.linkedin.com/in/shubham-k-62a408100',
          projects: [
            {
              name: 'Internship',
              startdate: new Date(2021, 9, 9),
              current: false,
              owner: 'G.D.Goenka Public School',
              enddate: new Date(2021, 11, 27),
              info: `I was engaged in teaching experience with meaningful and holistic engagement including the writing of reflective journals.
               This included extended discussions with peers and faculty on different aspects of the teaching experience accompanied by presentations post the internship in schools.`,
              thumbnail: InternShip,
              skills: [
                { name: 'Excel', group: 'Technologies' },
                { name: 'Powerpoint', group: 'Technologies' },
                { name: 'Word', group: 'Technologies' },
                { name: 'Classroom Management', group: 'Key Skills' },
                { name: 'Leadership', group: 'Key Skills' },
                { name: 'Confident', group: 'Key Skills' },
                { name: 'Adaptable', group: 'Key Skills' },
                { name: 'Strong Communicator', group: 'Key Skills' },

              ],
            },
            {
              name: 'Kendriya Vidyalaya Ballygunge,Kolkata',
              startdate: new Date(2021, 6, 1),
              current: false,
              owner: 'Kendriya Vidyalaya Ballygunge, Kolkata',
              info: `I  undertook the field activities pertaining to the practicals during this period. 
              and also Reflected upon the  roles and responsibilities of different school staff and Critical study of the infrastructural facilities, namely Library , Laboratories, Playground, Canteen, Sports facilities, Seminar Halls, Auditorium etc which are available in the school 
              Wrote a reflective journal on observation of regular class room teaching with respect to pedagogical practices and class room management techniques used by the teachers.`,
              enddate: new Date(2021, 8, 1),
              thumbnail: Ict,
              skills: [
                { name: 'Excel', group: 'Technologies' },
                { name: 'Powerpoint', group: 'Technologies' },
                { name: 'Word', group: 'Technologies' },
                { name: 'Effective goal-setting', group: 'Key Skills' },
                { name: 'Strong Communicator', group: 'Key Skills' },
                { name: 'Confident', group: 'Key Skills' },
                { name: 'Leadership', group: 'Key Skills' },
                { name: 'Engaging', group: 'Key Skills' },

              ],
            },
            {
              name: 'Blessed Chavara Public School,Bangalore',
              thumbnail: Ict,
              info: `Organisation of Co-curricular activities and assisting and participating in the organisation of the same and recording experiences of the same in a reflective journal.Writing a reflective journal on the problems faced by teachers in assessment through the scheme of Continuous and Comprehensive Evaluation by observing the teachers evaluating students and engaging with them to know their problems with respect to implementation of the scheme in their school. 
              and also undertook the field activities pertaining to the practicals during this period.`,
              startdate: new Date(2021, 9, 1),
              current: false,
              enddate: new Date(2021, 11, 1),
              owner: 'Blessed Chavara Public School, Bangalore',
              skills: [
                { name: 'Excel', group: 'Technologies' },
                { name: 'Powerpoint', group: 'Technologies' },
                { name: 'Word', group: 'Technologies' },
                { name: 'Effective goal-setting', group: 'Key Skills' },
                { name: 'Strong Communicator', group: 'Key Skills' },
                { name: 'Confident', group: 'Key Skills' },
                { name: 'Leadership', group: 'Key Skills' },
                { name: 'Engaging', group: 'Key Skills' },


              ]

            }
          ],
          roles: [
            {
              title: 'College Ambassador',
              company: 'Army Institute of education',
              location: 'Grater Noida, Uttar Pradesh, India',
              startdate: new Date(2020, 11, 12),
              current: true,
              positions: [
                { title: 'Training and placement cell Coordinator', startdate: new Date(2020, 11, 12), current: true, },
              ],
              info: `Represented the college in a professional and ethical manner at all times. Assisting with all aspects of college events, including but not limited to: o Set-up, greeting guests, helping with check-in, and clean-up for program events.`
            }, {
              title: 'NSS Cell Member',
              company: 'Army Institute of education',
              location: 'Grater Noida, Uttar Pradesh, India',
              startdate: new Date(2020, 11, 12),
              current: true,
              positions: [
                { title: 'NSS Secretary', startdate: new Date(2020, 11, 12), current: true },
              ],
              info: `Organised various activities regarding creating awareness for road safety, effective use of Ayurveda.
              Acted as an active member of Covid Task force and helped citizens of India with their emergency need related to medicine, vaccine another facilities and warded for the same.`

            }, {
              title: 'Student Editorial Board Member',
              location: 'Grater Noida, Uttar Pradesh, India',
              startdate: new Date(2020, 11, 12),
              current: true,
              company: 'Army Institute of education',
              positions: [
                { title: 'Student editorial board member', startdate: new Date(2020, 11, 12), current: true },
              ],
              info: `Acted as an active member of Student Editorial Board member for session 2020-21 magazine named “Vivaksha”. Contributed articles and also acted as  student editor for articles in magazine.`
            },
            {
              title: 'Training and placement cell Coordinator',
              location: 'Grater Noida, Uttar Pradesh, India',
              startdate: new Date(2020, 11, 12),
              current: true,
              company: 'Army Institute of education',
              positions: [
                { title: 'Class Representative', startdate: new Date(2020, 11, 12), current: true },
              ],
              info: `Being as  member of training and placement cell i have acted as  student coordinator for 02 week Personality Development Programme (PDP) and many more events and helped  in the placement process.`
            }
          ],
          qualifications: [
            {
              name: 'Bachelors of Education(B.ED.)',
              location: 'Army Institute of education',
              startdate: new Date(2020, 8, 1),
              enddate: new Date(),
              image: Aie
            }, {
              name: 'Bachelors of Commerce(B.com.)',
              location: 'Delhi University',
              startdate: new Date(2016, 8, 1),
              enddate: new Date(2019, 7, 1),
              image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Delhi_University%27s_official_logo.png',
            }, {
              name: '12th',
              location: 'Kendriya Vidyalaya, No.4, Delhi Cantt',
              startdate: new Date(2014, 4, 1),
              enddate: new Date(2015, 5, 1),
              image: Cbse
            }, {
              name: '10th',
              location: 'Kendriya Vidyalaya, No.4, Delhi Cantt',
              startdate: new Date(2012, 4, 1),
              enddate: new Date(2013, 31, 1),
              image: Cbse
            }
          ],
          skills: [
            { name: 'Strong Communicator', group: 'Key Skills', level: 90 },
            { name: 'Collaborative', group: 'Key Skills', level: 90 },
            { name: 'Adaptable', group: 'Key Skills', level: 90 },
            { name: 'Effective goal-setting', group: 'Key Skills', level: 90 },
            { name: 'Value the real world learning', group: 'Key Skills', level: 80 },
            { name: 'Leadership', group: 'Key Skills', level: 80 },

            { name: 'Microsoft Office', group: 'Technologies', level: 90 },
            { name: 'Microsoft Office Specialist for Office Excel', group: 'Technologies', level: 90 },
            { name: 'ICT in Education', group: 'Technologies', level: 80 },
          ],
        }}
        page={{
          textColour: '#F44E3B',
          bgColour: 'grey',
          sections: [
            {
              identifier: 'Projects',
              title: 'Projects',
              subTitle: 'These are my own public and private projects.\r\n\r\nSelect a Project for more information.',
              systemUse: 'projects',
            },
            {
              identifier: 'Experience',
              title: 'Experience',
              subTitle: 'My professional experience.',
              bgColour: '#f6f6f6',
              systemUse: 'experience'
            },
            {
              identifier: 'Qualifications',
              title: 'Qualifications',
              subTitle: 'My academic qualifications.',
              systemUse: 'qualifications'
            },
            {
              identifier: 'Skills',
              title: 'Skills',
              subTitle: 'My key skills and technologies.\r\n\r\nClick on a technology to show projects that use it.',
              bgColour: '#f6f6f6',
              systemUse: 'skills'
            },
            {
              identifier: 'About',
              title: 'About',
              content: (
                <div>
                  <p>Highly organized and detail-oriented graduate from Army Institute of Education of Greater Noida
                    .Seeking an entry-level position as a TGT eduactor. Served as a peer tutor for the same.
                    Strong interpersonal skills proven through students satisfaction and peer testimonials.</p>
                </div>
              )
            },
          ],
        }}
      />
    )
  }
}
