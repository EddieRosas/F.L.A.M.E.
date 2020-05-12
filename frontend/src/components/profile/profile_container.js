import { connect } from "react-redux";
import Profile from "./profile.jsx";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
