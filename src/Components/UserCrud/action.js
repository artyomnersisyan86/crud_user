import {DeleteFilled, EditOutlined} from "@ant-design/icons";
import React from "react";

export const Columns = ({
                            onEditUser,
                            onDeleteUser
                        }) => [
    {
        title: "From To",
        render: (record) => (
            <React.Fragment>
                {record.id}
                <br/>
                {record.name}
            </React.Fragment>
        ),
        responsive: ["xs"]
    },
    {
        key: '1',
        title: 'ID',
        dataIndex: 'id',
        responsive: ["sm", "md"]


    }, {
        key: '2',
        title: 'Name',
        dataIndex: 'name',
        responsive: ["sm", "md"]

    },
    {
        key: '3',
        title: 'Email',
        dataIndex: 'email'
    },
    {
        key: '4',
        title: 'Address',
        dataIndex: 'address'
    },
    {
        key: '5',
        title: 'Actions',
        render: (record) => {
            return (
                <>
                    <EditOutlined onClick={() => onEditUser(record)} key={record}/>
                    <DeleteFilled style={{color: "red", marginLeft: '12px'}} onClick={() => onDeleteUser(record)}/>
                </>
            )
        }
    },
]
