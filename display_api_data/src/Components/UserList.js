
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import Header from "../Module/Header";



const UserList=()=>{
    const [data, setData] = useState([]);
    const navigate=useNavigate();

    // const arr=[];

    useEffect(() => {
        getData();
    })
    const getData = () =>{
        fetch("https://reqres.in/api/users")
            .then((response) =>response.json())
            .then((json)=>{
                setData(json.data)
              })
           
    }
    const show =(item)=>{
        navigate("/Profile",{state:item})
        console.log("item",item)

    }
    return(
        <>
        <Header/>
       <h1>Table Data</h1>
        <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>First_Name </TableCell>
                        <TableCell>Last_Name</TableCell>
                        <TableCell>Avatar</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item,index) => {
                        return(
                        
                            <TableRow key={index} onClick={()=>show(item)}>
                            <TableCell >{item.id}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.first_name}</TableCell>
                            <TableCell>{item.last_name}</TableCell>
                            <TableCell> <img src={item.avatar}></img> 
                            </TableCell>
                        </TableRow>
                        

                        )
                    }
                       
                    )}
                </TableBody>
                {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
         </Table>
        </>
    )

}
export default UserList;