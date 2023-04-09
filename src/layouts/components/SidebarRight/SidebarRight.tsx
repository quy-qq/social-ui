import { Menu, MenuProps } from "antd";
import classNames from 'classnames/bind';
import styles from './SidebarRight.module.scss';
import TopUser from "../../../components/TopUser/TopUser";
const cx = classNames.bind(styles)

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Lời mời kết bạn', '1'),
    getItem('Người liên hệ', '2'),
    getItem('Cuộc trò chuyện nhóm', '3'),
];

function SidebarRight() {
    return (
        <div className={cx("wrapper")}>
        <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
        items={items}
        />

    </div>);
}

export default SidebarRight;