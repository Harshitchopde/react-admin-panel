import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import "./datatable.scss"

 import { userColumns,userRows } from '../../datatablesource';
function DataTable() {
    const actionColums =[
        {
            field:'action',
            headerName: 'Action',
            width:200,
            renderCell:()=>{
                return (
                    <div className="cellAction">
                        <div className="viewBtn">View</div>
                        <div className="deleteBtn">Delete</div>
                    </div>
                )
            }
        }

    ];
  return (
    <div style={{ width: '100%' }} className="datatable">
       
          <DataGrid
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
