import React from 'react';

const Resume = () => {
  return (
    <div className="p-4 bg-gray-100 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">Santosh Sai Gowtham Pasala</h1>
        <div className="flex flex-col sm:flex-row sm:justify-center items-center mt-2 text-sm">
          <a href="mailto:psantoshsaigowtham@gmail.com" className="mx-2 text-blue-500">
            psantoshsaigowtham@gmail.com
          </a>
          <a href="tel:+16696498236" className="mx-2 text-blue-500">
            669 649 8236
          </a>
          <a href="https://www.linkedin.com/in/santoshsaigowtham" className="mx-2 text-blue-500">
            linkedin.com/in/santoshsaigowtham
          </a>
          <a href="https://github.com/pssgowtham" className="mx-2 text-blue-500">
            github.com/pssgowtham
          </a>
        </div>
      </header>

      {/* Section: Education */}
      <Section title="Education">
        <TwoColumnEntry
          left="San Jose State University"
          right="Aug 2022 – May 2024"
          details={['Master of Science, Software Engineering']}
        />
        <TwoColumnEntry
          left="VNR Vignana Jyothi Institute of Engineering & Technology"
          right="Aug 2017 – Jul 2021"
          details={['Bachelor of Science, Computer Science & Engineering']}
        />
      </Section>

      {/* Section: Skills */}
      <Section title="Skills">
        <p><b>Languages & Web Technologies:</b> C++, C, Java, Python, XML, SQL, JavaScript, Shell Script, JSP, Servlets, HTML, CSS, Bootstrap, TypeScript, Tailwind CSS, Redux.</p>
        <p><b>Frameworks:</b> Flask, Express.js, Node.js, Next.js, React.js, Angular.js, Spring Boot, Spring MVC, JUnit.</p>
        <p><b>Databases & Cloud Technologies:</b> SQL, MySQL, MongoDB, NoSQL, PostgreSQL, AWS Redshift, DynamoDB, Firebase, GCP, AWS, Lambda, Kafka, Docker, Kubernetes, Jenkins, Ansible, ELK.</p>
        <p><b>Software Tools & Technologies:</b> Git, JIRA, Linux, Maven, Power BI, Tableau, Spark, REST/SOAP, Android Studio, Swagger, LDAP, OAuth, IAM, Hashicorp Vault, Postman.</p>
      </Section>

      {/* Section: Experience */}
      <Section title="Experience">
        <TwoColumnEntry
          left="Software Engineer, Bose Software Systems -- Remote, USA"
          right="Jul 2024 – Present"
          details={[
            'Designed and maintained responsive web applications using MERN stack, improving user engagement by 35%.',
            'Architected RESTful and GraphQL APIs, reducing response time by 40%.',
            'Implemented authentication protocols with JWT and OAuth2.',
            'Optimized database queries for 99.9% data availability.'
          ]}
        />
        <TwoColumnEntry
          left="Software Analyst, Deloitte -- Hyderabad, India"
          right="Aug 2021 – Aug 2022"
          details={[
            'Developed front-end interfaces with React.js and Node.js, reducing application load time.',
            'Orchestrated CI/CD pipelines with Jenkins, Docker, and Kubernetes.',
            'Conducted load testing to ensure zero downtime.'
          ]}
        />
      </Section>

      {/* Section: Projects */}
      <Section title="Projects">
        <TwoColumnEntry
          left="Airport Management System"
          right={<a href="https://github.com/pssgowtham/Airport-management-system" className="text-blue-500">GitHub</a>}
          details={[
            'Designed a full-stack system using ReactJS, Node.js, and MySQL on AWS RDS.',
            'Optimized page load times by 40% and deployed on Amazon EC2.'
          ]}
        />
        <TwoColumnEntry
          left="Fitness Club Web Application"
          right={<a href="https://github.com/pssgowtham/Fitness-Club-Web-Application" className="text-blue-500">GitHub</a>}
          details={[
            'Built a user-centric fitness app with MEAN stack, enhancing engagement by 30%.',
            'Integrated AWS CloudFront for faster content delivery.'
          ]}
        />
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-3">{title}</h2>
    {children}
  </div>
);

const TwoColumnEntry = ({ left, right, details }) => (
  <div className="mb-4">
    <div className="flex justify-between">
      <h3 className="font-semibold">{left}</h3>
      <span className="text-gray-600 text-sm">{right}</span>
    </div>
    {details && (
      <ul className="list-disc pl-5 text-sm mt-2">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default Resume;
