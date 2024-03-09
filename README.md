
## Development Notes

### Some things you should know while looking at the code base:
I approached the problem as I would do on a normal work day (except in a hurry). Because of this:
- I prioritized planning more than development. That's how I would normally work. 5 hours was insufficient to get to a place where the code could actually "work" but the general idea of what needs to be done is vaguely defined in the concept.
- The most time spent were in the `docs` folder. See concept.md and the diagrams.
- The codebase actually does not represent well how I normally would code for multiple reasons. Most of the code is from the existing vercel template and I didn't add much code here. You can check the commits after the initial commit to see what I added.
- I prioritzed correctness over performance or any other optimizations

###  ​What my obstacles were during the process and what I would have done if I had more time:
- I would have defined open api schemas and documented all routes contained inside `api`
- I do not have much experience working with relational databases. My experience lies more with event-driven systems - and that meant always doing more NoSQL. However, I have attempted to design the tables nevertheless.
- I am a believer in TDD and I would have written tests first. There are 0 tests here.
- I would have organized the files better and thought about module structure, module naming etc. 
- I ran into issue with knex and I just couldn't get it to work. I found out later that it doesn't work with next.js https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages


## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/14)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [NextAuth.js](https://next-auth.js.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Tremor](https://www.tremor.so)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## Getting Started

The env config file `.env.local` must exist in the root directory. You can use the template present in the root directory `.env.local.example` for the same. 

Finally, run the following commands to start the development server:

```
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.