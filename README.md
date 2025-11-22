# Devansh Malhotra - Portfolio Website

Personal portfolio website showcasing my projects, skills, and blog posts about AI, cybersecurity, and software development.

**Live Site**: [devanshmalhotra17.github.io](https://devanshmalhotra17.github.io)

## Features

- **Multi-page Structure**: Separate pages for Home, Projects, Blog, and Contact
- **Dynamic Blog System**: Add new blog posts by editing a single JavaScript file—no HTML files needed
- **Modern Dark Theme**: Clean design with cyan accents (#00bcd4) and smooth animations
- **Fully Responsive**: Works seamlessly on desktop and mobile devices
- **Skills & Projects Showcase**: Highlights technical abilities and current work

## Project Structure
```
├── index.html          # Home page with about, skills, and current projects
├── projects.html       # Portfolio of completed projects
├── devlog.html         # Blog listing page (auto-generated)
├── post.html           # Dynamic blog post template
├── contact.html        # Contact information and links
├── style.css           # All styling for the site
├── blog-data.js        # Blog post content (easy to update!)
└── assets/
    └── profile.jpg     # Profile picture
```
## Deployment

This is a static website that can be deployed to GitHub Pages or any static hosting service.

### Deploy to GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "your commit message"
git push
```

2. Go to your repository settings on GitHub
3. Navigate to **Pages** in the left sidebar
4. Under "Source", select the `main` branch
5. Click **Save**
6. Your site will be live at `https://devanshmalhotra17.github.io`

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/DevanshMalhotra17/DevanshMalhotra17.github.io.git
cd DevanshMalhotra17.github.io
```

2. Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Navigate to `http://localhost:8000` in your browser

### Adding Blog Posts

Edit `blog-data.js` and add new entries to the `blogPosts` array. No build step required—changes go live immediately!

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling with custom properties and animations
- **JavaScript** - Dynamic blog system and interactivity
- **Google Fonts** - Poppins typeface

## Design

- Dark background (#0f0f11) for reduced eye strain
- Cyan accent color (#00bcd4) for highlights and interactive elements
- Card-based layouts with hover animations
- Smooth transitions throughout
- Mobile-first responsive design

## Contact

- **Email**: devanshmalhotra17@gmail.com
- **GitHub**: [@DevanshMalhotra17](https://github.com/DevanshMalhotra17)
- **LinkedIn**: [Devansh Malhotra](https://www.linkedin.com/in/devansh-malhotra-825789314/)
- **Discord**: DevanshMalhotra17


© 2025 Devansh Malhotra. All rights reserved.

---

Built with passion for AI, cybersecurity, and clean code ✨
