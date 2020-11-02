import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-project',
  templateUrl: './academic-project.component.html',
  styleUrls: ['./academic-project.component.css'],
})
export class AcademicProjectComponent implements OnInit {
  projects = [
    {
      title: 'MUMDormApp, Maharishi University of Management(2019)',
      description:
        'Created web application as part of 4-member team to enable eCommerce for on campus students, integrate separate microservices through RESTful APIs, and manage payment through PayPal.',
      technology:
        'Technologies Used: Java, Spring Boot, Spring Data JPA, Spring Security, REST, Microservices, Spring MVC, MySQL, JSP, HTML, CSS, Bootstrap, Postman, IntelliJ',
    },
    {
      title:
        'Hotel Smart Reservation System, Maharishi University of Management (2019)',
      description:
        'Designed Java web application with room and member crud functions, explore, reserve, check-in /out, and reviews.',
      technology:
        'Java8, Spring Boot, Spring Data JPA, MVC, MongoDB, Thymeleaf, HTML5, CSS3, Bootstrap, IntelliJ',
    },
    {
      title: 'MUM Recreation Center, Maharishi University of Management (2019)',
      description:
        'Developed Java desktop application including members and resources crud functions, search, check-in /out, and registration.',
      technology:
        'Java8, JSP, JavaScript, jQuery, AJAX, Servlets and Filters, Bootstrap, MySQL, VS Code',
    },
    {
      title: 'InstaMUM, MUM (2019)',
      description:
        'Created Instagram- like social media web application with team of 4 students.',
      technology:
        'Technologies Used: Java, Eclipse JEE, HTML, Thymeleaf, JavaScript, jQuery, AJAX, MVC, Spring Boot, Spring Security, Bootstrap, MySQL, VS Code, Swagger, Docker',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
