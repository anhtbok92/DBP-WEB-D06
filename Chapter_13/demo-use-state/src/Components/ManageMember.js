import React, { useState } from 'react';
import { data } from '../people';

import { List, Avatar, Row, Col, notification, Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const ManageMember = () => {
    const [people, setPeople] = useState(data);

    const removePeople = (id) => {
        const removedData = people.filter((item) => item.id !== id);
        // tuong duong voi this.setState({ people: removedData })
        setPeople(removedData);
        notification['success']({
            message: 'Đã xóa thành viên thành công',
            duration: 3
        });
    }

    const confirm = () => {
        setPeople([]);
        message.success('Đã xóa tất cả thành viên thành công');
    }

    return (
        <>
            <Row style={{ marginTop: 15 }}>
                <Col span={16}>
                    {/*// Tuong duong voi this.state.people.length*/}
                    <h2 style={{ float: 'left', marginLeft: 15 }}>Tổng số thành viên: {people.length}</h2>
                </Col>
                <Col span={8}>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa toàn bộ thành viên không ?"
                        onConfirm={confirm}
                        // onCancel={cancel}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type={'primary'} size={'middle'} style={{ float: 'right', marginRight: 15 }}>
                            Xóa toàn bộ
                        </Button>
                    </Popconfirm>
                </Col>
            </Row>
            <div
                id="scrollableDiv"
                style={{
                    height: 700,
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid red'
                }}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={people}
                    renderItem={item => (
                        <List.Item style={{ textAlign: 'left' }}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>}
                                description={
                                    <div>
                                        <Row>
                                            <Col>Email Address: </Col>
                                            <Col>{item.email}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Gender: </Col>
                                            <Col>{item.gender}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Street Address: </Col>
                                            <Col>{item.address}</Col>
                                        </Row>
                                    </div>
                                }
                            />
                            <DeleteOutlined onClick={() => removePeople(item.id)} />
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ManageMember;