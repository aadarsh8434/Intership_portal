import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

export default function Dashboard() {
    const [appliedOppurtunites, setAppliedOppurtunities] = useState([]);
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        age: '',
        dob: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/auth/verify").then((res) => {
            if (!res.data.status) {
                navigate("/login");
            } else {
                fetchAppliedOppurtunities();
                fetchPersonalDetails();
            }
        });
    }, [navigate]);

    const fetchAppliedOppurtunities = async () => {
        try {
            const response = await axios.get("http://localhost:3000/auth/applied-oppurtunities");
            setAppliedOppurtunities(response.data);
        } catch (error) {
            console.error("Error fetching opportunities:", error);
        }
    };

    const fetchPersonalDetails = async () => {
        try {
            const response = await axios.get("http://localhost:3000/auth/verify");
            setPersonalDetails(response.data.user);
        } catch (error) {
            console.error("Error fetching personal details:", error);
        }
    };

    const handleLogout = () => {
        axios.get("http://localhost:3000/auth/logout")
            .then((res) => {
                if (res.data.status) {
                    navigate("/login");
                }
            }).catch((err) => {
                console.error("Logout error:", err);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({ ...personalDetails, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/auth/update-details", personalDetails);
            alert("Details updated successfully");
        } catch (error) {
            console.error("Error updating details:", error);
        }
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </header>
            <div className="dashboard-content">
                <section className="personal-details-section">
                    <h2 className="section-title">Personal Details</h2>
                    <form onSubmit={handleFormSubmit} className="personal-details-form">
                        <label>
                            Name:
                            <input type="text" name="name" value={personalDetails.name} onChange={handleInputChange} />
                        </label>
                        <label>
                            Age:
                            <input type="number" name="age" value={personalDetails.age} onChange={handleInputChange} />
                        </label>
                        <label>
                            Date of Birth:
                            <input type="date" name="dob" value={personalDetails.dob} onChange={handleInputChange} />
                        </label>
                        <button type="submit">Save Details</button>
                    </form>
                    <div className="personal-details-display">
                        <h3>Current Details</h3>
                        <p><strong>Name:</strong> {personalDetails.name}</p>
                        <p><strong>Age:</strong> {personalDetails.age}</p>
                        <p><strong>Date of Birth:</strong> {personalDetails.dob}</p>
                    </div>
                </section>
                <section className="opportunities-section">
                    <h2 className="section-title">Applied Opportunities</h2>
                    <div className="opportunities-list">
                        {appliedOppurtunites.map((oppurtunity, index) => (
                            <div className="opportunity-card" key={index}>
                                <h2 className="opportunity-profile-name">{oppurtunity.profile_name}</h2>
                                <p><strong>Company:</strong> {oppurtunity.company_name}</p>
                                <p><strong>Stipend:</strong> {oppurtunity.stipend}</p>
                                <p><strong>Duration:</strong> {oppurtunity.duration}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
