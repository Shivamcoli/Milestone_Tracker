import {  useEffect, useState } from "react";
import { getMilestones } from "../api/milestoneApi";

type Milestone = {
    id: number;
    title: string;
    category: string;
};

export  function UseMilestones() {
    const [data, setData] = useState<Milestone[]>([]);
    
    const fetchMilestones = async () => {
        try {
            const milestones = await getMilestones();
            setData(milestones);
        }
        catch(error){
            console.error("Error fetching milestones:", error)
        }   
    }

    useEffect(() => {
        fetchMilestones();
    }, [])
      
    return {        
        milestones: data,
        refresh: fetchMilestones
    };
}

