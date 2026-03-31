import { createMilestone } from "./api/milestoneApi";
import { UseMilestones } from "./hooks/UseMilestoneApi";
import { useState } from "react";
import "./Form.css"


export default function Form() {
    const { milestones, refresh } = UseMilestones();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const textarea = form.querySelector("textarea") as HTMLTextAreaElement;

        const trimmed = textarea.value.trim();

        if (!trimmed) {
            textarea.setCustomValidity("Title cannot be empty");
            textarea.reportValidity();
            return;
        }

        if (trimmed.length < 4) {
            textarea.setCustomValidity("Title must be at least 4 characters");
            textarea.reportValidity();
            return;
        }

        
        textarea.setCustomValidity("");

        try {
            await createMilestone({ title: trimmed, category });
            setTitle("");
            setCategory("");
            refresh();
        } catch (error) {
            console.error(error);
        }
    };
        

    return (
        <div className="form-container">
            <div className="Card1">
            <h2>Milestone Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea
                        placeholder="Enter your milestone here..."
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            e.currentTarget.setCustomValidity("");
                        } }
                        rows={4}
                        required
                    />
                </div>

                <div className="form-group">
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Health">Health</option>
                    </select>
                </div>
                <button type="submit">Create Milestone</button>
            </form>
            </div>
            <div className="Card2">
            <h2>Milestone List</h2>
                {milestones.length === 0 ? (
                    <p>No milestones available.</p>
                ) : (
                    milestones.map((milestone) => (
                        <div key={milestone.id} className="milestone-item">
                            <div className="milestone-content">
                                
                                <div className="milestone-title">
                                    {milestone.title}
                                </div>

                                <div className={`milestone-category ${milestone.category.toLowerCase()}`}>
                                    {milestone.category}
                                </div>

                            </div>
                        </div>
                    ))
                    )
                }
            </div>
        </div>

    )
}