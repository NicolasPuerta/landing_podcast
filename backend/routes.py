from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import models, schemas
from database import get_db

router = APIRouter()

# Eliminado el envío por API de WhatsApp ya que se hará por WhatsApp Web en el Frontend.

# --- CHAPTERS ---
@router.get("/chapters", response_model=List[schemas.Chapter])
def read_chapters(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Chapter).order_by(models.Chapter.order).offset(skip).limit(limit).all()

@router.post("/chapters", response_model=schemas.Chapter)
def create_chapter(chapter: schemas.ChapterBase, db: Session = Depends(get_db)):
    db_chapter = models.Chapter(**chapter.model_dump())
    db.add(db_chapter)
    db.commit()
    db.refresh(db_chapter)
    return db_chapter

@router.delete("/chapters/{chapter_id}")
def delete_chapter(chapter_id: int, db: Session = Depends(get_db)):
    db_chapter = db.query(models.Chapter).filter(models.Chapter.id == chapter_id).first()
    if not db_chapter:
        raise HTTPException(status_code=404, detail="Chapter not found")
    db.delete(db_chapter)
    db.commit()
    return {"ok": True}

# --- THEMES ---
@router.get("/themes", response_model=List[schemas.Theme])
def read_themes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Theme).order_by(models.Theme.order).offset(skip).limit(limit).all()

@router.post("/themes", response_model=schemas.Theme)
def create_theme(theme: schemas.ThemeBase, db: Session = Depends(get_db)):
    db_theme = models.Theme(**theme.model_dump())
    db.add(db_theme)
    db.commit()
    db.refresh(db_theme)
    return db_theme

@router.delete("/themes/{theme_id}")
def delete_theme(theme_id: int, db: Session = Depends(get_db)):
    db_theme = db.query(models.Theme).filter(models.Theme.id == theme_id).first()
    if not db_theme:
        raise HTTPException(status_code=404, detail="Theme not found")
    db.delete(db_theme)
    db.commit()
    return {"ok": True}


# --- CONTACT ---
@router.get("/contact", response_model=List[schemas.ContactMessage])
def read_contact_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.ContactMessage).order_by(models.ContactMessage.created_at.desc()).offset(skip).limit(limit).all()

@router.post("/contact", response_model=schemas.ContactMessage)
def create_contact_message(message: schemas.ContactMessageCreate, db: Session = Depends(get_db)):
    db_message = models.ContactMessage(**message.model_dump())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    
    return db_message
