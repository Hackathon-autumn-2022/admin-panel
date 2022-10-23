import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import Dropzone from "react-dropzone";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { postExponent } from "../../api";

const EcommerceAddProduct = () => {
  
  //meta title
  document.title = "Добавить экспонента";

  const [selectedFiles, setselectedFiles] = useState([])

  const options = [
    { value: "AK", label: "Alaska" },
    { value: "HI", label: "Hawaii" },
    { value: "CA", label: "California" },
    { value: "NV", label: "Nevada" },
    { value: "OR", label: "Oregon" },
    { value: "WA", label: "Washington" },
  ]

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )

    setselectedFiles(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="ВДНХ" breadcrumbItem="Добавить экспонента" />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Основная информация</CardTitle>
                  <p className="card-title-desc mb-4">
                    Заполните поля ниже
                  </p>
                  <Form>
                    <Row>
                      <Col sm="6">
                        <div className="mb-3">
                          <Label htmlFor="name">Название компании</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Название"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="phone">
                            Номер телефона
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="form-control"
                            placeholder="Номер телефона"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="link">
                            Ссылка на веб-сайт
                          </Label>
                          <Input
                            id="link"
                            name="link"
                            type="text"
                            className="form-control"
                            placeholder="Ссылка на веб-сайт"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="partnersCount">
                            Количество партнеров
                          </Label>
                          <Input
                            id="partnersCount"
                            name="partnersCount"
                            type="number"
                            min={0}
                            className="form-control"
                            placeholder=" Количество партнеров"
                          />
                        </div>
                      </Col>

                      <Col sm="6">
                        <div className="mb-3">
                          <Label className="control-label">Сфера</Label>
                          <select className="form-control select2">
                            <option>Выбрать</option>
                            <option value="Промышленность">Промышленность</option>
                            <option value="Электроника">Электроника</option>
                            <option value="Программное обеспечение">Программное обеспечение</option>
                            <option value="Сельское хозяйство">Сельское хозяйство</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="address">
                            Адрес
                          </Label>
                          <Input
                            id="address"
                            name="address"
                            type="text"
                            className="form-control"
                            placeholder="Адрес компании"
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="description">
                            Описание компании
                          </Label>
                          <textarea
                            className="form-control mb-3"
                            id="description"
                            rows="5"
                            placeholder="Описание команиии"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary" className="btn ">
                        Сохранить
                      </Button>
                      <Button type="submit" color="secondary" className=" ">
                        Отменить
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="mb-3">Фотографии</CardTitle>
                  <Form>
                    <Dropzone
                      onDrop={acceptedFiles => {
                        handleAcceptedFiles(acceptedFiles)
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="dz-message needsclick">
                              <div className="mb-3">
                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                              </div>
                              <h4>Перетащите сюда файлы или кликните для загрузки</h4>
                            </div>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </Form>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle>Мета информация</CardTitle>
                  <p className="card-title-desc">
                    Заполните поля ниже
                  </p>
                  <Form>
                    <Row>
                      <Col sm={6}>
                        <div className="mb-3">
                          <Label htmlFor="metaTags">Мета теги</Label>
                          <Input
                            id="metaTags"
                            name="manufacturername"
                            type="text"
                            className="form-control"
                            placeholder="Мета теги"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" className="btn btn-primary waves-effect waves-light" color="primary">
                        Сохранить
                      </Button>
                      <Button type="submit" className="btn btn-secondary waves-effect waves-light" color="secondary">
                        Отменить
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EcommerceAddProduct
