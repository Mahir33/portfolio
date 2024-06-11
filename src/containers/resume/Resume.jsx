import React from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import  data  from "./utils.js";
import './resume.scss';
import {MdWork} from 'react-icons/md';
import {FaUniversity} from 'react-icons/fa';

function Resume() {
  return (
    <section id="resume" className='resume'>
      <HeaderContent
        headerText = "Resume"
        icon={<BsInfoCircleFill size={40}/>}
    />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--blue-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--blue-theme-sub-text-color)',
                  border : '1.5px solid var(--blue-theme-main-color)'
                }}
                // date="2020 - Present"
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--blue-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}, {item.company}
                  </h3>
                  <h4>
                    {item.timeFrame}
                  </h4>
                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--blue-theme-main-color)"
          >
          {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--blue-theme-sub-text-color)',
                  border : '1.5px solid var(--blue-theme-main-color)'
                }}
                date="2020 - Present"
                icon={<FaUniversity/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--blue-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.subTitle}
                  </h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume;