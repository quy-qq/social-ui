import classNames from "classnames/bind";
import styles from "./Watch.module.scss";
import Like from "../../layouts/components/Components/Like/Like";
import Share from "../../layouts/components/Components/Share/Share";
import ListComment from "../../layouts/components/Components/ListComment/ListComment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkToken } from "../../services/auth-header";
import config from "../../config";
import { post } from "../../services/post.service";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
const cx = classNames.bind(styles);

function Watch() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState({ items: [], hasMore: true });
  const [user, setUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const { Dragger } = Upload;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  useEffect(() => {
    console.log("111");
    const getPosts = async () => {
      const user = await checkToken();
      console.log("user:", user);

      if (!user) {
        navigate(config.routes.login);
      }
      setUser(user);
      if (!posts.hasMore) return;
      try {
        const res = await post(currentPage);
        const newPosts = posts.items.concat(res.data.data.nodes);
        setTimeout(() => {
          setPosts((pre) => ({
            ...pre,
            items: newPosts,
            hasMore: newPosts.length < res.data.data.itemCount,
          }));
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [currentPage]);

  return (
    <div className={cx("wrapper")}>
      <Button style={{ border: "none" }} onClick={showModal}>
        <form className={cx("post-form")}>
          <img
            src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
            alt="img"
          />
          <input
            type="text"
            className={cx("des")}
            placeholder="Bạn đang nghĩ gì thế?"
          />
        </form>
      </Button>
      <Modal
        title="Tạo Bài Viết"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={cx("modal-content")}>
          <form className={cx("post-form")}>
            <div className={cx("user-modal")}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                alt="img"
              />
              <div className={cx("user-type")}>
                <b>Nguyen Dinh Quý</b>
              </div>
            </div>
            <input
              type="text"
              className={cx("des")}
              placeholder="Bạn đang nghĩ gì..."
            />
            <Dragger className={cx("test")} {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </form>
        </div>
      </Modal>
      <InfiniteScroll
        dataLength={posts.items.length}
        next={() => {
          setCurrentPage(currentPage + 1);
        }}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>⛔⛔⛔Hết rồi fen, Kéo lên đi⛔⛔⛔</b>
          </p>
        }
        hasMore={posts.hasMore}
        loader={<FontAwesomeIcon icon={faSpinner} />}
        scrollableTarget="scrollableDiv"
      >
        {posts?.items?.map((post: any, index) => (
          <div className={cx("box")} key={index}>
            <div className={cx("user")}>
              <img src={post.user.avatar} />
              <div className={cx("username-time")}>
                <b>{post.user.username}</b>
              </div>
            </div>
            <p className={cx("title")}>{post.title}</p>
            <video width="700" autoPlay controls muted>
              <source type="video/mp4" src={post.video} />
            </video>
            <div className="list-comment">
              <ListComment
                idPost={post._id}
                countComment={post.countComment}
                countLike={post.countLike}
              />
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Watch;
