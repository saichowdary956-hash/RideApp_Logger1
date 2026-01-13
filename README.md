# DataLogger - Session Time Tracking Application

A web-based application for tracking and logging ride session data with comprehensive condition monitoring, time tracking, and CSV export capabilities.

## Features

### Session Details Tracking
- **Driver Information**: Track driver name and details
- **Annotator**: Record annotator information
- **Date Tracking**: Session date with MM/DD/YYYY format
- **RSU Start Date**: Record RSU (Roadside Unit) start date
- **Vehicle Information**: Track vehicle details
- **RSU Number**: Log RSU identification number
- **Drive ID**: Unique identifier for each drive session
- **RSU Storage**: Storage location information

### Recording Conditions
Track five key condition categories with automatic time tracking:
- **Weather**: Monitor and record weather conditions during the session
- **Road Type**: Track different road types encountered
- **Lighting**: Record lighting conditions
- **Traffic**: Log traffic conditions
- **Speed**: Monitor speed variations

### Time Tracking
- **Session Start/End Times**: Automatic tracking of session duration
- **Condition-Specific Timing**: Individual time tracking for each condition
- **30-Minute Notifications**: Automatic alerts every 30 minutes during active sessions
- **Real-time Display**: Live elapsed time display for active sessions

### Data Management
- **Auto-Save**: Automatic saving of all data to browser local storage
- **CSV Export**: Export session data with proper date/time formatting
- **Data Persistence**: All data persists across page refreshes
- **Auto-Export on Exit**: Automatic CSV export before page unload to prevent data loss

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and JavaScript (no frameworks required)
- **Backend**: Node.js with Express.js
- **Storage**: Browser LocalStorage for client-side data persistence
- **Deployment**: Render.com compatible

## Setup Instructions

### Prerequisites
- Node.js (version 14.0.0 or higher)
- npm (comes with Node.js)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/saichowdary956-hash/RideApp_Logger1.git
   cd RideApp_Logger1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Deployment on Render

### Automatic Deployment

This repository is configured for automatic deployment on Render.com using the included `render.yaml` configuration file.

### Manual Deployment Steps

1. **Create a Render Account**
   - Sign up at [render.com](https://render.com)

2. **Create a New Web Service**
   - Click "New +" and select "Web Service"
   - Connect your GitHub account
   - Select the `saichowdary956-hash/RideApp_Logger1` repository

3. **Configure the Service**
   - **Name**: `rideapp-logger1` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Environment Variables**
   - `NODE_ENV`: `production` (automatically configured via render.yaml)
   - `PORT`: Automatically set by Render (defaults to 10000)

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application

### Health Check

The application includes a health check endpoint at `/health` for monitoring:
```
GET /health
Response: {"status": "OK", "message": "Server is running"}
```

## Usage Instructions

### Starting a Session

1. Fill in the session details:
   - Enter driver name
   - Enter annotator name
   - Select date (MM/DD/YYYY format)
   - Enter RSU start date
   - Enter vehicle information
   - Enter RSU number
   - Enter drive ID
   - Enter RSU storage location

2. **Record Conditions**:
   - Click on condition buttons (Weather, Road Type, Lighting, Traffic, Speed)
   - Select the appropriate condition from the dropdown
   - Time is automatically tracked for each condition

3. **Session Monitoring**:
   - Session start time is automatically recorded
   - Elapsed time is displayed in real-time
   - Receive notifications every 30 minutes
   - Click "End Session" when complete

4. **Export Data**:
   - Click the "Export to CSV" button to download session data
   - CSV includes all session details, conditions, and time tracking
   - Date format in CSV: MM/DD/YYYY
   - Data is also auto-exported before page unload

### Data Persistence

All data is automatically saved to browser local storage:
- Session details persist across page refreshes
- Condition tracking is preserved
- Active session state is maintained
- No data loss on accidental page closure (auto-export triggers)

## File Structure

```
RideApp_Logger1/
├── dataloggers.html      # Main application file
├── index.html            # Redirect page to dataloggers.html
├── server.js             # Express.js server configuration
├── package.json          # Node.js dependencies and scripts
├── package-lock.json     # Dependency lock file
├── render.yaml           # Render deployment configuration
├── .gitignore            # Git ignore rules
├── .env.example          # Environment variables template
└── README.md             # This file
```

## API Endpoints

- `GET /` - Serves the main application (redirects to dataloggers.html)
- `GET /health` - Health check endpoint for monitoring
- All static files served via Express static middleware

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (responsive design)

## License

MIT License - See LICENSE file for details

## Author

saichowdary956-hash

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please create an issue in the GitHub repository.
