# Mini Time Tracker

A simple web application for tracking time spent on tasks. Built with React,and TypeScript.

## Features

### Core Features
- ✅ **Add Time Entries**: Create entries with task name and hours worked
- ✅ **View Time Entries**: Display all time entries in a list
- ✅ **Total Hours**: Calculate and display total hours worked
- ✅ **Delete Entries**: Remove time entries with one click

### Bonus Features
- ✅ **Live Timer**: Start/stop timer to track active work time
- ✅ **Input Validation**: Validation with error messages

## Stack

- **Frontend**: React  with TypeScript
- **Styling**: CSS
- **State Management**: React useState (prop drilling)
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:YandhileM/mini-time-tracker.git
   cd mini-time-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── TimeEntryForm.tsx    # Form to manually add time entries
│   ├── TimeEntryList.tsx    # Display list of all entries
│   ├── TotalHours.tsx       # Show total hours worked
│   └── Timer.tsx            # Live timer component
├── types/
│   └── types.ts             # TypeScript interfaces
├── App.tsx                  # Main app component
├── index.tsx                 # App entry point
└── styles.css               # Global styles
```

## Usage

### Adding Time Entries
1. **Manual Entry**: Use the form to enter task name and hours
2. **Timer Method**: 
   - Enter task name
   - Click "Start" to begin timing
   - Click "Stop" when finished
   - Click "Save Entry" to log the time

### Input Validation
The app includes validation:
- Task names are required
- Hours must be positive numbers
- Timer requires task name before starting

## Design Decisions & Trade-offs

### Choice: Prop Drilling
**Decision**: Used simple prop drilling instead of Context API or external state management

**Reasoning**:
- App is small with shallow component tree
- Keeps code simple and easy to understand

**Trade-off**: Would need refactoring if app grows significantly

### Validation Strategy
**Decision**: Validate on blur and form submission

**Reasoning**:
- Less intrusive than validating on every keystroke
- Provides timely feedback without being annoying

## What I'd Improve With More Time

### Features
- **Edit Entries**: Allow users to modify existing entries
- **Categories/Tags**: Organize tasks by project or category
- **Time Ranges**: Track start/end times instead of just duration
- **Data Persistence**: Save data to localStorage or backend
- **Export Data**: Export entries to CSV or PDF
- **Time Goals**: Set daily/weekly time goals with progress tracking

### Technical Improvements
- **Better Styling**: More polished UI
- **Testing**: Unit tests for components and validation logic
- **Error Boundaries**: Handle unexpected React errors gracefully
- **Performance**: Memoization for large lists, virtual scrolling
- **Backend Integration**: REST API for data persistence
- **PWA Features**: Offline support, push notifications

### UX Enhancements
- **Keyboard Shortcuts**: Quick actions without mouse
- **Bulk Operations**: Delete multiple entries at once
- **Search/Filter**: Find specific entries quickly
- **Data Visualization**: Charts showing time distribution
- **Time Formatting Options**: Different display formats (decimal vs HH:MM)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---
