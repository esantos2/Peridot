import React from 'react';

class BoardShow extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.fetchBoard();
    // }

    render(){
        const {board} = this.props;
        return (
            <div>
                <h2>Board show page</h2>
                <h1>{board.name}</h1>
                <h3>{board.description}</h3>
                <p>{board.pins}</p>
            </div>
        )
    }
}

export default BoardShow;