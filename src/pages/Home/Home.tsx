import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Like from '../../layouts/components/Components/Like/Like';
import Share from '../../layouts/components/Components/Share/Share';
import ListComment from '../../layouts/components/Components/ListComment/ListComment';
import { useState } from 'react';
import { Modal } from '../../layouts/components/Components/Modal/Modal';
const cx = classNames.bind(styles)
function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
    return ( <div className={cx("wrapper")}>
        {!isOpenModal && (
         <button className={cx("create-post")} onClick={() => setIsOpenModal(true)}>
                <form className={cx('post-form')}>
                     <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt="img" />
                     <input type="text" className={cx('des')} placeholder="Bạn đang nghĩ gì thế?" />
                </form>
        </button>
          )}

            {isOpenModal && <Modal setIsOpen={setIsOpenModal} />}
        <div className={cx("box")}>
            <div className={cx("user")}>
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"  />
                <div className={cx("username-time")}>
                  <b>dinh quy</b>
                  <div>4h trước</div>
                </div>
            </div>
           <p className={cx("title")}>Cảnh đẹp quá trời đất</p>
           <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt=""  />
           <div className={cx("count-action")}>
            <p>12 Thích</p>
            <p>12 Bình luận</p>
           </div>
           <div className="list-comment">
          <ListComment/>
           </div>
        </div>
         <div className={cx("box")}>
            <div className={cx("user")}>
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"  />
                <div className={cx("username-time")}>
                  <b>dinh quy</b>
                  <div>4h trước</div>
                </div>
            </div>
           <p className={cx("title")}>Cảnh đẹp quá trời đất</p>
           <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt=""  />
        </div>
         <div className={cx("box")}>
            <div className={cx("user")}>
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"  />
                <div className={cx("username-time")}>
                  <b>dinh quy</b>
                  <div>4h trước</div>
                </div>
            </div>
           <p className={cx("title")}>Cảnh đẹp quá trời đất</p>
           <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt=""  />
        </div>
         <div className={cx("box")}>
            <div className={cx("user")}>
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"  />
                <div className={cx("username-time")}>
                  <b>dinh quy</b>
                  <div>4h trước</div>
                </div>
            </div>
           <p className={cx("title")}>Cảnh đẹp quá trời đất</p>
           <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt=""  />
        </div>
    </div> );
}

export default Home;