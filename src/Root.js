import App from "./App";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./action/actionCreators";

function mapStateToProps(state) {
  return {
    loaders: state.loaderReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Root = connect(mapStateToProps, mapDispatchToProps)(App);
export default Root;
