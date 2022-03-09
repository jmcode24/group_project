import React from 'react';
import Group from './Group'
import {connect} from 'react-redux'

class GroupList extends React.Component {

  render() {
    return(
      <>
       {this.props.notes.map((note, index) => {
          return <Group key={note.id} note={note} index={index} />
       })}
      </>
    );
  }
}
const sendDataAsProps = (state) => {
  return {notes: state.notes}
}

export default connect (sendDataAsProps) (GroupList)