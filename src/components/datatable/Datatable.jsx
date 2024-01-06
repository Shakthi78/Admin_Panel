import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {
  const [item,setItem] = useState(userRows)

  const handleClick = (id) => {
    const remove = item.filter((item) => {
      return item.id !== id
    } )
    setItem(remove)
  }
  
    const actionColumn = [
        {
            field: 'action',
            headerName: "ACTION",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                      <Link to="/users/test" style={{textDecoration: 'none'}}>
                         <div className="viewButton">View</div>
                      </Link>
                          <div className="deleteButton" onClick={()=>handleClick(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]

  return (
    <div className='datatable'>
      <div className="datatableTitle">
      <Link to="/users/new" className='link'>
        Add New user
      </Link>
        
      </div>
        <DataGrid
        className='datagrid'
        rows={item}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 1, pageSize: 10 },
          },
        }}
        pageSizeOptions={[ 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable