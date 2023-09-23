# Star Wars Data Explorer

Star Wars Data Explorer is a React application that allows you to explore data from the Star Wars universe using the [SWAPI](https://swapi.dev/) API. The application features a clean and intuitive user interface, making it easy to navigate and discover information about Star Wars films, planets, and characters.

## Features

- Explore Star Wars films, planets, and characters.
- Filter data based on your search criteria.
- View detailed information about individual films.
- Built with modern web technologies and best practices.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript for improved code quality and tooling.
- **Vite**: A fast build tool and development environment for modern web apps.
- **Redux Toolkit**: A state management library for handling application state.
- **Mantine**: A React component library for quickly building beautiful and accessible UIs.
- **React Query**: A library for managing and caching API data with hooks.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/LTimur/pet-react-ts-starwars.git
2. Change into the project directory:
   ```bash
   cd pet-react-ts-starwars
3. Install the project dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev
5. Open your web browser and visit http://localhost:3000 to view the application.

## Usage

- Click on one of the three categories in the header: Films, Planets, or Characters.
- Use the search input field to filter data based on your search criteria.
- Click on an element in the list to view detailed information.

## Project Folder Structure

The project follows the Feature-Sliced Design architecture to keep code organized and maintainable. Here's a brief overview of the project's folder structure:

- `src/`: The main source code directory.

  - `assets/`: Contains project assets.

  - `components/`: Houses reusable React components.

  - `entities/`: Defines TypeScript models.

  - `features/`: Contains the main functionalities of the application, organized by feature.

  - `shared/`: Contains shared code and functionalities.
