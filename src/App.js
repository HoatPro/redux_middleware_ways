import React from 'react'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

const App = (props) => {
  const {container, text, button, buttonText} = styles

  return (
    <div style={container}>
      <div style={text}>Redux Examples</div>
      <div style={button} onClick={()=> props.fetchData()}>
        <div style={buttonText}>
          {
            props.appData.isFetching && <div> Loading</div>
          }
          {
            props.appData.data.length ? (
              props.appData.data.map((preson,index)=>{
                return (
                  <div key={index}>
                    <div> Name : {preson.name}</div>
                    <div> Age :  {preson.age}</div>
                  </div>
                )
              })
            ): null
          }
        </div>
      </div>
    </div>
  )
}

styles = {
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    display: 'flex',
    minHeight: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white'
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)