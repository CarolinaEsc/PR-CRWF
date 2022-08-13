import { VscBell } from 'react-icons/vsc'
import { Button, Container, Col, Row, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate  } from "react-router-dom"
import { Form, Formik, Field } from 'formik'

import { SearchByCategory } from "../../components/category/searchCategory"
import Footer from "../../components/general/footer"
import { useFunding } from "../../context/fundingContext"
import { FundCardsCat } from '../../components/funding/fundCardCategory'


export function CatalogueCategory() {
  const navigate = useNavigate();
  const { postsCatFund } = useFunding()
  const { getPostsFundByNam } = useFunding()


  if (postsCatFund.length === 0) return (
    <>
      <div>
        <div className="my-3">
          <div className="container align-center">
            <h1 className="mt-3 p-3">Catálogo</h1>
            <Container>
              <Row>
                <Col sm={4}><SearchByCategory /></Col>
                <Col sm={8}>
                <Formik initialValues={{ search: ''}}
                  onSubmit={(values, actions) => {
                    const resultFundsName = getPostsFundByNam(values)
                    if (resultFundsName != null) {
                      navigate('/catalogue/name')
                    }
                  }}>
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="d-flex m-2">
                      <Field className="form-control me-1" name='search' placeholder="Buscar..." />
                      <Button type="submit" variant="outline-dark">Buscar</Button>
                    </Form>
                  )}
                </Formik>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <div className="container align-center">
          </div>
          <div className='flex flex-col justify-center items-center m-5 p-7'>
            <br />
            <VscBell className='w-16 h-16' />
            <h2 className="text-center">No hay campañas disponibles, Pero tu puedes empezar una!</h2>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )


  return (
    <>
      <div className="container align-center my.3">
        <h1 className="mt-5 p-3">Catálogo</h1>
        <Container>
          <Row>
            <Col sm={4}><SearchByCategory /></Col>
            <Col sm={8}>
            <Formik initialValues={{ search: ''}}
                  onSubmit={(values, actions) => {
                    const resultFundsName = getPostsFundByNam(values)
                    if (resultFundsName != null) {
                      navigate('/catalogue/name')
                    }
                  }}>
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="d-flex m-2">
                      <Field className="form-control me-1" name='search' placeholder="Buscar..." />
                      <Button type="submit" variant="outline-dark">Buscar</Button>
                    </Form>
                  )}
                </Formik>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div className="container align-center my-3">
        <FundCardsCat/>
      </div>
      <Footer />
    </>
  )
}