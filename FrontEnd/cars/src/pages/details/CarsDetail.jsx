import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function CarsDetail() {
  const [data, setData] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  async function getData() {
    try {
      const res = await axios.get(`http://localhost:3000/cars/${id}`);
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="mains">
      {data && (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Brand: {data.brandName}</Card.Title>
              <Card.Text>Model: {data.modelName}</Card.Text>
              <Card.Text>Year: {data.year}</Card.Text>
              <Card.Text>Color: {data.color}</Card.Text>
              <Button variant="primary" onClick={() => navigate(-1)}>
                Back
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}
