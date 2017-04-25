import React from 'react';

const GameField = React.createClass({
	
	getInitialState() {
		return {
			weight : 0,
			imgweight : 100
		}
		
	},

	menIncrement(num) {
		this.setState({
			weight: this.state.weight + num,
			imgweight: this.state.imgweight + num
		});
	}, 

	render() 

	{
		let warningMsg;
		if(this.state.weight >= 120) {
			warningMsg = 'Ау, чувак, может хватит кушать фигню? Скушай зеленушечку!'
		}

		return (

			<div>
			<h2>Your weight: <span>{this.state.weight}</span> {warningMsg}</h2>
			<div className='wrapper'>
				<div className='build'>
					<p>
						<img src='img/fat.png' width={this.state.imgweight} />
					</p>
				</div>				
				<div onClick={this.menIncrement.bind(this, 20)} className='burger-left'>
				</div>
				<div onClick={this.menIncrement.bind(this, -15)} className='broccoli'>
				</div>
				<div onClick={this.menIncrement.bind(this, 10)} className='burger-right'>
				</div>		
			</div>
				<div className='field'>
				</div>
			</div>
		);
	}
});

export default GameField;