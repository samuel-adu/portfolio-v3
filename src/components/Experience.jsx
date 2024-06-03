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
      className="experience-section scroll-m-[var(--space-l)] mb-[var(--space-l)]"
    >
      <h2 className="section-heading">Experience</h2>
      <VerticalTimeline lineColor="var(--bg-secondary)">
        {experience.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              date={item.date}
              icon={item.icon}
              iconStyle={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--clr-text)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  var(--bg-secondary)',
              }}
              contentStyle={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--clr-text)',
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.company}</p>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
