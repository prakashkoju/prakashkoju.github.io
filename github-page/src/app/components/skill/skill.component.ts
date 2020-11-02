import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillSet = [
    { category: 'Languages', items: [ 'Java', 'C++', 'C', 'PL/SQL']},
    { category: 'Web', items: [ 'HTML5', 'CSS3', 'Bootstrap', 'AJAX', 'jQuery', 'JSP', 'Thymeleaf', 'Servlet', 'Bootstrap', 'JavaScript', 'JSON', 'XML']},
    { category: 'Web Services', items: [ 'REST', 'SOAP']},
    { category: 'Web/App Servers', items: [ 'Tomcat', 'Weblogic', 'WidlFly (Jboss)']},
    { category: 'Frameworks', items: [ 'Spring Framework', 'ORM – Hibernate', 'JPA', 'Spring MVC']},
    { category: 'Databases', items: [ 'MS SQL', 'MySQL', 'MongoDB', 'H2', 'Oracle']},
    { category: 'Design Patterns', items: [ 'Factory', 'Singleton', 'Iterator', 'Facade']},
    { category: 'SDLC', items: [ 'Waterfall', 'Agile/Scrum', 'RAD', 'RUP']},
    { category: 'Tools and Technologies', items: [ 'Maven', 'Git', 'Spring Tool Suite', 'Eclipse', 'NetBeans', 'Visual Studio Code', 'Postman', 'Docker', 'Swagger', 'IntelliJ', 'JIRA', 'RALLY', 'MySQL Workbench', 'JUnit', 'Mockito', 'AWS', 'Jenkins', 'SonarQube', 'SQL Developer', 'Toad', 'Oracle']},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
