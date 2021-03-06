import React from 'react'
import Project from './Project'

const projects = [
  {
    title: 'Auth API',
    summary: 'A CRUD-functioning authentication/authorization API using JSON Web Tokens and an opinionated GraphQL endpoint. Users can create unique accounts, log in and out, and delete their accounts.',
    tech: [
      'TypeScript', 'Apollo Server', 'Node', 'Prisma2 (Migrate)', 'Postgres', 'Docker', 'BCryptjs', 'JWT',
    ],
    demo: 'https://drive.google.com/file/d/1zOqEtA6WHoQzJJETmJy3nmZ7ob0oqy9u/preview',
    repo: 'https://github.com/arrrden/gql-auth-api',
  },
  {
    title: 'XState Video Player',
    summary: 'This is one of my first proper attempts of using a finite state machine to control app state. Users can play and pause the video and drag the progress bar to navigate through the video.',
    tech: [
      'React', 'XState', 'Styled-Components / inline CSS', 'Webpack',
    ],
    demo: 'https://s9php.sse.codesandbox.io/',
    repo: 'https://github.com/arrrden/videoplayer',
  },
  {
    title: 'Apollo/React Calendar',
    summary: 'A simple calendar that parses events from a GraphQL API to a calendar component. Users can create, read, update, and delete events, as well as cycle through months using the UI.',
    tech: [
      'TypeScript', 'React', 'Apollo', 'Node', 'Styled-Components', 'Webpack',
    ],
    demo: 'https://drive.google.com/file/d/1eiy_-kSahI7kw28D-icBHoDfMv2voY3T/preview',
    repo: 'https://github.com/arrrden/calendar',
  },
  {
    title: 'React Audio Player',
    summary: 'A component that extends the html audio element and renders encoded data including the track title, and album art.',
    tech: [
      'React', 'Styled-Components',
    ],
    demo: 'https://w9c0x.csb.app/',
    repo: 'https://github.com/arrrden/audioplayer',
  },
]

export const projArr = projects.map((i, index) => {
  return (
    <Project key={`project_${index}`} title={i.title} summary={i.summary} demo={i.demo} repo={i.repo} />
  )
})
