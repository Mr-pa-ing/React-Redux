import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/UserActions';

const UserContainer = ({ userData, fetchUsers }) => {

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    userData.loading ? <h1>Loading...</h1> :
    userData.error ? (<h1>{userData.error}</h1>) :
    (userData && userData.users && userData.users.map(user => user.title))
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)