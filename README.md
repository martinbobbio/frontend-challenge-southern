<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/martinbobbio/frontend-challenge-southern/master/public/images/branding/southern.jpg" width="200">
  <br>
  <br>
  <a href="https://frontend-challenge-southern.vercel.app/">
  Challenge Southern - Frontend
  </a>
  <br>
  <br>
</h1>
<br>

## Description

This project is a frontend application developed using React with TypeScript and ViteJS. It includes two important views: home and list of mars rover photos. The application fetches data from a NASA API.

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/martinbobbio/frontend-challenge-southern
```

2. Install depencencies

```bash
npm install
```

3. Create a .env file in the root directory of the project and add the following environment variables:

```plaintext
VITE_API_URL=<api-url>
VITE_API_KEY=<api-key>
```

Replace <api-url> with the URL of NASA API (https://api.nasa.gov/mars-photos/api/v1) and <api-key> for API_KEY getted in NASA API.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and access the application at http://localhost:3000.

## Libreries used

### Axios

- For fetching information to the API

### SWR

- To better manage requests and have control over their status, in addition to caching information

### DayJS

- For a better way to use dates

### MUI

- To use nice components and fast development

### Styled Components

- For addings styles and reutilication of components

### Font Awesome

- To render icons

## Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to lint the source code.
- `npm run preview`: Builds and previews the production-ready application.
- `npm run test`: Check unit tests.
