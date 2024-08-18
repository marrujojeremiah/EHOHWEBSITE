import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us-section">
      {/* Banner Section */}
      <div className="banner">
        <h2>About Us</h2>
        <h3>40+ Years of Changing Lives</h3>
        <p>We consider it a privilege to love and serve our friends and neighbors.</p>
      </div>

      {/* Additional Content Below the Banner */}
      <div className="history-content">
        <h3>History</h3>
        <p>
          Established in 2015, Esperanza’s Homes of Hope, LLC is a family-run business inspired by 24 years of experience by Esperanza Tapia, 
          the owner of North Cordoba Manor and namesake of this business. Ms. Tapia is the mother of this home’s licensee and 
          was the inspiration behind Esperanza’s Homes of Hope. Ms. Tapia has taught others through the years the value of serving 
          those in need. There is no greater reward than giving your life to help others.
        </p>
        <p>
          We have 23 years of good rapport with Community Care Licensing as well as with our community.
        </p>
        
        <h3>Our Goals</h3>
        <ul>
          <li>To provide persons with developmental disabilities a place to call home</li>
          <li>To provide a home that is comfortable, safe, and secure</li>
          <li>Promote making choices about their lives centered upon their individual needs</li>
          <li>Promote self-esteem and confidence by providing training and assistance with daily living and independent living skills</li>
          <li>Encourage new interests and friendships</li>
          <li>To provide the opportunity and assistance to interact within the community and access community resources</li>
          <li>Promote communication, prevention, and skill building</li>
        </ul>

        <h3>Program Methods</h3>
        <p>
          Esperanza’s Homes of Hope is designed to address two major areas: Management of Maladaptive / Aggressive Behaviors 
          and Personal Skill Building. Consumers with behavioral issues and/or a history of numerous placements present a unique challenge. 
          By addressing the area of Personal Skill Building in concurrence with Management Of Maladaptive/Aggressive Behaviors, 
          the maladaptive can be replaced with Life skills that will help decrease the consumer’s dependence on paid staff and pave 
          the way to a lower level of care.
        </p>

        <h3>Behavior Management Program</h3>
        <p>
          All programs are non-aversive, positive modification of maladaptive behaviors which reinforce responsible behavior to life experiences. 
          The program’s aim is a reduction of maladaptive/aggressive behaviors.
        </p>
        <p>
          After a 30-day review period, the behavior consultant will write a behavioral assessment based on both historical information 
          and current information. The ID team will meet to develop behavioral objectives across settings (home, family, day program, etc.), 
          and representatives from all settings will be invited and expected to participate.
        </p>
        {/* Add more content as needed */}
      </div>
    </section>
  );
}

export default AboutUs;
