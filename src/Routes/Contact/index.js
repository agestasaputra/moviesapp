import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

export default class Contact extends Component {
	render() {
		const { Content } = Layout
		return (
			<Content style={{ padding: '0 50px' }}>
				<Row style={{ padding: '24px', textAlign: 'center' }}>
					<strong> <h1> Contact Page </h1> </strong>
				</Row>

				<Row>
					<div style={{ background: '#fff', padding: '24px', minHeight: '70vh' }}>
						<Row>
							<Col span={6}>
								<img style={{ width: '100%' }} alt="Agesta Saputra" src="https://0yupna.bn.files.1drv.com/y4p-Aafs1QBG3c2_9wN4UgBGqmRdE5cKeUSdbBZlw6yXLHwei196AxXddq03aN5WrTtU16N_le6t0Y8hGsARZT9qk3Doxkuei6SulkaTYav_Q0OAylwDQ9mej7_aD_CqSDqEM_ztwf8KMtgA4zygOghRvZW6dF0JKzXfZetQBGg-9gyVshm469bj3dOS_NCRDfyzL1NYXyjvHzJv8mB_4NzIA/Agesta%20Saputra%20-%20Pas%20Foto%20RED-Bg%20.jpg?psid=1" />
							</Col>
							<Col span={18} style={{ paddingLeft: '20px' }}>
								<Row>
									<Col span={4} style={{ padding: '5px' }}> <strong><p>Linkedin</p></strong> </Col>
									<Col span={20} style={{ padding: '5px' }}> <p>: https://www.linkedin.com/in/agesta-saputra-56085113a/</p> </Col>
								</Row>
								<Row>
									<Col span={4} style={{ padding: '5px' }}> <strong><p>Contact Number</p></strong> </Col>
									<Col span={20} style={{ padding: '5px' }}> <p>: +62858 9163 0767</p> </Col>
								</Row>
								<Row>
									<Col span={4} style={{ padding: '5px' }}> <strong><p>Address</p></strong> </Col>
									<Col span={20} style={{ padding: '5px' }}> <p>: Pondok Lakah Permai Blok D/2 Ciledug, Tangerang</p> </Col>
								</Row>
							</Col>
							
						</Row>
					</div>
				</Row>

			</Content>
		)
	}
}
