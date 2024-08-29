import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import { Link } from 'react-router-dom';


const Add = () => {
  const breadcrumbs = [
    { label: 'Trang Chủ', url: '/' },
    { label: 'Nhóm Đơn Vị', url: '/NhomDonVi' },
    { label: 'Thêm Nhóm Đơn Vị', url: '' },
  ];

  return (
    <div className="content-wrapper" style={{ minHeight: '1203.31px' }}>
      <ContentHeader title='Thêm Nhóm Đơn Vị' breadcrumbs={breadcrumbs} />
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
                      <input type="text" className="form-control" id="ghiChu" name="ghiChu" placeholder='Ghi chú' required />
                    </div>
                  </div>
                </div>
                <Link className="btn btn-success mr-2" to="/NhomDonVi">Quay Lại</Link>
                <button className="btn btn-primary">Thêm Nhóm Đơn Vị</button>
              </form>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
    </div>
  );
};

export default Add;
