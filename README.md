# Milestone Tracker

> A full-stack application for creating and managing project milestones with a clean, responsive UI built with React and FastAPI.

<div align="center">

[![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python&logoColor=white)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.95+-orange?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://react.dev/)

</div>

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Development](#development)
- [License](#license)

## Features

- Create milestones with title and category
- View all milestones in real-time
- Clean, responsive card-based interface
- Auto-refresh after creating new milestones
- RESTful API for backend integration
- Hot reload for development

## Tech Stack

**Frontend:**
- React 18+ with TypeScript
- Vite (build tool)
- CSS3 for styling

**Backend:**
- FastAPI (Python web framework)
- Uvicorn (ASGI server)
- CORS middleware support

## Prerequisites

Before getting started, make sure you have the following installed:

- **Python** 3.8 or higher
- **Node.js** 16 or higher
- **npm** (comes with Node.js)
- **Git**

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Shivamcoli/Milestone_Tracker.git
cd https://github.com/Shivamcoli/Milestone_Tracker.git
```

### Step 2: Set Up Backend

Navigate to the backend directory and install Python dependencies:

```bash
cd backend
pip install fastapi uvicorn
```

### Step 3: Set Up Frontend

Open a new terminal, navigate to the frontend directory, and install Node dependencies:

```bash
cd frontend
npm install
```

## Usage

### Running the Application

You'll need two terminal windows - one for the backend and one for the frontend.

**Terminal 1 - Start Backend Server:**

```bash
cd backend
uvicorn main:app --reload
```

Server runs at: `http://localhost:8000`

**Terminal 2 - Start Frontend Development Server:**

```bash
cd frontend
npm run dev
```

Application opens at: `http://localhost:5173`

### Using the App

1. Open your browser to `http://localhost:5173`
2. Fill in the milestone form:
   - Enter a title
   - Enter a category
3. Click "Create Milestone"
4. View all your milestones in the list below

## API Reference

### Create Milestone

Create a new milestone with the given title and category.

```http
POST /milestones
```

**Request Body:**
```json
{
  "title": "string",
  "category": "string"
}
```

**Response (Success):**
```
Status: 200
```
```json
{
  "message": "Milestone created successfully"
}
```

**Example using cURL:**
```bash
curl -X POST http://localhost:8000/milestones \
  -H "Content-Type: application/json" \
  -d '{"title": "Launch MVP", "category": "Development"}'
```

### Get All Milestones

Retrieve a list of all milestones.

```http
GET /milestones
```

**Response (Success):**
```
Status: 200
```
```json
[
  {
    "title": "Launch MVP",
    "category": "Development"
  },
  {
    "title": "Beta Testing",
    "category": "QA"
  }
]
```

**Example using cURL:**
```bash
curl http://localhost:8000/milestones
```

## Project Structure

```
milestone-tracker/
├── backend/
│   ├── main.py              # FastAPI application & endpoints
│   └── __pycache__/         # Python cache directory
├── frontend/
│   ├── src/
│   │   ├── App.tsx          # Main React component
│   │   ├── Form.tsx         # Milestone form component
│   │   ├── main.tsx         # Entry point
│   │   ├── App.css          # App styles
│   │   ├── index.css        # Global styles
│   │   ├── api/
│   │   │   └── milestoneApi.tsx  # API client functions
│   │   └── hooks/
│   │       └── UseMilestoneApi.tsx # Custom React hook
│   ├── public/              # Static assets
│   ├── package.json         # Node dependencies
│   ├── vite.config.ts       # Vite configuration
│   └── tsconfig.json        # TypeScript configuration
└── README.md                # This file
```

## Development

### Backend Development

The backend uses FastAPI with automatic documentation:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Frontend Development

The frontend uses Vite for fast development:
- Hot Module Replacement (HMR) for instant updates
- TypeScript for type safety
- Development server on `http://localhost:5173`

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

## Troubleshooting

### Backend won't start
- Ensure Python 3.8+ is installed: `python --version`
- Check if port 8000 is available
- Try using a different port: `uvicorn main:app --reload --port 8001`

### Frontend won't start
- Ensure Node.js 16+ is installed: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check if port 5173 is available

### Can't connect frontend to backend
- Verify both servers are running
- Check browser console for CORS errors
- Ensure backend is running on `http://localhost:8000`

## License

This project is open source and available under the MIT License.

## Support

Have questions or found a bug? Feel free to:
- Check existing issues
- Create a new issue with details about your problem
- Review the API documentation at `http://localhost:8000/docs`
