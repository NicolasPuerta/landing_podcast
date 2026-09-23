from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ChapterBase(BaseModel):
    title: str
    description: str
    season: int
    video_url: Optional[str] = None
    order: int

class Chapter(ChapterBase):
    id: int
    class Config:
        from_attributes = True

class ThemeBase(BaseModel):
    title: str
    category: str
    description: str
    image_url: Optional[str] = None
    order: int

class Theme(ThemeBase):
    id: int
    class Config:
        from_attributes = True


class ContactMessageCreate(BaseModel):
    name: str
    email: str
    message: str

class ContactMessage(ContactMessageCreate):
    id: int
    created_at: datetime
    class Config:
        orm_mode = True
