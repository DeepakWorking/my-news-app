# ABC News App

## About the Project
ABC News App is a modern, user-friendly news aggregation platform that provides the latest news from various sources. Built with React, TypeScript, and React Query, this application allows users to browse news categories, search for articles, and personalize their news feed preferences. The app is optimized for performance and designed with a fully responsive layout.

## Tech Stack
- **React** - Frontend UI
- **TypeScript** - Type safety and improved developer experience
- **Vite** - Faster builds and development environment
- **React Query** - Efficient API data fetching and caching
- **Tailwind CSS** - Styling and responsive design
- **Docker** - Containerized deployment
- **GitHub Pages** - Static hosting
- **News API** - Fetching news data from multiple sources

## Features
- 🔍 **Search** - Find news articles instantly
- 🏷 **Categories** - Browse news by categories such as Business, Technology, Sports, etc.
- ⭐ **User Preferences** - Save preferred categories and personalize the news feed
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop views
- ⚡ **Fast & Efficient** - Uses React Query for optimized API fetching
- 🌍 **Multiple News Sources** - Aggregates news from top global publishers

## Getting Started
### Clone the Repository
```sh
git clone https://github.com/DeepakWorking/my-news-app.git
cd my-news-app
```

### Install Dependencies
```sh
npm install
```

### Run the Application Locally
```sh
npm run dev
```
The application will be available at `http://localhost:3000`.

## Deployment
### Docker Deployment
1. **Build the Docker Image**
   ```sh
   docker build -t my-news-app .
   ```
2. **Run the Docker Container**
   ```sh
   docker run -p 3000:3000 my-news-app
   ```
   The application will be available at `http://localhost:3000`.

### GitHub Pages Deployment
The application is deployed on GitHub Pages and accessible at:
🔗 **[Live Demo](https://deepakworking.github.io/my-news-app/)**

## License
This project is open-source and available under the [MIT License](LICENSE).

