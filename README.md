# Paste App

A modern web application for creating, managing, and sharing text snippets and code pastes. Built with React and Redux for efficient state management.

## Features

- ✨ Create and edit text pastes
- 🔍 Search through your pastes
- 📋 Quick copy to clipboard
- 🗑️ Delete unwanted pastes
- 💾 Persistent storage using localStorage
- 🎨 Clean and responsive UI

## Tech Stack

- React + Vite
- Redux Toolkit for state management
- React Router for navigation
- TailwindCSS for styling
- React Icons
- React Hot Toast for notifications

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd pasteapp
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## Usage

- **Create Paste**: Click "Home" and fill in the title and content
- **View Pastes**: Navigate to "Pastes" to see all your saved pastes
- **Search**: Use the search bar to filter pastes by title
- **Edit**: Click the edit icon on any paste to modify it
- **Delete**: Remove unwanted pastes using the delete button
- **Copy**: Quickly copy paste content using the copy button

## Project Structure

```
src/
├── components/
│   ├── Home.jsx       # Create/Edit paste component
│   ├── Paste.jsx      # List all pastes
│   ├── ViewPaste.jsx  # Single paste view
│   └── Navbar.jsx     # Navigation component
├── features/
│   └── pasteSlice.jsx # Redux state management
└── App.jsx            # Main application component
```

## Contributing

Feel free to open issues and pull requests for any improvements.

## License

MIT License
