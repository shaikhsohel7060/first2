import React from "react";



export const Table = () => {
    return (
        <div>
            <div className="tb">
                <h1>Employee Details</h1>
                <table border={"1px"}>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Joining Date</th>
                        <th>Employee Salary</th>
                        <th>Employee Expereince</th>
                        <th>Employee Age</th>
                    </tr>

                    <tr>
                        <td>Musaddiq</td>
                        <td>2020</td>
                        <td>20000/</td>
                        <td>5-years</td>
                        <td>30</td>
                    </tr>

                    <tr>
                        <td>Ismail</td>
                        <td>2021</td>
                        <td>30000/</td>
                        <td>3-years</td>
                        <td>25</td>
                    </tr>

                    <tr>
                        <td>Razzak</td>
                        <td>2022</td>
                        <td>25000/</td>
                        <td>2-years</td>
                        <td>40</td>
                    </tr>

                    <tr>
                        <td>Sameer</td>
                        <td>2019</td>
                        <td>21000/</td>
                        <td>4-years</td>
                        <td>40</td>
                    </tr>
                </table>
            </div>

        </div >
    )
}
