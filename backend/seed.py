import json
from sqlalchemy.orm import Session
from database import engine, SessionLocal
import models

def seed_db():
    models.Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    # Check if we already have data
    if db.query(models.Chapter).count() > 0:
        print("Database already seeded")
        db.close()
        return

    # 1. Chapters
    chapters = [
        {"title": "ENTRETENIMIENTO - Comedia", "description": "Tratamos todos los temas con humor para que cada capítulo sea una experiencia fresca y entretenida, sin perder la profundidad del análisis.", "season": 1, "order": 1},
        {"title": "ACTUALIDAD - Redes sociales", "description": "Hablamos sobre temas cotidianos, la farándula y todo lo que está dando de qué hablar en internet — sin filtros, con criterio.", "season": 1, "order": 2},
        {"title": "CINE & TV - Películas y series", "description": "Análisis, opiniones y debate sobre lo más relevante del cine, las series y las telenovelas — con dos perspectivas que no siempre coinciden.", "season": 1, "order": 3}
    ]
    for c in chapters:
        db.add(models.Chapter(**c))

    # 2. Themes (similar to what was in the texts)
    themes = [
        {"title": "Comedia", "category": "Entretenimiento", "description": "Tratamos todos los temas con humor para que cada capítulo sea una experiencia fresca y entretenida, sin perder la profundidad del análisis.", "order": 1},
        {"title": "Redes sociales", "category": "Actualidad", "description": "Hablamos sobre temas cotidianos, la farándula y todo lo que está dando de qué hablar en internet — sin filtros, con criterio.", "order": 2},
        {"title": "Películas y series", "category": "Cine & TV", "description": "Análisis, opiniones y debate sobre lo más relevante del cine, las series y las telenovelas — con dos perspectivas que no siempre coinciden.", "order": 3}
    ]
    for t in themes:
        db.add(models.Theme(**t))

    db.commit()
    db.close()
    print("Database seeded successfully")

if __name__ == "__main__":
    seed_db()
