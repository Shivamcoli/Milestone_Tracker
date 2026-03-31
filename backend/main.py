from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Milestone(BaseModel):
    title: str
    category: str

milestones= []

@app.post("/milestones")
async def create_milestone(data:Milestone):
    milestones.append(data.model_dump())
    return {"message": "Milestone created successfully"}
    
    
@app.get("/milestones")
async def get_milestones():
    return milestones