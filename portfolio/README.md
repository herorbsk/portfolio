# Cybersecurity Portfolio Website

A modern, premium personal portfolio website for a Cybersecurity & Digital Forensics Graduate. Built with HTML5, CSS3, and vanilla JavaScript with a dark cybersecurity theme featuring electric blue accents and subtle animations.

## 🚀 Features

### Design & UI
- **Dark Premium Theme**: Black, deep navy, and electric blue color scheme
- **Modern & Minimal**: Clean layout with professional aesthetics
- **Futuristic Yet Professional**: Subtle animations and interactive elements
- **Fully Responsive**: Desktop, tablet, and mobile optimized
- **Fast Loading**: Optimized performance with semantic HTML

### Pages & Sections

1. **Home** (`index.html`)
   - Compelling hero section with headline
   - Featured expertise cards
   - Statistics dashboard
   - Quick navigation to main sections
   - Call-to-action sections

2. **About Me** (`pages/about.html`)
   - Professional background
   - Passion statement for cybersecurity
   - Career goals and objectives
   - Timeline of education journey
   - Core values and strengths

3. **Skills** (`pages/skills.html`)
   - Digital forensics competencies
   - Network security expertise
   - Penetration testing & ethical hacking
   - System administration skills
   - Programming & scripting languages
   - Professional soft skills
   - Progress bars for proficiency levels

4. **Projects** (`pages/projects.html`)
   - 6 featured security projects with detailed descriptions
   - Academic and coursework projects
   - Tools used and outcomes
   - Tags for quick identification
   - Case studies and research examples

5. **Education & Certifications** (`pages/education.html`)
   - Bachelor's degree details
   - Comprehensive coursework listing
   - Current and in-progress certifications
   - Planned certifications
   - Additional training and workshops
   - Academic highlights and honors

6. **Tools & Technologies** (`pages/tools.html`)
   - Forensics tools with proficiency ratings
   - Network analysis tools
   - Operating systems and Linux distros
   - SIEM and log management platforms
   - Development and scripting languages
   - Virtualization platforms
   - Technology stack summary

7. **Blog & Research** (`pages/blog.html`)
   - Cybersecurity articles and insights
   - Case studies and research papers
   - Publication dates and read times
   - Newsletter subscription
   - Featured article highlighting
   - Multiple article categories

8. **Contact** (`pages/contact.html`)
   - Contact form with validation
   - Multiple contact methods (email, LinkedIn, GitHub, Twitter)
   - Availability status indicators
   - FAQ section
   - Response time information
   - Social media integration

## 📁 Project Structure

```
portfolio/
├── index.html                 # Home page
├── css/
│   └── styles.css            # Main stylesheet with all styling
├── js/
│   └── main.js              # JavaScript for interactivity
├── pages/
│   ├── about.html           # About me page
│   ├── skills.html          # Skills page
│   ├── projects.html        # Projects portfolio
│   ├── education.html       # Education & certifications
│   ├── tools.html           # Tools & technologies
│   ├── blog.html            # Blog & research
│   └── contact.html         # Contact page
└── assets/                  # Folder for images/documents (optional)
```

## 🎨 Customization Guide

### Update Your Information

1. **Home Page** - Edit hero section text and statistics:
   - Update hero title and description
   - Modify expertise badges
   - Update stats numbers (projects, vulnerabilities, tools, years)

2. **About Page** - Personalize your story:
   - Update "Who I Am" section
   - Edit passion statement
   - Modify career goals list
   - Update timeline events
   - Change key strengths

3. **Skills Page** - Customize competencies:
   - Edit skill categories and items
   - Update proficiency levels (Expert/Advanced/Intermediate)
   - Modify progress bar percentages
   - Add or remove skills as needed

4. **Projects Page** - Add your work:
   - Replace project descriptions with your actual projects
   - Update tools used and outcomes
   - Add project links and tags
   - Include your specific achievements

5. **Education Page** - Add your credentials:
   - Update university name and graduation date
   - Edit coursework list
   - Add your actual certifications
   - Update GPA and honors
   - Modify certification status

6. **Tools Page** - List your toolkit:
   - Update tool proficiency levels
   - Modify usage percentages
   - Add or remove tools
   - Update technology stack

7. **Blog Page** - Add your content:
   - Update article titles and descriptions
   - Add publication dates
   - Include read time estimates
   - Add your articles and case studies

8. **Contact Page** - Add contact details:
   - Update email address
   - Add LinkedIn profile URL
   - Update GitHub username
   - Add Twitter/X handle
   - Modify availability status

### Color Customization

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #00d4ff;      /* Electric blue */
    --primary-dark: #0099cc;       /* Darker blue */
    --secondary-color: #ff006e;    /* Pink/magenta */
    --accent-color: #7c3aed;       /* Purple */
    
    --bg-dark: #0a0e27;            /* Main background */
    --bg-secondary: #141829;       /* Secondary background */
    --bg-tertiary: #1f2442;        /* Tertiary background */
    
    --text-primary: #f0f4f8;       /* Main text */
    --text-secondary: #a8b2cc;     /* Secondary text */
    --text-muted: #6b7591;         /* Muted text */
}
```

## 🔧 How to Use

### Local Development

1. Extract the portfolio folder to your desired location
2. Open `index.html` in a web browser
3. All pages are fully functional without a server
4. For best experience, use a modern browser (Chrome, Firefox, Safari, Edge)

### Editing Content

- Open any HTML file in a text editor (VS Code, Sublime, etc.)
- Update the content inside the HTML tags
- Save the file
- Refresh your browser to see changes

### Adding New Sections

1. Create a new page by copying an existing template
2. Update the navigation menu in all pages
3. Maintain consistent styling by using the same CSS classes

### Deploying to Web

1. **GitHub Pages**: Push the folder to a GitHub repository and enable Pages
2. **Netlify**: Drag and drop the portfolio folder
3. **Vercel**: Connect your GitHub repository
4. **Traditional Hosting**: Upload files via FTP to your web server

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px to 1199px
- **Mobile**: 480px to 768px
- **Small Mobile**: Below 480px

## ✨ Key Features Implemented

### Navigation
- Fixed navigation bar with smooth scroll
- Mobile hamburger menu
- Active page highlighting
- Responsive menu toggle

### Interactivity
- Mobile menu toggle with animation
- Smooth scroll behavior
- Form validation
- Counter animations
- Hover effects on cards
- Terminal animation on hero section

### Accessibility
- Semantic HTML5 structure
- ARIA labels where applicable
- Color contrast compliance
- Keyboard navigation support

### Performance
- Minimal external dependencies
- Optimized CSS and JavaScript
- Smooth animations (GPU accelerated)
- Mobile-first responsive design

### SEO
- Semantic HTML structure
- Meta descriptions
- Proper heading hierarchy
- Open Graph ready
- Keyword optimization

## 📝 Content Tips

### For Recruiters
- Clearly highlight relevant experience
- Include specific metrics and achievements
- Show professional progression
- Provide easy contact methods

### For Universities
- Emphasize academic excellence
- Showcase research contributions
- Display certifications
- Highlight leadership and teamwork

### For Cybersecurity Firms
- Detail hands-on project experience
- Show tool proficiency
- Highlight incident response work
- Demonstrate continuous learning commitment

## 🔒 Security & Best Practices

- No sensitive information stored in code
- Contact form handles client-side validation
- Scripts use vanilla JavaScript (no vulnerabilities)
- All links target new tabs appropriately
- HTTPS recommended for production

## 🎯 Next Steps

1. **Update all placeholder content** with your actual information
2. **Add your social media links** (LinkedIn, GitHub, Twitter)
3. **Include real project descriptions** from your experience
4. **Update contact email** with your actual email
5. **Add professional photo** if desired (in assets folder)
6. **Customize colors** to match your personal brand
7. **Test on mobile devices** before publishing
8. **Deploy to web hosting** of your choice

## 📞 Support & Maintenance

- Keep content updated regularly
- Add new blog posts and projects
- Update certifications as you earn them
- Review and update skills periodically
- Maintain links to external profiles

## 📄 License

This portfolio template is provided as-is for personal use. Feel free to customize and deploy as your own professional portfolio.

---

**Built for Cybersecurity Professionals**

A modern, premium portfolio website designed to showcase cybersecurity expertise, digital forensics skills, and professional achievements.
