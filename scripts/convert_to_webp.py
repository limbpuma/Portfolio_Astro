import os
import subprocess
from pathlib import Path

def svg_to_webp_with_magick(svg_path, webp_path):
    """Convert SVG to WebP using ImageMagick (if available)"""
    try:
        cmd = [
            'magick', 
            str(svg_path), 
            '-resize', '800x600',
            '-quality', '90',
            str(webp_path)
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"Successfully converted {svg_path} to {webp_path}")
            return True
        else:
            print(f"ImageMagick failed: {result.stderr}")
            return False
    except FileNotFoundError:
        print("ImageMagick not found, trying alternative method...")
        return False

def svg_to_webp_with_pillow(svg_path, webp_path):
    """Convert SVG to WebP using Pillow and cairosvg"""
    try:
        import cairosvg
        from PIL import Image
        import io
        
        # Convert SVG to PNG bytes
        png_data = cairosvg.svg2png(url=str(svg_path), output_width=800, output_height=600)
        
        # Convert PNG bytes to WebP
        img = Image.open(io.BytesIO(png_data))
        img.save(str(webp_path), 'WebP', quality=90)
        
        print(f"Successfully converted {svg_path} to {webp_path}")
        return True
    except ImportError as e:
        print(f"Required libraries not available: {e}")
        return False
    except Exception as e:
        print(f"Conversion failed: {e}")
        return False

def create_webp_placeholder(webp_path, width=800, height=600, color=(26, 26, 46)):
    """Create a simple colored placeholder if conversion fails"""
    try:
        from PIL import Image, ImageDraw, ImageFont
        
        # Create base image
        img = Image.new('RGB', (width, height), color)
        draw = ImageDraw.Draw(img)
        
        # Determine which project this is
        filename = Path(webp_path).stem
        if 'restaurant' in filename:
            text = "AI Restaurant\nName Generator"
            subtitle = "LangChain + OpenAI"
        else:
            text = "Genius AI App"
            subtitle = "Multi-Purpose AI Suite"
        
        # Try to use a font, fallback to default
        try:
            font_large = ImageFont.truetype("arial.ttf", 40)
            font_small = ImageFont.truetype("arial.ttf", 20)
        except:
            font_large = ImageFont.load_default()
            font_small = ImageFont.load_default()
        
        # Calculate text position
        text_bbox = draw.textbbox((0, 0), text, font=font_large)
        text_width = text_bbox[2] - text_bbox[0]
        text_height = text_bbox[3] - text_bbox[1]
        
        x = (width - text_width) // 2
        y = (height - text_height) // 2 - 50
        
        # Draw main text
        draw.text((x, y), text, fill=(102, 126, 234), font=font_large, align='center')
        
        # Draw subtitle
        subtitle_bbox = draw.textbbox((0, 0), subtitle, font=font_small)
        subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
        subtitle_x = (width - subtitle_width) // 2
        subtitle_y = y + text_height + 20
        
        draw.text((subtitle_x, subtitle_y), subtitle, fill=(160, 174, 192), font=font_small)
        
        # Add some decorative elements
        # Draw a border
        draw.rectangle([10, 10, width-10, height-10], outline=(74, 85, 104), width=3)
        
        # Save as WebP
        img.save(str(webp_path), 'WebP', quality=90)
        print(f"Created placeholder image: {webp_path}")
        return True
        
    except ImportError:
        print("Pillow not available for creating placeholder")
        return False
    except Exception as e:
        print(f"Failed to create placeholder: {e}")
        return False

def main():
    images_dir = Path("public/images")
    
    svg_files = [
        "ai_restaurant_generator.svg",
        "genius_ai_app.svg"
    ]
    
    for svg_file in svg_files:
        svg_path = images_dir / svg_file
        webp_path = images_dir / svg_file.replace('.svg', '.webp')
        
        print(f"\nProcessing {svg_file}...")
        
        # Try different conversion methods
        success = False
        
        if svg_path.exists():
            # Method 1: Try ImageMagick
            success = svg_to_webp_with_magick(svg_path, webp_path)
            
            # Method 2: Try Pillow + cairosvg
            if not success:
                success = svg_to_webp_with_pillow(svg_path, webp_path)
        
        # Method 3: Create placeholder if all else fails
        if not success:
            print(f"Creating placeholder for {svg_file}...")
            success = create_webp_placeholder(webp_path)
        
        if not success:
            print(f"❌ Failed to create {webp_path}")
        else:
            print(f"✅ Successfully created {webp_path}")

if __name__ == "__main__":
    main()
