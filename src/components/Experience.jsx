import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section scroll-m-[var(--spacing-l)] mb-[var(--spacing-m)]"
    >
      <h2 className="section-heading">Experience</h2>
      <VerticalTimeline lineColor="">
        {experience.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              date={item.date}
              icon={item.icon}
              iconStyle={{
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              <h1>{item.title}</h1>
              <p>{item.company}</p>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
