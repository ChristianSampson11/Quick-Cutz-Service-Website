import React, { useState } from "react";
import "./Book.css";
import Navbar from "../Components/Navbar";
import BottomBorder from "../Components/Contact";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect } from "react";

function Book() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { name: "Buzzcut", price: "$20" },
    { name: "Kidz Cut", price: "$15" },
    { name: "Men's Haircut", price: "$25" },
    { name: "Women's Haircut", price: "$20" },
    { name: "Hot Towel + Shave", price: "$50" },
    { name: "Additional Designs", price: "$10" },
    { name: "Beard Shave/Trim", price: "$15" },
  ];

  const stylists = ["Chris", "Amelia", "Tanya"];

  const hours = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM"
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    selectedServices: [],
    stylist: "",
    date: "",
    time: "",
  });

  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleServiceSelect = (service) => {
    setForm((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    const newErrors = [];

    if (!form.name) newErrors.push("Full Name is required.");
    if (!validateEmail(form.email)) newErrors.push("Email format is invalid.");
    if (!form.phone) newErrors.push("Phone Number is required.");
    if (form.selectedServices.length === 0) newErrors.push("Please select at least one service.");
    if (!form.stylist) newErrors.push("Please choose a stylist.");
    if (!form.date) newErrors.push("Please select a date.");
    if (!form.time) newErrors.push("Please select a time.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="confirmation-page">
        <Navbar />
        <Container className="confirmation-container">
          <h1>Appointment Confirmed!</h1>
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Phone:</strong> {form.phone}</p>
          <p><strong>Services:</strong> {form.selectedServices.join(", ")}</p>
          <p><strong>Stylist:</strong> {form.stylist}</p>
          <p><strong>Date:</strong> {form.date}</p>
          <p><strong>Time:</strong> {form.time}</p>
        </Container>
        <BottomBorder />
      </div>
    );
  }

  const getHoursForDate = (dateString) => {
    if (!dateString) return [];

    const date = new Date(dateString);
    const day = date.getDay();

    if (day === 6) return [];

    if (day >= 0 && day <= 2) {
      return ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
    }

    if (day === 3 || day === 4) {
      return ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
    }

    if (day === 5) {
      return ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    }
    return [];
  };

  return (
    <div className="book-page">
      <Navbar />

      <Container className="book-container">

        {/* SECTION 1 — Personal Details */}
        <div className="book-section">
          <h2>Personal Details</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </div>

        {/* SECTION 2 — Select Services */}
        <div className="book-section">
          <h2>Select a Service</h2>
          <Row>
            {services.map((service, index) => (
              <Col xs={12} sm={6} md={4} key={index}>
                <div
                  className={`service-option ${form.selectedServices.includes(service.name)
                    ? "selected"
                    : ""
                    }`}
                  onClick={() => handleServiceSelect(service.name)}
                >
                  <h4>{service.name}</h4>
                  <p>{service.price}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* SECTION 3 — Stylist */}
        <div className="book-section">
          <h2>Select a Stylist</h2>
          <Form.Select
            value={form.stylist}
            onChange={(e) =>
              setForm({ ...form, stylist: e.target.value })
            }
          >
            <option value="">Choose a stylist</option>
            {stylists.map((stylist, index) => (
              <option key={index} value={stylist}>
                {stylist}
              </option>
            ))}
          </Form.Select>
        </div>

        {/* SECTION 4 — Date & Time */}
        <div className="book-section">
          <h2>Date & Time</h2>

          <Form.Group className="mb-3">
            <Form.Label>Select a Date</Form.Label>
            <Form.Control
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Select a Time</Form.Label>
            <Form.Select
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              disabled={getHoursForDate(form.date).length === 0}
            >
              <option value="">
                {getHoursForDate(form.date).length === 0
                  ? "No available times"
                  : "Choose a time"}
              </option>

              {getHoursForDate(form.date).map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>

        {/* SECTION 5 — Submit */}
        <div className="book-section">
          {errors.length > 0 && (
            <div className="error-box">
              {errors.map((err, i) => (
                <p key={i}>{err}</p>
              ))}
            </div>
          )}
          <button className="book-btn" onClick={handleSubmit}>
            Book Appointment
          </button>
        </div>
      </Container>

      <BottomBorder />
    </div>
  );
}

export default Book;