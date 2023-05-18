import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestCard from "../components/RequestCard" 
import { Container} from "react-bootstrap" 
import {Col, Row} from "react-bootstrap"

const JSON_DB_URL = 'http://localhost:3001/requests';

export const Home = (props) => {
    const [requests, setRequests] = useState([]);
    const [filterBar, setFilterBar] = useState("all");

    useEffect(() => {
        fetchData();
      }, [filterBar]);
    
    const fetchData = async () => {
        try {
            if (filterBar === "all") {
                const response = await axios.get(JSON_DB_URL);
                setRequests(response.data);
            } else {
                const response = await axios.get(JSON_DB_URL+`?businessArea=${filterBar}&completed=false`);
                setRequests(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteRequest = async (id) => {
        try {
            await axios.delete(JSON_DB_URL+`/${id}`);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const toggleCompletedStatus = async (id, completed) => {
        if (completed) {
            return;
        }
    
        try {
            await axios.patch(JSON_DB_URL+`/${id}`, { completed: true });
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilterChange = (event) => {
        setFilterBar(event.target.value);
    };

    return (
        <Container className="mb-4">
            <h1>Home page</h1>

            <label className="mb-3">
                Filter by Business Area:
                <select id="filter" value={filterBar} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                    <option value="Housing">Housing</option>
                    <option value="Care">Care</option>
                </select>
            </label>

            <Row xs={1} md={1} lg={1} className="g-3" >
                {requests.map((request) => (
                    <Col key={request.id}>
                        <RequestCard request={request} />
                        <button className="bg-danger" onClick={() => deleteRequest(request.id)}>
                            Delete
                        </button>
                        <button
                            onClick={() => toggleCompletedStatus(request.id, request.completed)}
                            disabled={request.completed}
                        >
                            {request.completed ? "Completed" : "Mark Completed"}
                        </button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home