import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import Table from '../../components/Table'; 

const List = () => {
  const breadcrumbs = [
    { label: 'Trang Chủ', url: '/' },
    { label: 'Nhóm Đơn Vị', url: '' },
  ];

  const headers = ["#", "Tên Nhóm", "Ghi Chú", "Hành Động"];

  const data = [
    { id: 1, TenNhom: "Nhóm 1", GhiChu: 'Đây là nhóm 1' },
  ];

  const renderRow = (item, index) => (
    <>
      <td>{index + 1}</td>
      <td>
        {item.TenNhom}
      </td>
      <td>
        {item.GhiChu}
      </td>
      <td>
        <Link to={`/NhomDonVi/thongtin/${item.id}`} className="btn btn-primary" style={{ color: 'white', marginRight: '5px' }}>
          <i className="fas fa-edit" />
          <span> XEM</span>
        </Link>
        <Link to={`/xoa/${item.id}`} className="btn btn-danger" style={{ color: 'white' }}>
          <i className="fa-solid fa-trash"></i>
          <span> XÓA</span>
        </Link>
      </td>
    </>
  );

  return (
    <div className="content-wrapper" style={{minHeight: '1203.31px'}}>
      <ContentHeader title="Nhóm Đơn Vị" breadcrumbs={breadcrumbs}/>
      <Table headers={headers} renderRow={renderRow} data={data} addPath="/NhomDonVi/them/" addText="Thêm Nhóm Đơn Vị" />
    </div>
  );
};

export default List;
