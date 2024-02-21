import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function DataTableList({data, deleteUser, updateUser, drawerId }) {
    const dispatch = useDispatch()
    const ratingBodyTemplate = (user) => {
        console.log({user})
        return (
            <>
                <Link to={`${user.id}`} className='btn btn-circle me-2'><GrFormView size="18" /></Link>
                <Link className='btn btn-circle me-2' onClick={() => deleteUser(user.id)}><MdOutlineDeleteOutline size="16" /></Link>
                <label htmlFor={drawerId}><span className='btn btn-circle' onClick={() => updateUser(user)}><FaRegEdit /></span></label>
            </>
        )
    };
  return (
    <>
    <DataTable value={data} size='small' paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
        <Column field="username" header="Name" style={{ width: '25%' }}></Column>
        <Column field="email" header="Email" style={{ width: '25%' }}></Column>
        <Column field="role" header="Role" style={{ width: '25%' }}></Column>
        <Column field="" header="Action" body={ratingBodyTemplate}></Column>
    </DataTable>
    </>
  )
}

export default DataTableList