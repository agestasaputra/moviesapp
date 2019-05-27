import React, { Component } from 'react'
import { Modal, Button, Row, Col } from 'antd'

export default class MovieModal extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			data: null
		}
	}
	

	static getDerivedStateFromProps(nextProps, prevState) {
		// console.log('cek nextProps:', nextProps)
		console.log('cek prevState:', prevState)

		if(prevState.data === 'empty') {
			return {
				data: null
			}
		}

		if(prevState !== nextProps.detail) {
			return {
				data: nextProps.detail
			}
		}

	}

	onCloseHandler = async () => {

		await this.props.onCancel()
		await this.setState({
			data: 'empty'
		})
	}
	
	render() {
		console.log('cek state:', this.state)
		const {visible} = this.props
		const {data} = this.state
		return (
			<Modal
				title={data.Title}
				visible={visible}
				// onOk={this.onClose}
				onCancel={this.onCloseHandler}
				footer={[
				<Button key="submit" type="primary" onClick={this.onCloseHandler}>
						Close
				</Button>
				]}
			>
				<Row style={{ textAlign: 'center', marginBottom: '10px' }}>
					<img style={{ width: '100%' }} alt={data.Title} src={data.Poster} />
				</Row>
				<Row>
					<Row>
						<Col span={8} style={{ padding: '5px' }}> <strong><p>Title</p></strong> </Col>
						<Col span={16} style={{ padding: '5px' }}> <p>: {data.Title}</p> </Col>
					</Row>
					<Row>
						<Col span={8} style={{ padding: '5px' }}> <strong><p>Plot</p></strong> </Col>
						<Col span={16} style={{ padding: '5px' }}> <p>: {data.Plot}</p> </Col>
					</Row>
					<Row>
						<Col span={8} style={{ padding: '5px' }}> <strong><p>Country</p></strong> </Col>
						<Col span={16} style={{ padding: '5px' }}> <p>: {data.Country}</p> </Col>
					</Row>
					<Row>
						<Col span={8} style={{ padding: '5px' }}> <strong><p>Production</p></strong> </Col>
						<Col span={16} style={{ padding: '5px' }}> <p>: {data.Production}</p> </Col>
					</Row>
					<Row>
						<Col span={8} style={{ padding: '5px' }}> <strong><p>Writer</p></strong> </Col>
						<Col span={16} style={{ padding: '5px' }}> <p>: {data.Writer}</p> </Col>
					</Row>
					<Row>
						<Col span={8} style={{ padding: '5px' }}> <strong><p>imdbRating</p></strong> </Col>
						<Col span={16} style={{ padding: '5px' }}> <p>: {data.imdbRating}</p> </Col>
					</Row>
				</Row>
			</Modal>
		)
	}
}
