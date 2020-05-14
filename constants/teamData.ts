import { TeamCardProps } from 'components/TeamCard'

export const TEAM: TeamCardProps[] = [
  {
    firstName: 'Lukáš',
    lastName: 'Čížek',
    position: 'React developer',
    description:
      "Over 5 years of development expertise in many technologies such as React, Java or Android, and iOS. Lukas is now specialized in frontend development in modern technologies or as a teacher on React academies. Experience in coordinating teams as tech and team leader. Focused on delivering results that follow all today's standards.",
    techs: [
      {
        name: 'react',
        logo: 'images/react.svg',
      },
      {
        name: 'redux',
        logo: 'images/redux.svg',
      },
      {
        name: 'jest',
        logo: 'images/jest.svg',
      },
      {
        name: 'cypress',
        logo: 'images/cypress.svg',
      },
      {
        name: 'aws',
        logo: 'images/aws.png',
      },
      {
        name: 'node',
        logo: 'images/node.png',
      },
    ],
    image: 'images/lukas.png',
    linkedIn: 'https://www.linkedin.com/in/lukascizek/',
  },
  {
    firstName: 'Nikolaj',
    lastName: 'Stepanov',
    position: 'React developer',
    description:
      'Nik is developer wildcard capable of delivering flawless spot-on designs while having experiences in DevOps and Docker orchestration. His 5 years of development experiences has been mainly in huge e-commerce solutions for remote clients.',
    techs: [
      {
        name: 'react',
        logo: 'images/react.svg',
      },
      {
        name: 'redux',
        logo: 'images/redux.svg',
      },
      {
        name: 'docker',
        logo: 'images/docker.png',
      },
      {
        name: 'vue',
        logo: 'images/vue.svg',
      },
      {
        name: 'affinity_designer',
        logo: 'images/affinity_designer.png',
      },
      {
        name: 'figma',
        logo: 'images/figma.png',
      },
      {
        name: 'node',
        logo: 'images/node.png',
      },
    ],
    image: 'images/nik.png',
    linkedIn: 'https://www.linkedin.com/in/nik-stepanov/',
  },
  {
    firstName: 'Jan',
    lastName: 'Königsmark',
    position: 'Senior QA engineer',
    description:
      '3 years of experience with manual and automatization testing used from startups to enterprises. Knowledge of C# for modern SoapUI or JavaScript used in end-to-end testing framework Cypress. Jan has been testing competence leader and mentor for other colleagues.',
    techs: [
      {
        name: 'selenium',
        logo: 'images/selenium.png',
      },
      {
        name: 'cypress',
        logo: 'images/cypress.png',
      },
      {
        name: 'sentry',
        logo: 'images/sentry.png',
      },
      {
        name: 'winston',
        logo: 'images/winston.png',
      },
      { name: 'Enterprise_architect', logo: 'images/enterprise_architect.png' },
      {
        name: 'react',
        logo: 'images/react.svg',
      },
    ],
    image: 'images/honza.png',
    linkedIn: 'https://www.linkedin.com/in/jan-königsmark/',
  },
]
