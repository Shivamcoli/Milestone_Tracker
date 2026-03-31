export async function createMilestone(data: { title: string; category: string }) {
    try{
        const response = await fetch("http://localhost:8000/milestones"
        ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"            },
                body: JSON.stringify(data)
        }
        )
        if(!response.ok){
            throw new Error("Failed to create milestone")
        }
        return await response.json()
    }
    catch(error){
        console.error("Error creating milestone:", error)
        throw error
    }
        
}

export async function getMilestones() {
    try{
        const response = await fetch("http://localhost:8000/milestones")
        if(!response.ok){
            throw new Error("Failed to fetch milestones")
        }
        return await response.json()
    }
    catch(error){
        console.error("Error fetching milestones:", error)
        throw error
    }
    
}