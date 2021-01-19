import { connect } from 'react-redux';
import { setSearchPostTextAC, findPostAC } from "../../redux/postsReducer";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        searchPostText: state.postsList.searchPostText,
    }
};

export default connect(mapStateToProps, { setSearchPostTextAC, findPostAC })(Header);