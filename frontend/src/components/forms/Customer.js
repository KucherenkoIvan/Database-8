import React from "react"

const Customers = () =>{
    const [inputValue, setInputValue] = useState({
        id: 0,
        FName: "",
        MName: "",
        LName: "",
        Address: "",
        City: "",
        Phone: "",
        DateInSystem: new Date()
    });
    const changeHandler = (event) => {setInputValue({...inputValue, [event.target.name]: event.target.value});}; 
    return (
        <div className="customers">
            <label className="formName">Customers</label>
        </div>
    );
}

export default Customers;