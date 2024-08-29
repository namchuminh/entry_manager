import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';

const Show = () => {
  // Lấy tham số id từ URL
  const { id } = useParams();

  const breadcrumbs = [
    { label: 'Trang Chủ', url: '/' },
    { label: 'Nhóm Đơn Vị', url: '/NhomDonVi' },
    { label: 'Thông Tin', url: '' },
  ];

  const headers = ["#", "Tên", "Cấp Đơn Vị Cấp Trên", "Hành Động"];

  const data = [
    { id: 1, Ten: "Cấp Đơn Vị 1", Cap: "Cấp Đơn Vị 2" },
  ];

  const renderRow = (item, index) => (
    <>
      <td>{index + 1}</td>
      <td>
        {item.Ten}
      </td>
      <td>
        {item.Cap}
      </td>
      <td>
        <Link to={`/xoa/${item.id}`} className="btn btn-danger" style={{ color: 'white' }}>
          <i className="fa-solid fa-trash"></i>
          <span> XÓA</span>
        </Link>
      </td>
    </>
  );


  const headersChucVuSiQuan = ["#", "Tên Chức Vụ", "Hành Động"];
  const dataChucVuSiQuan  = [
    { id: 1, TenChucVu: "Chức vụ sĩ quan 1" },
  ];
  const renderRowChuVuSiQuan = (item, index) => (
    <>
      <td>{index + 1}</td>
      <td>
        {item.TenChucVu}
      </td>
      <td>
        <Link to={`/xoa/${item.id}`} className="btn btn-danger" style={{ color: 'white' }}>
          <i className="fa-solid fa-trash"></i>
          <span> XÓA</span>
        </Link>
      </td>
    </>
  );


  const headersChucVuQuanNhan = ["#", "Tên Chức Vụ",  "Hành Động"];
  const dataChucVuQuanNhan = [
    { id: 1, TenChucVu: "Chức vụ quân nhân 1" },
  ];
  const renderRowChucVuQuanNhan = (item, index) => (
    <>
      <td>{index + 1}</td>
      <td>
        {item.TenChucVu}
      </td>
      <td>
        <Link to={`/xoa/${item.id}`} className="btn btn-danger" style={{ color: 'white' }}>
          <i className="fa-solid fa-trash"></i>
          <span> XÓA</span>
        </Link>
      </td>
    </>
  );

  

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="content-wrapper" style={{ minHeight: '1203.31px' }}>
      <ContentHeader title='Thông Tin' breadcrumbs={breadcrumbs} />
      <section className="content">
        <div className="container-fluid">
          <div className="card card-default">
            {/* /.card-header */}
            <div className="card-body">
              <form method="post" encType="multipart/form-data">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="tenNhom">Tên Nhóm</label>
                      <input type="text" className="form-control" id="tenNhom" name="tenNhom" placeholder='Tên nhóm đơn vị' required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="ghiChu">Ghi Chú</label>
                      <textarea type="text" rows={3} className="form-control" id="ghiChu" name="ghiChu" placeholder='Ghi chú' required />
                    </div>
                  </div>
                </div>
                <Link className="btn btn-success mr-2" to="/NhomDonVi">Quay Lại</Link>
                <button className="btn btn-primary">Sửa Nhóm Đơn Vị</button>
              </form>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>

      <div className='container-fluid'>
        <div className="row">
          <section className="content col-md-7">
            <Table headers={headers} renderRow={renderRow} data={data} addPath={`/NhomDonVi/${id}/CapDonVi/them`} addText="Thêm Cấp Đơn Vị" search={false} />
          </section>

          <section className="content col-md-5">
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card" style={{ marginBottom: '3px' }}>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                            onClick={() => setActiveTab(1)}
                            href="#!"
                          >
                            Chức Vụ Sĩ Quan
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                            onClick={() => setActiveTab(2)}
                            href="#!"
                          >
                            Chức Vụ Quân Nhân Chuyên Nghiệp
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 1 && (
                <div className="tab-pane fade show active">
                  <Table
                    headers={headersChucVuSiQuan}
                    renderRow={renderRowChuVuSiQuan}
                    data={dataChucVuSiQuan}
                    addPath={`/NhomDonVi/${id}/ChucVuSiQuan/them`}
                    addText="Thêm Chức Vụ"
                    search={false}
                  />
                </div>
              )}
              {activeTab === 2 && (
                <div className="tab-pane fade show active">
                  <Table
                    headers={headersChucVuQuanNhan}
                    renderRow={renderRowChucVuQuanNhan}
                    data={dataChucVuQuanNhan}
                    addPath={`/NhomDonVi/${id}/ChucVuQuanNhan/them`}
                    addText="Thêm Chức Vụ"
                    search={false}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Show;
