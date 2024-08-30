import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Button } from "react-bootstrap";

import introImg1 from "../../assets/home/introImgOne.jpg";
import { useNavigate, Link } from "react-router-dom";

import "./services.css";
export default function ServiceThree() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/get-a-quote");
  };

  return (
    <div>
      <div className="servicesOne">
        <div className="contactUsHeader">
          <h3 className="mt-4">{t("serviceThree.title")}</h3>
          <h5 className="mt-4">{t("serviceThree.quote")}</h5>
          <p className="mt-4">{t("serviceThree.description")}</p>
        </div>

        <Row className="serviceOne">
          <Col lg={4} xs={12}>
            <img
              className="introImg1 m-3 img-fluid"
              src={introImg1}
              alt="introImage"
            />
          </Col>
          <Col className="contents ms-lg-5 mt-4" lg={5} xs={12}>
            <h3>
              <b>{t("serviceThree.pointHeader")}</b>
            </h3>
            <p>
              <b>{t("serviceThree.Servoneheader")}</b> {t("serviceThree.ServOne")}
            </p>
            <p>
              <b>{t("serviceThree.ServTwoHeader")}</b> {t("serviceThree.ServTwo")}
            </p>
            <p>
              <b>{t("serviceThree.ServThreeHeader")}</b>{" "}
              {t("serviceThree.ServThree")}
            </p>
            <Button
              className="getStartedBtn col-lg-5 col-12 mb-3"
              onClick={handleButtonClick}
            >
              {t("home.getStarted")}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
