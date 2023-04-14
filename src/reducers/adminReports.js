import {
  ADMIN_REPORTS,
  ADMIN_FORM,
  ADMIN_POINTS,
  UPDATE_REPORT,
} from "../constants/actionTypes";

const adminReportReducer = (
  state = { adminReports: [], adminPoints: [] },
  action
) => {
  switch (action.type) {
    case ADMIN_REPORTS:
      const reports = action.payload.map((event) => ({
        ...event,
        count: event.multiple,
        selected: false,
      }));

      return { ...state, adminReports: reports };

    case UPDATE_REPORT:
      const { name, id, count, selected } = action.payload;
      if (name === "counter") {
        const updatedReports = state.adminReports.map((report) =>
          report.id === id ? { ...report, count } : report
        );
        return { ...state, adminReports: updatedReports };
      }
      if (name === "checkbox") {
        const updatedReports = state.adminReports.map((report) =>
          report.id === id ? { ...report, selected: !report.selected } : report
        );
        return { ...state, adminReports: updatedReports };
      }
      return state;

    case ADMIN_POINTS:
      return { ...state, adminPoints: action.payload };
    default:
      return state;
  }
};

export default adminReportReducer;
