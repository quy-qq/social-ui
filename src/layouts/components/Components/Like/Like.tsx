import { Button } from "antd";
import classNames from 'classnames/bind';
import styles from './Like.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { checkLikedService } from "../../../../services/like.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function Like(props:any) {
    const [countLike, setCountLike] = useState(props.countLike);
    const [checkLiked, setCheckLiked] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const likeApi = async () => {
        if (checkLiked) {
            setCheckLiked(false);
            setCountLike(countLike - 1);
        } else {
            setCheckLiked(true);
            setCountLike(countLike + 1);
        }
    };
      useEffect(() => {
        const checkLike = async () => {
            const check = await checkLikedService(props.idPost);
            if (check.data.data.length > 0) {
                setCheckLiked(true);
            } else {
                setCheckLiked(false);
            }
        };
        checkLike();
    }, [props.idPost]);

    return ( <Button className={cx("like")} block type="text" onClick={likeApi}><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                    <span>{countLike}</span></Button> );
}

export default Like;