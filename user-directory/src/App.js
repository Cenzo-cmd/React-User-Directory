import React, { useEffect, useState } from "react";
import './App.css';
import API from "./Utils/API"
import Card from "./components/Card"

// import Wrapper from "./components/Wrapper";


function App() {

  const [employeeData, setEmployeeData] = useState([])

  useEffect(() => {
    API.getEmployees().then(response => {
      setEmployeeData(response.data.results);
    })
  }, []);

  return (


    <div>
      {console.log(employeeData)}
      {/* <img src="..." class="card-img-top" alt="..." /> */}
      {employeeData.map(info =>
        <Card employee={info} />

      )}

    </div>

  );
}

export default App;
