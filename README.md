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

## 🐳 Docker Deployment

### Building and starting the Docker Image

```bash
docker-compose build
docker-compose up -d
```

The application will be available at `http://localhost:4321`

### Stopping the Application

```bash
# Stop and remove containers
docker-compose down
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