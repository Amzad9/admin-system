import React, { useState, useEffect, useId } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import Drawer from '../components/Drawer';
import Loader from '../components/Loader';
useDispatch
import { deleteUser, fetchUsers, saveUser } from '../store/action/user';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const id = useId();
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);
    const [drawerId, setDrawerId] = useState("drawer-4");
    const [update, setUpdate] = useState(false)
    const [formData, setFormData] = useState({
        id: id,
        username: "",
        email: "",
        role: "",
    })
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.user.users)
    const isLoading = useSelector((state) => state.user.isLoading)
    console.log(isLoading)
    const onChangehandlers = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const updateUser = (userId) => {
        setDrawerId(userId);
        console.log(userList)
        const userToUpdate = userList.find(user => user.id === userId.id);
        if (userToUpdate) {
            setUpdate(true) // Open the drawer with user data
            setFormData({
                ...formData,
                id: userToUpdate.id,
                username: userToUpdate.username,
                email: userToUpdate.email,
                role: userToUpdate.role
            });
        } else {
            console.error('User not found');
        }
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        dispatch(saveUser(formData, update));
        setUpdate(false)
    };
    const ratingBodyTemplate = (user) => {
        return (
            <>
                <Link to={`${user.id}`} className='btn btn-circle me-2'><GrFormView size="18" /></Link>
                <Link className='btn btn-circle me-2' onClick={() => dispatch(deleteUser(user.id))}><MdOutlineDeleteOutline size="16" /></Link>
                <label htmlFor={drawerId}><span className='btn btn-circle' onClick={() => updateUser(user)}><FaRegEdit /></span></label>
            </>
        )
    };
    return (
        <div>
            <Loader isLoading={isLoading} />
            <div className='flex justify-between mt-4 mb-4'>
                <h4 className='font-medium text-xl'>Users List</h4>
                <div className="flex">
                    <label htmlFor={drawerId} className="drawer-button btn btn-primary">New User</label>
                </div>
            </div>
            <Drawer id={drawerId}>
                <form className="px-0 pe-2 pt-6" onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        name='username'
                        value={formData.username}
                        placeholder="username"
                        className="input input-bordered w-full"
                        required
                        onChange={onChangehandlers}
                    />
                    {errors.username && <p>{errors.username}</p>}
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder="email"
                        className="input input-bordered w-full mt-4"
                        required
                        onChange={onChangehandlers}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    <select
                        className="select select-bordered w-full max-w-xs mt-4"
                        name='role'
                        value={formData.role}
                        onChange={onChangehandlers}
                    >
                        <option disabled selected>Normal</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type='submit' className="btn btn-primary mt-5 w-full">{update ? "Update" : "Submit"}</button>
                </form>
            </Drawer>
            <DataTable value={userList} size='small' paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="username" header="Name" style={{ width: '25%' }}></Column>
                <Column field="email" header="Email" style={{ width: '25%' }}></Column>
                <Column field="role" header="Role" style={{ width: '25%' }}></Column>
                <Column field="" header="Action" body={ratingBodyTemplate}></Column>
            </DataTable>
        </div>
    )
}

export default Home