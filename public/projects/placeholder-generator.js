const fs = require('fs');
const { execSync } = require('child_process');

// Project name placeholders
const projectNames = [
  { title: 'Propision', tagline: 'Business Proposal Platform' },
  { title: 'Metriland', tagline: 'Real Estate Analytics' },
  { title: 'DaftarFile', tagline: 'Document Management System' },
  { title: 'Tokenision', tagline: 'Blockchain Token Platform' },
  { title: 'Sangyab', tagline: 'E-commerce Solutions' }
];

// Generate an HTML file for each project
projectNames.forEach(project => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.title} Placeholder</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .placeholder {
            width: 1378px;
            height: 527px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #2a2a72 0%, #470f80 100%);
            position: relative;
            overflow: hidden;
        }
        .placeholder::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.05),
                rgba(255, 255, 255, 0.05) 10px,
                rgba(255, 255, 255, 0.02) 10px,
                rgba(255, 255, 255, 0.02) 20px
            );
        }
        .content {
            z-index: 1;
            text-align: center;
            padding: 2rem;
        }
        .project-name {
            font-size: 5rem;
            font-weight: 800;
            color: white;
            text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            margin: 0;
            letter-spacing: -1px;
        }
        .tagline {
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.8);
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <div class="placeholder">
        <div class="content">
            <h1 class="project-name">${project.title}</h1>
            <p class="tagline">${project.tagline}</p>
        </div>
    </div>
</body>
</html>`;

  // Create HTML file
  const htmlFileName = `${project.title.toLowerCase()}-placeholder.html`;
  fs.writeFileSync(htmlFileName, html);
  
  // Use browser to render and take screenshot (placeholder)
  console.log(`Created placeholder HTML for ${project.title}`);
});

console.log("HTML files generated successfully!");
console.log("Now you can open these files in a browser and take screenshots to use as project images.");
