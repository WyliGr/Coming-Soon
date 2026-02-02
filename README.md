# Coming-Soon

⏰ A responsive "Coming Soon" page to display instead of a work-in-progress website

## 📁 Project Structure

```
/
├── frontend/              # Astro frontend application
│   ├── src/               # Source files
│   │   ├── pages/         # Page components (desktop.astro, mobile.astro, index.astro)
│   │   └── styles/        # Global CSS and Tailwind configuration
│   ├── public/            # Static assets (favicons)
│   ├── Dockerfile         # Container configuration
│   └── package.json       # Frontend dependencies
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # This file
```

## 🚀 Features

- **Responsive Design**: Automatically detects device type and redirects to appropriate view
- **Animated Loading Screen**: Smooth transition with spinner animation
- **Random GIF Selection**: Displays random GIFs from a predefined list
- **Interactive Elements**: GIF responds to hover/click events and redirects to GitHub
- **Modern UI**: Uses Tailwind CSS with custom patterns and animations
- **Docker Support**: Ready for containerized deployment

## 🛠️ Technologies

- **Framework**: [Astro](https://astro.build/) - Modern static site builder
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Fonts**: Google Fonts (Bricolage Grotesque, Space Grotesk)
- **Containerization**: Docker

## 📱 Responsive Behavior

The application automatically detects screen size:
- **Desktop (≥768px)**: Redirects to `/desktop` with side-by-side layout
- **Mobile (<768px)**: Redirects to `/mobile` with vertical layout

## 🎨 Customization

### Changing GIFs

To modify the GIFs displayed on the page:

1. Open the appropriate page file:
   - `frontend/src/pages/desktop.astro` (for desktop view)
   - `frontend/src/pages/mobile.astro` (for mobile view)

2. Locate the `gifs` array in the JavaScript section:

```javascript
const gifs = [
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWhsbXVrNG9zejIwOGtvZnBib3B2OTlhcGE2aWpmamFmd2l1bDE5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IQebREsGFRXmo/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXJ3ejJvdGUzNzRkMmYxZWNhczF3NTlvOHpzNWJrMWN1Y2w1aGlraCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ao9DUiTKH60XS/giphy.gif'
];
```

3. Add or remove GIF URLs as needed. The application will randomly select one from the array.

4. **Important**: Make sure to update both files if you want consistent GIFs across desktop and mobile views.

### Changing Text Content

Edit the HTML content in:
- `frontend/src/pages/desktop.astro` - Desktop text content
- `frontend/src/pages/mobile.astro` - Mobile text content

### Changing Styles

Modify the global styles in `frontend/src/styles/global.css` or edit the inline styles in each page component.

## 🔧 Development

### Prerequisites

- Node.js 18+ (recommended: 18.x LTS)
- npm or yarn
- Docker (for containerized development)

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:4321`

### Building for Production

```bash
# Build production version
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker Deployment

### Building the Docker Image

```bash
# From project root
docker-compose build
```

### Running with Docker Compose

```bash
# Start the application
docker-compose up -d
```

The application will be available at `http://localhost:4321`

### Stopping the Application

```bash
# Stop and remove containers
docker-compose down
```

## 📦 Deployment Options

### Option 1: Docker (Recommended)

1. **Build and run with Docker Compose**:
   ```bash
   docker-compose up -d --build
   ```

2. **Access the application**: Open `http://localhost:4321` in your browser

3. **For production**: Consider adding a reverse proxy (Nginx, Traefik) and SSL termination

### Option 2: Static Hosting

1. **Build the static site**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy the `dist/` directory** to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Cloudflare Pages

3. **Example for Netlify/Vercel**:
   - Connect your GitHub repository
   - Set build command: `cd frontend && npm install && npm run build`
   - Set publish directory: `frontend/dist`

### Option 3: Traditional Server

1. **Build the application**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Serve the static files**:
   ```bash
   # Install a simple HTTP server
   npm install -g serve
   
   # Serve the dist directory
   serve frontend/dist -l 4321
   ```

## 🔄 Continuous Deployment

For automated deployments, you can use GitHub Actions or GitLab CI:

### Example GitHub Actions Workflow

```yaml
name: Deploy Coming-Soon

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: cd frontend && npm install
      
      - name: Build
        run: cd frontend && npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --dir=frontend/dist --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🎯 Customization Tips

### Adding More GIFs

1. Find GIF URLs from services like Giphy
2. Add them to the `gifs` array in both desktop and mobile pages
3. Test the random selection by refreshing the page

### Changing Color Scheme

Modify the background colors and patterns in `global.css`:

```css
.custom-pattern {
    background-image: radial-gradient(#181818 2px, transparent 2px);
    background-size: 32px 32px;
    background-color: #121213; /* Change this color */
}
```

### Changing Fonts

Update the Google Fonts import in `global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font&display=swap');
```

Then update the font family classes:

```css
.your-font-class {
    font-family: 'Your-Font', sans-serif;
}
```

## 📝 Notes

- The application uses Astro's static site generation for optimal performance
- All animations are CSS-based for smooth performance
- The responsive redirect happens client-side for faster loading
- GIFs are loaded from external URLs (Giphy) to save bandwidth

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is open source and available under standard open source licenses.
