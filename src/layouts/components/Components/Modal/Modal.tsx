import React from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export const Modal = ({ setIsOpen }:any) => {
    const createPostService = async (data:any) => {
        const post = await createPostService(data);
        setIsOpen(false);
    };
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('modal-content')}>
                    <h2>
                        <b>Tạo Bài Viết</b>
                    </h2>
                    <form className={cx('post-form')}>
                        <div className={cx('user')}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="img" />
                            <div className={cx('user-type')}>
                                <b>Nguyen Dinh Quý</b>
                            </div>
                        </div>
                        <input type="text" className={cx('des')} placeholder="Bạn đang nghĩ gì..." />
                        <br />
                        <br />
                        <div className={cx('file-input')}>
                            <input className={cx('file-upload')} type="file" />
                        </div>

                        <div className={cx('')} />
                        <button className="btn btn-primary" >
                            Đăng
                        </button>
                        <div className={cx('end-form')}></div>
                    </form>
                </div>
            </div>
        </>
    );
};
