import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/jobs';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  jobs: Job[];
  showPrev = true;
  showNext = true;

  constructor() {}

  ngOnInit() {
    this.jobs = [
      {
        from: '11/2019',
        to: '08/2020',
        company: 'Cubic Technologies Inc.',
        location: 'Texas',
        direct: true,
        client: 'Verizon',
        role: 'Software Developer',
        tasks: [
          'Developed business components using Spring Boot, Spring Dependency Injection and Spring MVC.',
          'Used Microservices architecture, with Spring Boot-based services interacting through a combination of Rest and Spring Boot.',
          'Developed Microservices to communicate using synchronous protocols HTTP and REST. Exposing the Microservices based on Restful API utilizing Spring Boot with Spring MVC.',
          'Developed build and deployment scripts using Maven as build tools in Jenkins to move from one environment to other environments.',
          'Responsible for configuring Continuous Integration Server i.e. Jenkins and SonarQube.',
          'Developed Java Spring Boot modules that can interact with AWS service to update the documents.',
          'Added microservices to support new features in existing web application (ICON)',
          'Refactored codes and unit tests to ensure code quality, security, and test coverage using SonarQube, JUnit and Mockito.',
          'Written codes following test driven design pattern (TDD) for new features.',
          'Developed stored procedure, function, triggers, and sequence using PL/SQL.',
          'Developed UI screens for new application features using Angular components, templates and services.',
          'Used Log4j along with Splunk for logging error/debug messages and managing them.',
          'Debug existing codes to resolve issues related to telemetry, and inventory consolidation.',
          'Analyzed and updated data in Oracle to expedite IT support for end users ensuring the expected resolution.',
        ],
        technologies: [
          'Java8',
          'Spring Boot',
          'Spring Framework',
          'Kafka',
          'Angular',
          'Apache Tomcat',
          'Apache Log4j',
          'PL/SQL',
          'Oracle',
          'Maven',
          'GitLab',
          'JUnit',
          'Swagger',
          'Postman',
          'SonarQube',
          'Jenkins',
        ],
      },

      {
        from: '06/2017',
        to: '11/2018',
        company: 'Endeavor PVT LTD',
        location: 'Lalitpur, Nepal',
        direct: false,
        client: null,
        role: 'Software Developer',
        tasks: [
          'Analyzed and designed workflow architecture for cafeteria and order management based on different consumer groups.',
          'Developed application using Spring MVC, Maven build tool and with war packaging.',
          'Involved in creating the Hibernate POJO Objects and mapped using Hibernate Annotations.',
          'Designed and developed web application incorporating MVC architecture using spring boot.',
          'Developed responsive UI using Servlets, HTML, CSS, JSP, and JavaScript with back-end integration.',
          'Provided ORM mappings using Hibernate to map java classes with MySQL database tables to access data.',
          'Implemented Java REST APIs with a focus on building quality features using agile methodologies.',
          'Worked with JMS API for sending and receiving messages between 2 or more consumers.',
          'Worked on performance tuning and memory management using JProfiler tool.',
          'Created the online application by using Core Java, JSP, Servlets, Web Services, SOAP, and WSDL.',
          'Followed Singleton, factory design pattern, DAO Design Patterns based on the application requirements.',
          'Implemented DAO layer using JPA (Hibernate framework) to interact with the database.',
          'Responsible for testing controllers with Unit Test Cases & test the Service layer using Integrated Test Cases.',
        ],
        technologies: [
          'Java',
          'JavaScript',
          'AJAX',
          'Bootstrap',
          'HTML5',
          'CSS3',
          'Spring Boot',
          'Spring Security with JWT',
          'Apache Tomcat',
          'MySQL',
          'Maven',
          'GitHub',
        ],
      },

      {
        from: '01/2015',
        to: '01/2017',
        company: 'Crossover Nepal',
        location: 'Lalitpur, Nepal',
        direct: false,
        client: null,
        role: 'Software Developer',
        tasks: [
          'Developed web layer using Struts framework to manage the project in MVC pattern.',
          'Developed business layer using EJB stateless session beans and deployed on Application server (Web logic)',
          'Performed Tuning, load balancing and optimization of WebLogic Application Server',
          'Developed Spring Beans and configured spring using applicationContext.xml.',
          'Assisted Database Developers using MSSQL and TSQL for managing data associated with the tables.',
          'Used Spring Data JPA for entity management and data manipulation.',
          'Configure Hibernate with Spring ORM as part of spring and Hibernate Integration.',
          'Implemented a multi-user web application using JSP, Servlet, JDBC, & Hibernate to provide functionality.',
          'Integrate Web Services and Legacy Systems using SOAP and Rest (Using Axis and Jersey frameworks).',
          'Generated DAO’s to map with database tables using Hibernate. Used HQL (Hibernate Query Language) and Criteria for database querying and retrieval of results.',
          'Involved in J2EE Design Patterns such as Data Transfer Object (DTO), DAO, Value Object, and Template.',
          'Used Log4J, JUnit for debugging, testing and maintaining the system state.',
          'Wrote JUnit Test cases for Spring Controllers and Web Service Clients in Service Layer using Mockito.',
          'Created Rest web services using JAX-RS, Hibernate framework.',
          'Used Dojo toolkit to construct Ajax requests & build dynamic web pages using JSP, HTML, JavaScript',
          'Developed many JSP pages, used Dojo in JavaScript Library, jQuery UI for client-side validation.',
        ],
        technologies: [
          'Java',
          'JavaScript',
          'JSP',
          'MS SQL',
          'HTML5',
          'AJAX',
          'jQuery',
          'CSS3',
          'Spring Boot',
          'Maven',
          'Weblogic',
        ],
      },
    ];
  }
  toggleShow(i: number): void {
    console.log('toggleShow called!');
    if (i === 0) {
      this.showPrev = !this.showPrev;
    } else if (i === this.jobs.length) {
      this.showNext = !this.showNext;
    }
  }
}
