import React, { useState, useEffect } from 'react';

import "./index.css"

import { exportToExcel } from '../utils/ExportToExcel';
import { exportFilteredToExcel } from '../utils/ExportToExcel';
const Mca_2 = () => {
    const [students, setStudents] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState(['ID', 'Name', 'Age']); // default selected

    const [allColumns, setAllColumns] = useState([
        'ID',
        'Name',
        'Age',
        'Hostel / Day Scholar',
        'dob',
        'gender',
        'Student Contact',
        'Blood Group',
        'Bus No.',
        '10%',
        '12%',
        'CGPA in UG',
        'CGPA in PG',
        'CURRENT ARREAR',
        'Fathers Name',
        'Fathers Ph.',
        'Fathers Occupation',
        'Mothers Name',
        'Mothers Ph.',
        'Mothers Occupation',
        'Guardian Name',
        'Relationship',
        'Guardian occupation',
        'Guardian Phone No.',
        'Door No. & Street',
        'Town/ Village',
        'Post',
        'Taluk',
        'District',
        'State',
        'Pincode',
        'Country',
        'Email Id (College)',
        'Email Id (Personal)',
        'Licence Number',
        'Passport Number',
        'Aadhaar Number',
        'PAN'
    ]);

    const [newColumn, setNewColumn] = useState('');


    const handleCheckboxChange = (col) => {
        setSelectedColumns((prev) =>
            prev.includes(col)
                ? prev.filter((c) => c !== col)
                : [...prev, col]
        );
    };

    // const allColumns = [
    //     { key: 'ID', label: 'ID' },
    //     { key: 'Name', label: 'Name' },
    //     { key: 'Age', label: 'Age' },
    //     { key: 'Hostel / Day Scholar', label: 'Hostel / Day Scholar' },
    //     { key: 'dob', label: 'DOB' },
    //     { key: 'gender', label: 'Gender' },
    //     { key: 'Student Contact', label: 'Student Contact' },
    //     { key: 'Blood Group', label: 'Blood Group' },
    //     { key: 'Bus No.', label: 'Bus No.' },
    //     { key: '10%', label: '10%' },
    //     { key: '12%', label: '12%' },
    //     { key: 'CGPA in UG', label: 'CGPA in UG' },
    //     { key: 'CGPA in PG', label: 'CGPA in PG' },
    //     { key: 'CURRENT ARREAR', label: 'Current Arrear' },
    //     { key: 'Fathers Name', label: "Father's Name" },
    //     { key: 'Fathers Ph.', label: "Father's Ph." },
    //     { key: 'Fathers Occupation', label: "Father's Occupation" },
    //     { key: 'Mothers Name', label: "Mother's Name" },
    //     { key: 'Mothers Ph.', label: "Mother's Ph." },
    //     { key: 'Mothers Occupation', label: "Mother's Occupation" },
    //     { key: 'Guardian Name', label: 'Guardian Name' },
    //     { key: 'Relationship', label: 'Relationship' },
    //     { key: 'Guardian occupation', label: 'Guardian Occupation' },
    //     { key: 'Guardian Phone No.', label: 'Guardian Phone No.' },
    //     { key: 'Door No. & Street', label: 'Door No. & Street' },
    //     { key: 'Town/ Village', label: 'Town/Village' },
    //     { key: 'Post', label: 'Post' },
    //     { key: 'Taluk', label: 'Taluk' },
    //     { key: 'District', label: 'District' },
    //     { key: 'State', label: 'State' },
    //     { key: 'Pincode', label: 'Pincode' },
    //     { key: 'Country', label: 'Country' },
    //     { key: 'Email Id (College)', label: 'Email (College)' },
    //     { key: 'Email Id (Personal)', label: 'Email (Personal)' },
    //     { key: 'Licence Number', label: 'Licence Number' },
    //     { key: 'Passport Number', label: 'Passport Number' },
    //     { key: 'Aadhaar Number', label: 'Aadhaar Number' },
    //     { key: 'PAN', label: 'PAN' },
    // ];
    // const [selectedColumns, setSelectedColumns] = useState(allColumns.map(c => c.key));
    // const toggleColumn = (key) => {
    //     setSelectedColumns(prev =>
    //         prev.includes(key) ? prev.filter(col => col !== key) : [...prev, key]
    //     );
    // };

    // const filteredData = students.map(student => {
    //     const entry = {};
    //     selectedColumns.forEach(col => {
    //         entry[col] = student[col];
    //     });
    //     return entry;
    // });

    useEffect(() => {
        // Mock data or fetch from API
        const fetchStudents = async () => {
            try {
                const response = await fetch('/students.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText)
                } else {

                    const data = await response.json();
                    setStudents(data);
                }

            } catch (error) {
                console.error('Error fetching students:', error)
            }
        };
        fetchStudents();
    }, []);

    return (
        <>
            <div className='container '>
                <div>
                    <h1>Student Management System</h1>
                </div>

                <div className="accordion accordion-flush shadow-sm border rounded " id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button btn collapsed bg-info text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Export
                            </button>
                        </h2>
                        {/* accordion */}
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="d-flex mb-3">
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        placeholder="Enter new column name"
                                        value={newColumn}
                                        onChange={(e) => setNewColumn(e.target.value)}
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => {
                                            if (newColumn && !allColumns.includes(newColumn)) {
                                                setAllColumns([...allColumns, newColumn]);
                                                setStudents(prev =>
                                                    prev.map(student => ({
                                                        ...student,
                                                        [newColumn]: "" // default value for the new column
                                                    }))
                                                );
                                                setNewColumn('');
                                            }
                                        }}

                                    >
                                        Add Column
                                    </button>
                                </div>

                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                    {/* export specifics */}
                                    <button className="btn btn-primary mb-3" onClick={() => exportFilteredToExcel(students, 'Mca_2_filetered.xlsx', selectedColumns)}>
                                        Export Selected
                                    </button>
                                    {/* export all */}
                                    <button className='btn btn-warning  mb-3' onClick={() => exportToExcel(students, 'Mca_2.xlsx')}>
                                        Export all
                                    </button>
                                </div>
                                {/* selection table */}
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <tbody>
                                            {Array.from({ length: Math.ceil(allColumns.length / 4) }, (_, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {Array.from({ length: 4 }, (_, colIndex) => {
                                                        const index = colIndex * Math.ceil(allColumns.length / 4) + rowIndex;
                                                        const col = allColumns[index];
                                                        return col ? (
                                                            <td key={col} className="px-2">
                                                                <label className="form-check form-check-label">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        checked={selectedColumns.includes(col)}
                                                                        onChange={() => handleCheckboxChange(col)}
                                                                    />
                                                                    {col}
                                                                </label>
                                                            </td>
                                                        ) : (
                                                            <td key={colIndex}></td>
                                                        );
                                                    })}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* data table */}
                <div className="overflow-auto table-responsive" >
                    <table className="table table-striped table-bordered mt-3" >
                        <thead className="table-primary">
                            <tr>
                                {allColumns.map((col, idx) => (
                                    <th key={col} className={idx === 0 ? "sticky-col" : idx === 1 ? "sticky-col-2" : ""}>
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className=''>
                            {students.map((student) => (
                                <tr key={student.ID}>
                                    <td className="sticky-col">{student.ID}</td>
                                    <td className="sticky-col-2">{student.Name}</td>
                                    <td>{student.Age}</td>
                                    <td>{student["Hostel / Day Scholar"]}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.gender}</td>
                                    <td>{student["Student Contact"]}</td>
                                    <td>{student["Blood Group"]}</td>
                                    <td>{student["Bus No."]}</td>
                                    <td>{student["10%"]}</td>
                                    <td>{student["12%"]}</td>
                                    <td>{student["CGPA in UG"]}</td>
                                    <td>{student["CGPA in PG"]}</td>
                                    <td>{student["CURRENT ARREAR"]}</td>
                                    <td>{student["Fathers Name"]}</td>
                                    <td>{student["Fathers Ph."]}</td>
                                    <td>{student["Fathers Occupation"]}</td>
                                    <td>{student["Mothers Name"]}</td>
                                    <td>{student["Mothers Ph."]}</td>
                                    <td>{student["Mothers Occupation"]}</td>
                                    <td>{student["Guardian Name"]}</td>
                                    <td>{student.Relationship}</td>
                                    <td>{student["Guardian occupation"]}</td>
                                    <td>{student["Guardian Phone No."]}</td>
                                    <td>{student["Door No. & Street"]}</td>
                                    <td>{student["Town/ Village"]}</td>
                                    <td>{student.Post}</td>
                                    <td>{student.Taluk}</td>
                                    <td>{student.District}</td>
                                    <td>{student.State}</td>
                                    <td>{student.Pincode}</td>
                                    <td>{student.Country}</td>
                                    <td>{student["Email Id (College)"]}</td>
                                    <td>{student["Email Id (Personal)"]}</td>
                                    <td>{student["Licence Number"]}</td>
                                    <td>{student["Passport Number"]}</td>
                                    <td>{student["Aadhaar Number"]}</td>
                                    <td>{student.PAN}</td>
                                </tr>
                            ))}
                        </tbody>

                        {/* <td>
                            <button onClick={() => window.location.href = `/edit-student/${student.id}`}>Edit</button>
                            <button onClick={() => {dklfn}}>Delete</button>
                            </td> */}
                    </table>
                </div>
            </div >
        </>
    );
};

export default Mca_2;
