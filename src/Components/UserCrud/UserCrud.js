import React, {useCallback, useMemo, useState} from "react";
import {Button, Table, Modal,} from "antd";
import {Columns} from "./action";
import './userCruid.css'
import Modals from "./Modal";
import 'antd/dist/antd.less'

const UserCrud = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [newUserFlag, setNewUserFlag] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [dataSource, setDataSource] = useState([])

    const onAddNewUser = () => {
        const randomId = parseInt(Math.random() * 1000)
        const newUser = {...editingUser, id: randomId}
        setDataSource(prev => [...prev, newUser])
        setIsEditing(false)
        resetEditing()
    }
    const onDeleteUser = useCallback((record) => {
        Modal.confirm({
            title: 'Are you sure, you want to delete this user',
            okText: 'yes',
            okType: 'danger',
            onOk: () => {
                setDataSource(prev => {
                    return prev.filter(user => user.id !== record.id)
                })
            }
        })

    }, [setDataSource])

    const onEditUser = useCallback((record) => {
            setIsEditing(true)
            setEditingUser({...record})
        }
        , [setIsEditing, setEditingUser])
    const resetEditing = useCallback(() => {
        setIsEditing(false);
        setEditingUser(null);
        setNewUserFlag(false)
    }, [setIsEditing, setEditingUser, setNewUserFlag])

    const columns = useMemo(() => Columns({onEditUser, onDeleteUser}), [onEditUser, onDeleteUser])
    const openModal = () => {
        setIsEditing(true);
        setNewUserFlag(true)
    }
    return <div className='App-header'>
        <Button onClick={openModal} style={{marginBottom: '12px', float: 'right'}}>Add New User</Button>
        <Table columns={columns} dataSource={dataSource} rowKey={'id'}/>

        <Modals editingUser={editingUser} isEditing={isEditing} newUserFlag={newUserFlag} onAddNewUser={onAddNewUser}
                resetEditing={resetEditing} setDataSource={setDataSource} setEditingUser={setEditingUser}/>
    </div>
}
export default UserCrud