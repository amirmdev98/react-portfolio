const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Project data
const projects = [
  { name: "Propision", tagline: "Business Proposal Platform" },
  { name: "Metriland", tagline: "Real Estate Analytics" },
  { name: "DaftarFile", tagline: "Document Management System" },
  { name: "Tokenision", tagline: "Blockchain Token Platform" },
  { name: "Sangyab", tagline: "E-commerce Solutions" }
];

// Color schemes
const gradients = [
  { start: "#2a2a72", end: "#470f80" },  // Blue Purple
  { start: "#134e5e", end: "#71b280" },  // Green Teal
  { start: "#cb2d3e", end: "#ef473a" },  // Red Orange
  { start: "#232526", end: "#414345" },  // Dark
  { start: "#3a1c71", end: "#d76d77" }   // Purple Pink
];

// Create directory if it doesn't exist
const outputDir = path.join(__dirname);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Canvas dimensions
const width = 1378;
const height = 527;

// Create a canvas
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Generate images for each project
projects.forEach((project, index) => {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Choose a gradient
  const gradient = gradients[index % gradients.length];
  
  // Create gradient background
  const linearGradient = ctx.createLinearGradient(0, 0, width, height);
  linearGradient.addColorStop(0, gradient.start);
  linearGradient.addColorStop(1, gradient.end);
  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add pattern overlay
  ctx.save();
  ctx.globalAlpha = 0.05;
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      if ((i + j) % 40 === 0) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(i, j, 10, 10);
      }
    }
  }
  ctx.restore();
  
  // Draw project name
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 80px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 5;
  ctx.fillText(project.name, width/2, height/2 - 40);
  
  // Draw tagline
  ctx.font = "30px Arial";
  ctx.shadowBlur = 10;
  ctx.fillText(project.tagline, width/2, height/2 + 40);
  
  // Save image
  const buffer = canvas.toBuffer('image/png');
  const filename = path.join(outputDir, `name-${project.name.toLowerCase()}.png`);
  fs.writeFileSync(filename, buffer);
  
  console.log(`Created: ${filename}`);
});

console.log('All images generated successfully!');
