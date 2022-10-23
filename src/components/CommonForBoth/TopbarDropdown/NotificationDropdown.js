import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

//i18n
import { withTranslation } from "react-i18next";

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon position-relative"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada" />
          <span className="badge bg-danger rounded-pill">3</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0">Уведомления</h6>
              </Col>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">
                    Товар успешно размещен
                  </h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Очень важная информация
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                        3 мин. назад
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <img
                  src={avatar3}
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Максим Худяков</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Добрый день! Можете подсказать, когда будет закончена модерация?
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      {" "}1 час назад
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <img
                  src={avatar3}
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Еще одно уведомление</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                      Информация срочная и неотложная
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      {" "}3 часа назад
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SimpleBar>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withTranslation()(NotificationDropdown);

NotificationDropdown.propTypes = {
  t: PropTypes.any
};