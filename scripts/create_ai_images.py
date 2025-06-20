#!/usr/bin/env python3
"""
Script to create placeholder images for AI projects in the portfolio
Creates professional-looking SVG images and converts them to WebP format
"""

import os
from pathlib import Path

# Define the images directory
images_dir = Path("public/images")

def create_ai_restaurant_generator_svg():
    """Create SVG for AI Restaurant Name Generator project"""
    svg_content = '''<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#1a1a2e"/>
  
  <!-- Gradient overlay -->
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.1" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#667eea" />
      <stop offset="100%" style="stop-color:#764ba2" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad1)"/>
  
  <!-- Main content area -->
  <rect x="50" y="50" width="700" height="500" rx="20" fill="#16213e" stroke="#4a5568" stroke-width="2"/>
  
  <!-- Header -->
  <rect x="70" y="70" width="660" height="80" rx="10" fill="#2d3748"/>
  <text x="400" y="120" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="url(#textGrad)">AI Restaurant Name Generator</text>
  
  <!-- AI Brain Icon -->
  <circle cx="150" cy="200" r="40" fill="#4299e1" opacity="0.2"/>
  <path d="M130 180 Q130 160 150 160 Q170 160 170 180 Q170 200 160 210 Q150 220 140 210 Q130 200 130 180 Z" fill="#4299e1"/>
  <circle cx="140" cy="185" r="3" fill="#ffffff"/>
  <circle cx="160" cy="185" r="3" fill="#ffffff"/>
  <path d="M140 200 Q150 210 160 200" stroke="#ffffff" stroke-width="2" fill="none"/>
  
  <!-- Restaurant Icon -->
  <rect x="250" y="170" width="60" height="60" rx="5" fill="#f56565" opacity="0.8"/>
  <rect x="265" y="155" width="30" height="15" rx="2" fill="#f56565"/>
  <text x="280" y="205" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="white">🍴</text>
  
  <!-- Arrow -->
  <path d="M330 200 L380 200" stroke="#68d391" stroke-width="4" fill="none"/>
  <polygon points="380,195 390,200 380,205" fill="#68d391"/>
  
  <!-- Generated Name Display -->
  <rect x="420" y="170" width="280" height="60" rx="10" fill="#2d3748" stroke="#68d391" stroke-width="2"/>
  <text x="560" y="195" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#a0aec0">Generated Name:</text>
  <text x="560" y="215" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#68d391">"Bella Vista Bistro"</text>
  
  <!-- Technology badges -->
  <rect x="100" y="280" width="100" height="30" rx="15" fill="#3182ce" opacity="0.8"/>
  <text x="150" y="300" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">LangChain</text>
  
  <rect x="220" y="280" width="100" height="30" rx="15" fill="#38a169" opacity="0.8"/>
  <text x="270" y="300" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">OpenAI API</text>
  
  <rect x="340" y="280" width="80" height="30" rx="15" fill="#805ad5" opacity="0.8"/>
  <text x="380" y="300" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Python</text>
  
  <rect x="440" y="280" width="80" height="30" rx="15" fill="#d69e2e" opacity="0.8"/>
  <text x="480" y="300" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Streamlit</text>
  
  <!-- Code snippet background -->
  <rect x="100" y="340" width="600" height="120" rx="10" fill="#0d1117" stroke="#21262d" stroke-width="1"/>
  <text x="120" y="365" font-family="Monaco, monospace" font-size="12" fill="#7c3aed">def</text>
  <text x="150" y="365" font-family="Monaco, monospace" font-size="12" fill="#f8f8f2"> generate_restaurant_name(cuisine):</text>
  <text x="130" y="385" font-family="Monaco, monospace" font-size="12" fill="#6272a4"># AI-powered name generation</text>
  <text x="130" y="405" font-family="Monaco, monospace" font-size="12" fill="#f8f8f2">prompt = f"Generate creative restaurant name for {cuisine}"</text>
  <text x="130" y="425" font-family="Monaco, monospace" font-size="12" fill="#50fa7b">response</text>
  <text x="185" y="425" font-family="Monaco, monospace" font-size="12" fill="#f8f8f2"> = openai.completions.create(...)</text>
  <text x="130" y="445" font-family="Monaco, monospace" font-size="12" fill="#ff79c6">return</text>
  <text x="175" y="445" font-family="Monaco, monospace" font-size="12" fill="#f8f8f2"> response.choices[0].text</text>
  
  <!-- Footer text -->
  <text x="400" y="520" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#a0aec0">AI-Powered Restaurant Naming Solution</text>
</svg>'''
    
    return svg_content

def create_genius_ai_app_svg():
    """Create SVG for Genius AI App project"""
    svg_content = '''<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#0f0f23"/>
  
  <!-- Gradient overlay -->
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.15" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#f093fb;stop-opacity:0.15" />
    </linearGradient>
    <linearGradient id="textGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#667eea" />
      <stop offset="50%" style="stop-color:#764ba2" />
      <stop offset="100%" style="stop-color:#f093fb" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad2)"/>
  
  <!-- Main container -->
  <rect x="50" y="50" width="700" height="500" rx="25" fill="#1a1a2e" stroke="#4a5568" stroke-width="2"/>
  
  <!-- Header -->
  <rect x="70" y="70" width="660" height="70" rx="15" fill="#16213e"/>
  <text x="400" y="115" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="url(#textGrad2)">Genius AI App</text>
  
  <!-- Central AI Brain -->
  <circle cx="400" cy="220" r="50" fill="#667eea" opacity="0.3"/>
  <circle cx="400" cy="220" r="35" fill="#764ba2" opacity="0.5"/>
  <circle cx="400" cy="220" r="20" fill="#f093fb" opacity="0.7"/>
  
  <!-- Neural network nodes around brain -->
  <circle cx="320" cy="180" r="8" fill="#4299e1"/>
  <circle cx="480" cy="180" r="8" fill="#48bb78"/>
  <circle cx="320" cy="260" r="8" fill="#ed8936"/>
  <circle cx="480" cy="260" r="8" fill="#9f7aea"/>
  <circle cx="360" cy="150" r="6" fill="#38b2ac"/>
  <circle cx="440" cy="150" r="6" fill="#e53e3e"/>
  <circle cx="360" cy="290" r="6" fill="#d69e2e"/>
  <circle cx="440" cy="290" r="6" fill="#38a169"/>
  
  <!-- Connections -->
  <line x1="400" y1="220" x2="320" y2="180" stroke="#4299e1" stroke-width="2" opacity="0.6"/>
  <line x1="400" y1="220" x2="480" y2="180" stroke="#48bb78" stroke-width="2" opacity="0.6"/>
  <line x1="400" y1="220" x2="320" y2="260" stroke="#ed8936" stroke-width="2" opacity="0.6"/>
  <line x1="400" y1="220" x2="480" y2="260" stroke="#9f7aea" stroke-width="2" opacity="0.6"/>
  <line x1="400" y1="220" x2="360" y2="150" stroke="#38b2ac" stroke-width="1" opacity="0.4"/>
  <line x1="400" y1="220" x2="440" y2="150" stroke="#e53e3e" stroke-width="1" opacity="0.4"/>
  <line x1="400" y1="220" x2="360" y2="290" stroke="#d69e2e" stroke-width="1" opacity="0.4"/>
  <line x1="400" y1="220" x2="440" y2="290" stroke="#38a169" stroke-width="1" opacity="0.4"/>
  
  <!-- Feature modules -->
  <!-- Chat Module -->
  <rect x="100" y="300" width="120" height="80" rx="10" fill="#2d3748" stroke="#4299e1" stroke-width="2"/>
  <text x="160" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#4299e1">💬 Chat</text>
  <text x="160" y="345" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">Intelligent</text>
  <text x="160" y="360" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">Conversations</text>
  
  <!-- Code Generation -->
  <rect x="240" y="300" width="120" height="80" rx="10" fill="#2d3748" stroke="#48bb78" stroke-width="2"/>
  <text x="300" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#48bb78">⚡ Code</text>
  <text x="300" y="345" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">Generation</text>
  <text x="300" y="360" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">& Analysis</text>
  
  <!-- Image Generation -->
  <rect x="440" y="300" width="120" height="80" rx="10" fill="#2d3748" stroke="#9f7aea" stroke-width="2"/>
  <text x="500" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#9f7aea">🎨 Images</text>
  <text x="500" y="345" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">AI-Generated</text>
  <text x="500" y="360" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">Artwork</text>
  
  <!-- Music Module -->
  <rect x="580" y="300" width="120" height="80" rx="10" fill="#2d3748" stroke="#ed8936" stroke-width="2"/>
  <text x="640" y="325" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#ed8936">🎵 Audio</text>
  <text x="640" y="345" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">Voice &amp;</text>
  <text x="640" y="360" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#a0aec0">Music AI</text>
  
  <!-- Technology stack -->
  <rect x="150" y="420" width="70" height="25" rx="12" fill="#3182ce" opacity="0.8"/>
  <text x="185" y="437" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="white">Next.js</text>
  
  <rect x="240" y="420" width="70" height="25" rx="12" fill="#38a169" opacity="0.8"/>
  <text x="275" y="437" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="white">OpenAI</text>
  
  <rect x="330" y="420" width="80" height="25" rx="12" fill="#805ad5" opacity="0.8"/>
  <text x="370" y="437" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="white">TypeScript</text>
  
  <rect x="430" y="420" width="70" height="25" rx="12" fill="#d69e2e" opacity="0.8"/>
  <text x="465" y="437" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="white">Prisma</text>
  
  <rect x="520" y="420" width="80" height="25" rx="12" fill="#e53e3e" opacity="0.8"/>
  <text x="560" y="437" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="white">Tailwind</text>
  
  <!-- Connection lines from brain to modules -->
  <line x1="350" y1="250" x2="160" y2="300" stroke="#4299e1" stroke-width="2" opacity="0.3"/>
  <line x1="380" y1="270" x2="300" y2="300" stroke="#48bb78" stroke-width="2" opacity="0.3"/>
  <line x1="420" y1="270" x2="500" y2="300" stroke="#9f7aea" stroke-width="2" opacity="0.3"/>
  <line x1="450" y1="250" x2="640" y2="300" stroke="#ed8936" stroke-width="2" opacity="0.3"/>
  
  <!-- Footer -->
  <text x="400" y="480" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#a0aec0">Multi-Purpose AI Application Suite</text>
  <text x="400" y="500" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#718096">Powered by Advanced Machine Learning Models</text>
</svg>'''
    
    return svg_content

def save_svg_files():
    """Save the SVG files to the images directory"""
    # Create images directory if it doesn't exist
    images_dir.mkdir(exist_ok=True)
    
    # Save AI Restaurant Generator SVG
    ai_restaurant_path = images_dir / "ai_restaurant_generator.svg"
    with open(ai_restaurant_path, 'w', encoding='utf-8') as f:
        f.write(create_ai_restaurant_generator_svg())
    print(f"Created: {ai_restaurant_path}")
    
    # Save Genius AI App SVG
    genius_ai_path = images_dir / "genius_ai_app.svg"
    with open(genius_ai_path, 'w', encoding='utf-8') as f:
        f.write(create_genius_ai_app_svg())
    print(f"Created: {genius_ai_path}")
    
    return ai_restaurant_path, genius_ai_path

if __name__ == "__main__":
    print("Creating AI project images...")
    svg_paths = save_svg_files()
    print("SVG files created successfully!")
    print("\nTo convert to WebP format, run:")
    print("pip install Pillow")
    print("python -c \"")
    print("from PIL import Image")
    print("import cairosvg")
    print("# Convert SVGs to WebP")
    print("for svg_file in ['ai_restaurant_generator.svg', 'genius_ai_app.svg']:")
    print("    png_data = cairosvg.svg2png(url=f'public/images/{svg_file}')")
    print("    img = Image.open(io.BytesIO(png_data))")
    print("    img.save(f'public/images/{svg_file.replace(\".svg\", \".webp\")}', 'WebP', quality=90)")
    print("\"")
