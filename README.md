# Movie Search App

Welcome to the Movie Search App! This React application allows users to search for movies using the TMDB API, view search results, and access additional details about each selected movie.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Code Structure](#code-structure)
- [Testing](#testing)

## Demo

You can check out a live demo of the Movie Search App here [Demo Link](#).

## Features

### User Interface Design

- The application features a clean and user-friendly interface.
- A search bar allows users to enter movie queries.
- Visually appealing display of search results with movie titles and posters.

### API Integration

- Integration with the TMDB API for fetching movie search results.
- Displaying at least 10 search results at a time.

### Movie Details

- Users can select a movie from the search results to view additional details.
- Additional details include the movie's overview, release date, and average rating.

### Error Handling

- Graceful handling of errors, including meaningful error messages when API calls fail or there are no search results.

### Code Structure

- Clean and maintainable code organized following React best practices.
- Utilization of functional components and hooks for code modularity.
  
## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-search-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your TMDB API key:

   ```env
   REACT_APP_API_KEY=YOUR_TMDB_API_KEY
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the app.

## Usage

1. Enter a movie query in the search bar.
2. Real-time search results will be displayed as you type.
3. Click on a movie from the search results to view additional details.

## API Integration

This application integrates with the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) for fetching movie data. Ensure you have an API key from TMDB and add it to your `.env` file.

## Code Structure

The project follows a clean and maintainable code structure using React best practices. Functional components and hooks are used for modularity.

## Testing

Unit tests are written for components and key functions using the Jest and React Testing Library framework. To run tests, use the following command:

```bash
npm test
```
