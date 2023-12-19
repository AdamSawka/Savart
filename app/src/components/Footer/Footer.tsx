import React from "react";
import {Link} from "react-router-dom";
import {MDBFooter} from "mdbreact";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return(
        <div className="footer-container">
            <MDBFooter color='light' className='text-center text-lg-start text-muted '>
            <section className='d-flex justify-content-center justify-content-lg-between mx-5 p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block text'>
                    <span>{t("Check Us on")}</span>
                </div>
                <div className="mx-1">
                    <Link to =" "  className='me-4 text-reset'>
                        <i className='fa fa-facebook-official'> </i>
                    </Link>
                    <Link to =" "  className='me-4 text-reset'>
                        <i className='fa fa-google'> </i>
                    </Link>
                    <Link to =" "  className='me-4 text-reset'>
                        <i className='fa fa-instagram'> </i>
                    </Link>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>{t("Products")}</h6>
                            <p>
                                <Link to ="/decorations"  className='text-reset'>
                                    {t("Wall Decorations")}
                                </Link>
                            </p>
                            <p>
                                <Link to ="/pillows"  className='text-reset'>
                                    {t("Pillows")}

                                </Link>
                            </p>
                            <p>
                                <Link to ="/images"  className='text-reset'>
                                    {t("Images")}
                                </Link>
                            </p>
                            <p>
                                <Link to ="/shirts" className='text-reset'>
                                    {t("Shirts")}
                                </Link>
                            </p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                {t("Useful Links")}
                            </h6>
                            <p>
                                <Link to ="/itemsAll"  className='text-reset'>
                                    {t("Shop")}
                                </Link>
                            </p>
                            <p>
                                <Link to ="/basket"  className='text-reset'>
                                    {t("Basket")}
                                </Link>
                            </p>
                            <p>
                                <Link to =" " className='text-reset'>
                                    {t("Special Offers")}
                                </Link>
                            </p>
                            <p>
                                <Link to =" "  className='text-reset'>
                                    {t("Complaints")}
                                </Link>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                {t("Contact")}
                            </h6>
                            <p>
                                <i className='fa fa-home me-3'> </i> 33-370 Muszyna
                            </p>
                            <p>
                                <i className='fa fa-envelope me-3'> </i>
                                woodland@store.com
                            </p>
                            <p>
                                <i className='fa fa-phone me-3'> </i> + 01 234 567 88
                            </p>
                            <p>
                                <i className='fa fa-print me-3'> </i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2023 Copyright:
                <Link to =" " className='text-reset fw-bold' >
                     Savart
                </Link>
            </div>
            </MDBFooter>
        </div>)
}
export default Footer;
