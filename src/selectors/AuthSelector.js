const selectToken = state => state.auth.token;

const selectIsAuthenticated = state => state.auth.authenticated;

export default { selectToken, selectIsAuthenticated };