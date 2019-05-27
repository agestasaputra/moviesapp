import React, { Component } from 'react'
import { Layout, Row, Card, Pagination, Input } from 'antd'
import { connect } from 'react-redux'
import { fetchAllMovies, fetchDetailMovies } from '../../Redux/Actions/Movies'
import MovieModal from './MovieModal'
// import { Link } from 'react-router-dom'

class Home extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
      page: 1,
      search: null,
      modal: false,
		}
	}
	
  componentDidMount = async () => {
    const { fetchAllMovies } = this.props
    await fetchAllMovies(this.state.page, null)
  }
  
  nextPage = async (value) => {
    // console.log('cek event:', value)
    const { fetchAllMovies } = this.props

    await this.setState({
      page: value
    })

    fetchAllMovies(this.state.page, this.state.search)
  }

  movieDetail = async (id) => {
    // console.log('cek value:', event.key)
    console.log('cek imdbID:', id)

    const { fetchDetailMovies } = this.props
    await fetchDetailMovies(id)
    await this.setState({ 
      modal: true
    })
  }

  onClose = async () => {
    await this.setState({ 
      modal: false
    })
  }

  onSearch = async (value) => {
    console.log('cek search value:', value)
    const { fetchAllMovies } = this.props
    
    await this.setState({
      search: value
    })
    fetchAllMovies(this.state.page, value)
  }

	render() {
		console.log('cek props:', this.props)
		// console.log('cek state:', this.state)
		const { Content } = Layout
		const Search = Input.Search
    const { Meta } = Card;

		const { Movies } = this.props
		const { modal } = this.state
		return (
			<Content style={{ padding: '0 50px' }}>
        <Row style={{ padding: '24px', textAlign: 'center' }}>
          <strong> <h1> Movie Web Apps! </h1> </strong>
        </Row>
        
        <Row style={{ background: '#fff', padding: '24px', paddingBottom: '0px', textAlign: 'center' }}>
          <Search placeholder="Search Movie here!" onSearch={(value) => this.onSearch(value)} enterButton style={{ width: '70%' }} />
        </Row>
        
        <Row>
          <div style={{ background: '#fff', padding: '24px', minHeight: '62vh', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            {
              (Movies.data) && 
              (Movies.data.Search) ?
              Movies.data.Search.map((item, index) => {
                return(
                  // <Link to={`/movies/${index+1}`} key={index}>
                    <Card
                      key={index}
                      style={{ margin: '10px', width: '280px'}}
                      hoverable
                      cover={<img style={{ height: '400px' }} alt={item.Title} src={item.Poster} />}
                      onClick={() => this.movieDetail(item.imdbID)}
                    >
                      <Meta title={<div style={{ textAlign: 'center' }}>{item.Title}</div>} description={<div style={{ textAlign: 'center' }}>Movie of {item.Title}<br/> {item.Year} </div>} />
                    </Card>
                  // </Link>
                )
              }) : <div style={{ textAlign: 'center', paddingTop: '10%', width: '100%'}}> <h1> Film not found! </h1> </div>
            }
          </div>

          {
            (modal && Movies.detail) &&
            <MovieModal 
              visible={modal}
              detail={Movies.detail}
              // onOk={this.onClose}
              onCancel={this.onClose}
            />
          }
        </Row>

        {
          (Movies.data) && 
          (Movies.data.Search) &&
          <Row>
            <div style={{ background: '#fff', padding: '10px', textAlign: 'center'}}>
              <Pagination defaultCurrent={1} total={100} onChange={(value) => this.nextPage(value)}/>
            </div>
          </Row>
        }
			
      </Content>
		)
	}
}

const mapStateToProps = ({ Movies }) => ({
  Movies
})

// export default Home
export default connect(mapStateToProps, {
  fetchAllMovies,
  fetchDetailMovies
})(Home)
