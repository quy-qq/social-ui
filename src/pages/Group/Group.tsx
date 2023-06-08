import classNames from 'classnames/bind';
import styles from './Group.module.scss';
import { Button, Card, Space } from 'antd';

const cx = classNames.bind(styles)
const gridStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'left',
};
function Group() {
    return ( 
      <div className={cx("wrapper")}>
      <Card title="Nhóm đã tham gia">
     <Card.Grid style={gridStyle}><div className={cx("box")}>
        <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt=""  />
        <span>Hội những người đẹp trai</span>
  <Space align="end">
    <Button type="primary">Xem</Button>
  </Space>
        </div></Card.Grid>
   <Card.Grid style={gridStyle}><div className={cx("box")}>
        <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt=""  />
        <span>Hội những người xấu</span>
  <Space align="end">
    <Button type="primary">Xem</Button>
  </Space>
        </div></Card.Grid>
      
  </Card>
        </div>
        );
}
export default Group;