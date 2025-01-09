import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    try {
      const res = await axios.get("http://localhost:3000/cars");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    let filteredData = data.filter((data) => data._id !== id);
    setData(filteredData);
    axios.delete(`http://localhost:3000/cars/${id}`);
  }

  return (
    <>
      <div className="main">
        <Button
          color="purple"
          variant="solid"
          onClick={() => navigate("/addcar")}
        >
          Add Product
        </Button>
        <table id="customers">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr
                key={data._id}
                style={{ backgroundColor: data.isNew ? "green" : "red" }}
              >
                <td>{data.brandName}</td>
                <td>{data.modelName}</td>
                <td>{data.year}</td>
                <td>{data.color}</td>
                <td className="btns">
                  <Button
                    color="cyan"
                    variant="solid"
                    onClick={() => navigate(`/cars/${data._id}`)}
                  >
                    Detail
                  </Button>
                  <Button
                    color="purple"
                    variant="solid"
                    onClick={() => handleDelete(data._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
