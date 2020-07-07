import { connect } from "react-redux";
import { searchRequest, nextPageRequest } from "../../store/dataActionCreators";
import { ClientComponent } from "./ClientComponent";

const mapStateToProps = (state) => ({
  items: state.items,
  stats: state.stats,
});

const actionCreators = {
  searchRequest,
  nextPageRequest,
};

export const Client = connect(mapStateToProps, actionCreators)(ClientComponent);
