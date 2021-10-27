import React from "react";
import {Form, Input, Modal} from "antd";

const Modals = ({newUserFlag, editingUser, isEditing, resetEditing, setDataSource, onAddNewUser, setEditingUser}) => {
    return (
        <Modal title={`${newUserFlag ? 'add new user' : `${editingUser?.name ? editingUser?.name : 'User'}`}`}
               okText='Save'
               visible={isEditing}
               onCancel={() => {
                   resetEditing()
               }}
               onOk={!newUserFlag ? () => {
                   setDataSource((prev => {
                       return prev.map(user => {
                           if (user.id === editingUser.id) {
                               return editingUser
                           } else {
                               return user
                           }
                       })
                   }))
                   resetEditing()
               } : onAddNewUser}

        >
            <Form name="basic"
                  labelCol={{
                      span: 8,
                  }}
                  wrapperCol={{
                      span: 16,
                  }}>
                <Form.Item label="Username">
                    <Input value={editingUser?.name} placeholder={'name'} onChange={e => {
                        setEditingUser(pre => {
                            return {...pre, name: e.target.value}
                        })
                    }}/>

                </Form.Item>
                <Form.Item label="Email">
                    <Input value={editingUser?.email} onChange={e => {
                        setEditingUser(pre => {
                            return {...pre, email: e.target.value}
                        })
                    }}/>
                </Form.Item>
                <Form.Item label="Address">
                    <Input value={editingUser?.address} onChange={e => {
                        setEditingUser(pre => {
                            return {...pre, address: e.target.value}
                        })
                    }}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default Modals