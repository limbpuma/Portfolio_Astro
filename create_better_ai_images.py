from PIL import Image, ImageDraw, ImageFont
import os

def create_ai_restaurant_image():
    """Crear imagen para AI Restaurant Generator"""
    width, height = 800, 600
    
    # Crear imagen base
    img = Image.new('RGB', (width, height), color=(26, 26, 46))
    draw = ImageDraw.Draw(img)
    
    # Colores
    primary_color = (102, 126, 234)  # Azul
    secondary_color = (104, 117, 245)  # Azul claro
    accent_color = (104, 211, 145)  # Verde
    text_color = (248, 248, 248)  # Blanco
    
    # Fondo con gradiente simulado
    for y in range(height):
        alpha = y / height
        r = int(26 + (22 * alpha))
        g = int(26 + (33 * alpha))
        b = int(46 + (78 * alpha))
        color = (r, g, b)
        draw.line([(0, y), (width, y)], fill=color)
    
    # Contenedor principal
    margin = 50
    draw.rectangle([margin, margin, width-margin, height-margin], outline=primary_color, width=3)
    
    # Título
    try:
        title_font = ImageFont.truetype("arial.ttf", 36)
        subtitle_font = ImageFont.truetype("arial.ttf", 20)
        text_font = ImageFont.truetype("arial.ttf", 16)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        text_font = ImageFont.load_default()
    
    # Título principal
    title = "AI Restaurant Name Generator"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (width - title_width) // 2
    draw.text((title_x, 100), title, fill=primary_color, font=title_font)
    
    # Icono de AI (simulado)
    center_x, center_y = width // 2, height // 2
    
    # Cerebro AI
    draw.ellipse([center_x-60, center_y-40, center_x+60, center_y+40], fill=primary_color)
    draw.ellipse([center_x-40, center_y-25, center_x+40, center_y+25], fill=secondary_color)
    
    # Conexiones neuronales
    for i in range(8):
        angle = i * 45
        import math
        x1 = center_x + 30 * math.cos(math.radians(angle))
        y1 = center_y + 20 * math.sin(math.radians(angle))
        x2 = center_x + 80 * math.cos(math.radians(angle))
        y2 = center_y + 60 * math.sin(math.radians(angle))
        draw.line([(x1, y1), (x2, y2)], fill=accent_color, width=2)
        draw.ellipse([x2-5, y2-5, x2+5, y2+5], fill=accent_color)
    
    # Tecnologías
    tech_y = height - 150
    technologies = ["LangChain", "OpenAI API", "Python", "Streamlit"]
    tech_colors = [primary_color, accent_color, secondary_color, (237, 137, 54)]
    
    tech_x = 100
    for i, (tech, color) in enumerate(zip(technologies, tech_colors)):
        draw.rectangle([tech_x, tech_y, tech_x + 120, tech_y + 30], fill=color)
        text_bbox = draw.textbbox((0, 0), tech, font=text_font)
        text_width = text_bbox[2] - text_bbox[0]
        text_x = tech_x + (120 - text_width) // 2
        draw.text((text_x, tech_y + 8), tech, fill=text_color, font=text_font)
        tech_x += 140
    
    # Descripción
    desc = "AI-Powered Restaurant Naming Solution"
    desc_bbox = draw.textbbox((0, 0), desc, font=subtitle_font)
    desc_width = desc_bbox[2] - desc_bbox[0]
    desc_x = (width - desc_width) // 2
    draw.text((desc_x, height - 80), desc, fill=(160, 174, 192), font=subtitle_font)
    
    return img

def create_genius_ai_image():
    """Crear imagen para Genius AI App"""
    width, height = 800, 600
    
    # Crear imagen base
    img = Image.new('RGB', (width, height), color=(15, 15, 35))
    draw = ImageDraw.Draw(img)
    
    # Colores
    primary_color = (102, 126, 234)  # Azul
    secondary_color = (118, 75, 162)  # Púrpura
    accent_color = (240, 147, 251)  # Rosa
    text_color = (248, 248, 248)  # Blanco
    
    # Fondo con gradiente simulado
    for y in range(height):
        alpha = y / height
        r = int(15 + (10 * alpha))
        g = int(15 + (10 * alpha))
        b = int(35 + (20 * alpha))
        color = (r, g, b)
        draw.line([(0, y), (width, y)], fill=color)
    
    # Contenedor principal
    margin = 50
    draw.rectangle([margin, margin, width-margin, height-margin], outline=primary_color, width=3)
    
    # Título
    try:
        title_font = ImageFont.truetype("arial.ttf", 42)
        subtitle_font = ImageFont.truetype("arial.ttf", 18)
        text_font = ImageFont.truetype("arial.ttf", 14)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        text_font = ImageFont.load_default()
    
    # Título principal
    title = "Genius AI App"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (width - title_width) // 2
    draw.text((title_x, 80), title, fill=accent_color, font=title_font)
    
    # Cerebro central con círculos concéntricos
    center_x, center_y = width // 2, height // 2 - 20
    
    # Círculos concéntricos
    draw.ellipse([center_x-80, center_y-60, center_x+80, center_y+60], fill=primary_color, outline=None)
    draw.ellipse([center_x-60, center_y-45, center_x+60, center_y+45], fill=secondary_color, outline=None)
    draw.ellipse([center_x-40, center_y-30, center_x+40, center_y+30], fill=accent_color, outline=None)
    
    # Módulos de funcionalidad
    modules = [
        {"name": "💬 Chat", "x": 120, "y": 350, "color": (66, 153, 225)},
        {"name": "⚡ Code", "x": 280, "y": 350, "color": (72, 187, 120)},
        {"name": "🎨 Images", "x": 440, "y": 350, "color": (159, 122, 234)},
        {"name": "🎵 Audio", "x": 600, "y": 350, "color": (237, 137, 54)}
    ]
    
    for module in modules:
        # Rectángulo del módulo
        draw.rectangle([module["x"]-40, module["y"]-30, module["x"]+40, module["y"]+30], 
                      fill=module["color"])
        
        # Texto del módulo
        text_bbox = draw.textbbox((0, 0), module["name"], font=text_font)
        text_width = text_bbox[2] - text_bbox[0]
        text_x = module["x"] - text_width // 2
        draw.text((text_x, module["y"] - 8), module["name"], fill=text_color, font=text_font)
        
        # Línea de conexión al cerebro
        draw.line([(center_x, center_y + 40), (module["x"], module["y"] - 30)], 
                 fill=module["color"], width=2)
    
    # Tecnologías
    tech_y = height - 120
    technologies = ["Next.js", "OpenAI", "TypeScript", "Prisma", "Tailwind"]
    tech_colors = [(49, 130, 206), (56, 161, 105), (128, 90, 213), (214, 158, 46), (229, 62, 62)]
    
    tech_x = 80
    for i, (tech, color) in enumerate(zip(technologies, tech_colors)):
        draw.rectangle([tech_x, tech_y, tech_x + 100, tech_y + 25], fill=color)
        text_bbox = draw.textbbox((0, 0), tech, font=text_font)
        text_width = text_bbox[2] - text_bbox[0]
        text_x = tech_x + (100 - text_width) // 2
        draw.text((text_x, tech_y + 6), tech, fill=text_color, font=text_font)
        tech_x += 120
    
    # Descripción
    desc1 = "Multi-Purpose AI Application Suite"
    desc2 = "Powered by Advanced Machine Learning Models"
    
    desc1_bbox = draw.textbbox((0, 0), desc1, font=subtitle_font)
    desc1_width = desc1_bbox[2] - desc1_bbox[0]
    desc1_x = (width - desc1_width) // 2
    draw.text((desc1_x, height - 80), desc1, fill=(160, 174, 192), font=subtitle_font)
    
    desc2_bbox = draw.textbbox((0, 0), desc2, font=text_font)
    desc2_width = desc2_bbox[2] - desc2_bbox[0]
    desc2_x = (width - desc2_width) // 2
    draw.text((desc2_x, height - 50), desc2, fill=(113, 128, 150), font=text_font)
    
    return img

def main():
    print("Creando imágenes AI mejoradas...")
    
    # Crear imagen AI Restaurant Generator
    ai_restaurant_img = create_ai_restaurant_image()
    ai_restaurant_path = "public/images/ai_restaurant_generator.webp"
    ai_restaurant_img.save(ai_restaurant_path, 'WebP', quality=95)
    print(f"✅ Creada: {ai_restaurant_path}")
    
    # Crear imagen Genius AI App
    genius_ai_img = create_genius_ai_image()
    genius_ai_path = "public/images/genius_ai_app.webp"
    genius_ai_img.save(genius_ai_path, 'WebP', quality=95)
    print(f"✅ Creada: {genius_ai_path}")
    
    print("\n🎉 ¡Imágenes AI creadas exitosamente!")
    print("Las imágenes ahora deberían cargarse correctamente en el portfolio.")

if __name__ == "__main__":
    main()
