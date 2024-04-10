import { Form, Row, Col, Button, Container } from "react-bootstrap";

function Content({ onFormSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formProps = Object.fromEntries(data.entries());
    onFormSubmit(formProps);
    event.target.reset();
  };

  return (
    <Container fluid>
      <Row className="mt-3">
        <Col xs={12} md={9} lg={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Label className="topic">การรับเรื่อง</Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col} lg={3}>
                <Form.Label>
                  {" "}
                  วัน เวลา รับเรื่อง <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control type="date" name="date" required />
              </Form.Group>

              <Form.Group as={Col} lg={3}>
                <Form.Label>
                  <br />
                </Form.Label>

                <Form.Control
                  type="time"
                  name="time"
                  placeholder="Select time"
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>
                  ช่องทาง <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select name="channel" required>
                  <option value="">Please select</option>
                  <option value="เว็ปไซต์">เว็ปไซต์</option>
                  <option value="โทรศัพท์">โทรศัพท์</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Label className="topic">ผู้แจ้งเรื่อง</Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="ชื่อ และนามสกุล"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>เบอร์โทรศัพท์</Form.Label>
                <div className="d-flex">
                  <Col className="p-0">
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="08XXXXXXXX"
                    />
                  </Col>
                  <Button variant="primary" type="button">
                    ตรวจสอบ
                  </Button>
                </div>
              </Form.Group>
            </Row>

            <Form.Label htmlFor="type" className="topic">
              ข้อมูลที่แจ้ง
            </Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>หมวดหมู่</Form.Label>
                <Form.Select name="type">
                  <option value="">Please select</option>
                  <option value="Customer Support">สนับสนุนลูกค้า</option>
                  <option value="Complaints">การร้องเรียน</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>
                  ระดับความสำคัญ <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select name="priority" required>
                  <option value="">Please select</option>
                  <option value="สำคัญมาก">สำคัญมาก</option>
                  <option value="ทั่วไป">ทั่วไป</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  ฝ่ายที่เกี่ยวข้อง <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select name="relatedField" required>
                  <option value="">Please select</option>
                  <option value="HR">ฝ่ายบุคคล</option>
                  <option value="ฝ่ายบริการลูกค้า">ฝ่ายบริการลูกค้า</option>
                </Form.Select>
              </Form.Group>
              <br />
              <Form.Group className="mb-3">
                <Form.Label>รายละเอียด</Form.Label>
                <Form.Control name="details" as="textarea" rows={2} />
              </Form.Group>
            </Row>

            <div className="form-button text-center p-3">
              <Button variant="primary" type="submit">
                <img
                  src="save-icon-svgrepo-com (1).svg"
                  className="save "
                  alt="save"
                />{" "}
                บันทึก
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
