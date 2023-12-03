import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from 'axios';

export default function ProfilePage() {
    const data = axios.get('http://127.0.0.1:5000/name')
    console.log(data);
    return (
        <section className="vh-100" style={{ backgroundColor: "#095c9c"}}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="8" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-5" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="6" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="my-5" style={{ width: '200px' }} fluid />
                                    <MDBTypography tag="h4">Name</MDBTypography>
                                    <MDBCardText>Student</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol lg="10">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Information</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="8" className="mb-3">
                                                <MDBTypography tag="h6">Email:</MDBTypography>
                                                <MDBCardText className="text-muted">info@example.com</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="8" className="mb-3">
                                                <MDBTypography tag="h6">Phone:</MDBTypography>
                                                <MDBCardText className="text-muted">123 456 789</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="8" className="mb-3">
                                                <MDBTypography tag="h6">Activity:</MDBTypography>
                                                <MDBCardText className="text-muted">Tennis</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="8" className="mb-3">
                                                <MDBTypography tag="h6">Location:</MDBTypography>
                                                <MDBCardText className="text-muted">ISR</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                        </div>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
