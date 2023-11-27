import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import "./datatable.scss"

 import { userColumns,userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
function DataTable() {
    const actionColums =[
        {
            field:'action',
            headerName: 'Action',
            width:200,
            renderCell:()=>{
                return (
                    <div className="cellAction">
                      <Link to="/users/test" style={{textDecoration:'none'}}>

                        <div className="viewBtn">View</div>
                      </Link>
                        <div className="deleteBtn">Delete</div>
                    </div>
                )
            }
        }

    ];
  return (
    <div style={{ width: '100%' }} className="datatable">
      <div className="datatableTitle">
        Add the User : 
        <Link to="/users/new" className='link' >
        ADD NEW
        </Link>
      </div>
       
          <DataGrid
            className='datagrid'
            rows={userRows}
            columns={userColumns.concat(actionColums)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 8 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>

  
  )
}

export default DataTable
