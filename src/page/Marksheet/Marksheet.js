import React, { useState } from "react";
import "./marksheet.css"
import { useSelector } from "react-redux";

const Marksheet =()=>{
    const {firstName,lastName} =useSelector(state => state.studentName);
    
    const subjects = ['English','Hindi','Maths','History','Geography'];
    const [marks,setMarks] =useState({});
    const [showMarksheet,setShowMarksheet] = useState(false);

    const calculateTotalMarks = ()=>{
        return Object.values(marks).reduce((acc,mark) => acc + Number(mark),0);
    };

    const calculatePercentage =() => {
        const totalMarks =calculateTotalMarks();
        return ((totalMarks /500)* 100).toFixed(2);
    };

    const calculateGrade =() =>{
        const percentage = calculatePercentage();

        if(percentage >= 90){
            return "A+";
        }
        else if(percentage >= 80){
            return "A";
        }
        else if(percentage >= 70){
            return "B";
        }
        else if(percentage >= 60){
            return "C";
        }
        else if(percentage >= 50){
            return "D";
        }
        else if(percentage >= 35){
            return "E";
        }
        else{
            return "F";
        }
    };

    const handleSubmit =() =>{

        const isValid = Object.values(marks).every((mark) => mark >=0 && mark <=100);

        if(isValid){
            setShowMarksheet(true);
        }
        else{
            alert('Please Enter valid Marks between 0 to 100 for all subjects')
        }
    };
    
    return(
        <div className="marksheet-section">
            <h1>Marksheet Screen</h1>
            <h2>Student : {firstName} {lastName}</h2>
            {showMarksheet ? (
                <div>
                    <h2>Date : {new Date().toLocaleDateString()}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Subjects</th>
                                <th>Total Marks</th>
                                <th>Passing Marks</th>
                                <th>Marks Obtained</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject)=>(
                                <tr key={subject}>
                                    <td>{subject}</td>
                                    <td>100</td>
                                    <td>35</td>
                                    <td style ={{color :marks[subject] < 35 ? 'darkred' : 'black'}}>
                                        {marks[subject]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <p>Total Marks Obtained : {calculateTotalMarks()}</p>
                        <p>Percentage : {calculatePercentage()}</p>
                        <p>Result : {calculateGrade() === 'F' ? 'Fail' : 'Pass'}</p>
                        <p>Grade : {calculateGrade()}</p>
                    </div>
                </div>
            ) : (
                <div className="marks-entry">
                    {subjects.map((subject)=>(
                        <div key ={subject} className="marks-form">
                            <td><label>{subject}:</label></td>
                            <input 
                            type="number"
                            value={marks[subject] || ''}
                            onChange={(e)=> setMarks({...marks,[subject]:e.target.value})}
                            />
                        </div>
                    ))}
                    <button className="but" onClick={handleSubmit}>Submit</button>
                </div>
            )};
        </div>
    );
}

export default Marksheet;