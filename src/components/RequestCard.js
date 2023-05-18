import { Card } from "react-bootstrap"

export const RequestCard = (data) => {

    return (
        <Card className="card w-75 d-flex justify-content-center ">
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <span className="fs-5 mx-2">{data.request.firstName}</span>
                    <span>{data.request.lastName}</span>
                </Card.Title>
                <Card.Text>
                    <span className="ms-6 text-muted mx-4">Job Title: {data.request.jobTitle}</span>
                    <span className="ms-6 text-muted mx-4">Line Manager: {data.request.lineManager}</span>
                </Card.Text>
                <Card.Text>
                    <span className="ms-6 text-muted mx-4">Start Date: {data.request.startDate}</span>
                    <span className="ms-6 text-muted mx-4">Business Area: {data.request.businessArea}</span>
                </Card.Text>
                <Card.Text>
                    <span className="ms-6 text-muted mx-4">Completed: {data.request.completed ? "Yes" : "No"}</span>
                </Card.Text>
            </Card.Body>
        </Card>
        
    )
}

export default RequestCard