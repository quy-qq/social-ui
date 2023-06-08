import classNames from 'classnames/bind';
import styles from './ListComment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { commentService, createCommentService, deleteCommentService } from '../../../../services/comment.service';
import Like from '../Like/Like';
import Share from '../Share/Share';

const cx = classNames.bind(styles)
function ListComment(props:any) {
    const [limit, setLimit] = useState(3);
    const [countComment, setCountComment] = useState(props.countComment);
    const [countItem, setcountItem] = useState(0);
    const [comments, setComments] = useState([]);
    const user = useSelector((state:any) => state.auth.userInfo);
    const [textComment, setTextComment] = useState('');
    const [isPostComment, setIsPostComment] = useState(false);
    const fetchData = async () => {
        if (!isPostComment) {
            setIsPostComment(true);
            return;
        }
        try {
            const res = await commentService(props.idPost,limit);
            setComments(res.data.data.nodes);
            setcountItem(res.data.data.itemCount);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteComment = async (id:string) => {
        try {
            await deleteCommentService(id);
            fetchData();
            setCountComment(countComment - 1);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitPostComment = async (idPost:string) => {
        try {
            await createCommentService(idPost, textComment);
            setIsPostComment(true);
            setTextComment('');
            await fetchData();
            setCountComment(countComment + 1);
        } catch (error) {
            setIsPostComment(false);
            console.log(error);
        }
    };
      useEffect(() => {
        fetchData();
    }, [isPostComment, limit]);

      return ( <div className="wrapper">
         <div className={cx("action-btn")}>
            <Like  countLike={props.countLike} idPost={props.idPost}/>
            <Button className={cx("comment")} block type="text"><FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                <span> {countComment}</span></Button> 
            <Share/>
           </div>
           {comments?.map((comment:any, index) => (
                    <div key={index} className={cx('box-comment')}>
                        <img src={comment.user.avatar} alt="text" />
                        <div className={cx('comment')}>
                             <b>{comment.user.username}</b>
                            <br />
                            <span className={cx('text')}>{comment.text}</span>
                        </div>
                        <button onClick={() => deleteComment(comment._id)}  className={cx('action')}>
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </button>
                </div>
                 ))}
             <div className={cx('form-comment')}>
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt="text" />
                <div className={cx('comment')}>
                    <div className={cx('input-comment')}>
                        <Form className="form" onFinish={(event) => handleSubmitPostComment(props.idPost)}>
                            <Input value={textComment} onChange={(event) => setTextComment(event.target.value)}
                                type="text"
                                placeholder="Viết bình luận..."
                            />
                            <Button className={cx('btn-sumbit')} type="dashed" htmlType="submit">
                              Send
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
      </div> );
}

export default ListComment;