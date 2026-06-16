const doctors = [
  {
    id: 1,
    name: "Dr. Aminata Koroma",
    spec: "General Physician",
    location: "Freetown",
    exp: "5+ Years",
    phone: "+232 76 123456",
    email: "aminata@smartcaresl.com",
    available: true,
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    skills: "Family medicine, diagnosis, preventive care",
  },
  {
    id: 2,
    name: "Dr. Ibrahim Kamara",
    spec: "Dentist",
    location: "Freetown",
    exp: "7+ Years",
    phone: "+232 77 456789",
    email: "ibrahim@smartcaresl.com",
    available: true,
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80",
    skills: "Dental cleaning, tooth extraction, oral care",
  },
  {
    id: 3,
    name: "Dr. Mariama Sesay",
    spec: "Gynecologist",
    location: "Bo",
    exp: "6+ Years",
    phone: "+232 78 778899",
    email: "mariama@smartcaresl.com",
    available: false,
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80",
    skills: "Maternity care, antenatal clinic, women health",
  },
  {
    id: 4,
    name: "Dr. Alpha Jalloh",
    spec: "Cardiologist",
    location: "Kenema",
    exp: "8+ Years",
    phone: "+232 79 998877",
    email: "alpha@smartcaresl.com",
    available: true,
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    skills: "Heart care, blood pressure, ECG",
  },
  {
    id: 5,
    name: "Dr. Osman Bangura",
    spec: "Surgeon",
    location: "Makeni",
    exp: "10+ Years",
    phone: "+232 75 112233",
    email: "osman@smartcaresl.com",
    available: true,
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
    skills: "General surgery, emergency surgery",
  },
  {
    id: 6,
    name: "Dr. Fatmata Conteh",
    spec: "Lab Specialist",
    location: "Freetown",
    exp: "4+ Years",
    phone: "+232 30 123456",
    email: "fatmata@smartcaresl.com",
    available: true,
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=700&q=80",
    skills: "Laboratory testing, diagnosis",
  },
];
const services = [
  {
    id: 1,
    name: "General Consultation",
    cat: "consultation",
    location: "Freetown",
    price: "Le 50",
    duration: "30 minutes",
    desc: "Professional general medical consultation and diagnosis.",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Dental Care",
    cat: "dental",
    location: "Freetown",
    price: "Le 150",
    duration: "45 minutes",
    desc: "Complete dental and oral health services.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Maternity Care",
    cat: "maternity",
    location: "Bo",
    price: "Le 100",
    duration: "60 minutes",
    desc: "Antenatal and maternity health support.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Laboratory Services",
    cat: "laboratory",
    location: "Kenema",
    price: "Le 30",
    duration: "20 minutes",
    desc: "Modern lab testing and diagnostics.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Pharmacy",
    cat: "pharmacy",
    location: "Makeni",
    price: "From Le 20",
    duration: "10 minutes",
    desc: "Quality medicines and prescription support.",
    img: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Emergency Care",
    cat: "emergency",
    location: "Freetown",
    price: "24/7",
    duration: "Immediate",
    desc: "Urgent medical response and emergency triage.",
    img: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=700&q=80",
  },
];
let patients=JSON.parse(localStorage.getItem("sc_patients")||"[]"),
appointments=JSON.parse(localStorage.getItem("sc_appointments")||"[]"),
reminders=JSON.parse(localStorage.getItem("sc_reminders")||"[]"),
auditLogs=JSON.parse(localStorage.getItem("sc_audit")||"[]"),
selectedPhoto="";
const medicines = [
  {
    name: "Paracetamol",
    category: "Pain Relief",
    stock: 120,
    status: "Available",
  },
  {
    name: "Amoxicillin",
    category: "Antibiotic",
    stock: 22,
    status: "Available",
  },
  { name: "Artemether", category: "Malaria", stock: 8, status: "Low Stock" },
  {
    name: "ORS Sachet",
    category: "Rehydration",
    stock: 5,
    status: "Low Stock",
  },
  { name: "Vitamin C", category: "Supplement", stock: 80, status: "Available" },
];
document.addEventListener("DOMContentLoaded", () => {
  renderDoctors();
  renderServices();
  renderDashboardDoctors();
  renderMedicines();
  renderAppointments();
  renderPatients();
  renderReminders();
  renderAudit();
  counters();
  clock();
  setInterval(clock, 1000);
  document
    .querySelectorAll("form")
    .forEach((f) => f.addEventListener("submit", (e) => e.preventDefault()));
});
function $(id) {
  return document.getElementById(id);
}
function save() {
  localStorage.setItem("sc_patients", JSON.stringify(patients));
  localStorage.setItem("sc_appointments", JSON.stringify(appointments));
  localStorage.setItem("sc_reminders", JSON.stringify(reminders));
  localStorage.setItem("sc_audit", JSON.stringify(auditLogs));
}
function toast(msg) {
  let x = document.createElement("div");
  x.className = "toast";
  x.textContent = msg;
  document.body.appendChild(x);
  setTimeout(() => x.remove(), 2600);
}
function addAudit(action, detail) {
  auditLogs.unshift({
    time: new Date().toLocaleString(),
    action,
    detail,
    user: "Website User",
  });
  save();
  renderAudit();
}
function nav() {
  document.querySelector(".menu")?.classList.toggle("open");
}
function toggleDark() {
  document.body.classList.toggle("dark");
}
function clock() {
  if ($("clock"))
    $("clock").textContent = new Date().toLocaleString("en-GB", {
      timeZone: "Africa/Freetown",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
}
function counters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    let end = +el.dataset.count,
      n = 0,
      step = Math.ceil(end / 60);
    let t = setInterval(() => {
      n += step;
      if (n >= end) {
        n = end;
        clearInterval(t);
      }
      el.textContent = n + (end == 24 ? "/7" : "+");
    }, 25);
  });
}
function renderDashboardDoctors() {
  const box = $("doctorBox");
  if (!box) return;
  box.innerHTML = doctors
    .slice(0, 4)
    .map((d) => doctorMini(d))
    .join("");
}
function doctorMini(d) {
  return `<div class="doc-mini"><img src="${d.img}"><div><h4>${d.name}</h4><small>${d.spec}</small><p class="stars">★★★★★</p><span class="${d.available ? "status-pill" : "status-pill warn"}">${d.available ? "Available" : "Busy"}</span><br><br><button class="btn" onclick="viewDoctor(${d.id})">View Profile</button></div></div>`;
}
function renderDoctors() {
  const box = $("doctorBoxFull");
  if (!box) return;
  box.innerHTML = doctors
    .map(
      (d) =>
        `<div class="card doctor-card" data-name="${d.name.toLowerCase()}" data-spec="${d.spec.toLowerCase()}" data-location="${d.location.toLowerCase()}" data-available="${d.available}"><img src="${d.img}"><div class="card-body"><h3>${d.name}</h3><p><b>${d.spec}</b> • ${d.exp}</p><p>${d.location}</p><div class="stars">★★★★★</div><span class="${d.available ? "status-pill" : "status-pill warn"}">${d.available ? "Available Today" : "Currently Busy"}</span><div class="actions-row"><button class="btn" onclick="viewDoctor(${d.id})">Profile</button><button class="btn secondary" onclick="quickBook('${d.name}','${d.spec}')">Book</button></div></div></div>`,
    )
    .join("");
}
function filterDoctors() {
  let q = ($("doctorSearch")?.value || "").toLowerCase(),
    spec = $("doctorSpec")?.value || "all",
    avail = $("doctorAvailability")?.value || "all";
  document.querySelectorAll(".doctor-card").forEach((c) => {
    let ok =
      (!q || c.dataset.name.includes(q) || c.dataset.spec.includes(q)) &&
      (spec == "all" || c.dataset.spec.includes(spec)) &&
      (avail == "all" || c.dataset.available == avail);
    c.classList.toggle("hidden", !ok);
  });
}
function viewDoctor(id) {
  let d = doctors.find((x) => x.id == id);
  showModal(
    "Doctor Profile",
    `<div style="display:grid;grid-template-columns:170px 1fr;gap:18px"><img src="${d.img}" style="height:190px;width:170px;object-fit:cover;border-radius:20px"><div><h2>${d.name}</h2><p><b>${d.spec}</b></p><p>${d.exp} • ${d.location}</p><p>☎ ${d.phone}<br>✉ ${d.email}</p><p><b>Skills:</b> ${d.skills}</p><span class="${d.available ? "status-pill" : "status-pill warn"}">${d.available ? "Available" : "Busy"}</span><br><br><button class="btn" onclick="quickBook('${d.name}','${d.spec}')">Book Appointment</button></div></div>`,
  );
}
function quickBook(doc, service) {
  localStorage.setItem("quick_doctor", doc);
  localStorage.setItem("quick_service", service);
  location.href = "appointments.html";
}
function renderServices() {
  const box = $("serviceBox");
  if (!box) return;
  box.innerHTML = services
    .map(
      (s) =>
        `<div class="card service-card" data-name="${s.name.toLowerCase()}" data-cat="${s.cat}" data-loc="${s.location.toLowerCase()}"><img src="${s.img}"><div class="card-body"><h3>${s.name}</h3><p>${s.desc}</p><p><b>${s.price}</b> • ${s.duration}</p><span class="status-pill">${s.location}</span><div class="actions-row"><button class="btn" onclick="viewService(${s.id})">View</button><button class="btn secondary" onclick="quickBook('', '${s.name}')">Book</button></div></div></div>`,
    )
    .join("");
}
function filterServices() {
  let q = ($("serviceSearch")?.value || "").toLowerCase(),
    cat = $("serviceCat")?.value || "all",
    loc = $("serviceLoc")?.value || "all";
  document.querySelectorAll(".service-card").forEach((c) => {
    let ok =
      (!q || c.dataset.name.includes(q)) &&
      (cat == "all" || c.dataset.cat == cat) &&
      (loc == "all" || c.dataset.loc == loc);
    c.classList.toggle("hidden", !ok);
  });
}
function viewService(id) {
  let s = services.find((x) => x.id == id);
  showModal("Clinic Service Details", detailGrid(s));
}
function setupAppointmentDefaults() {
  if ($("apptDoctor"))
    $("apptDoctor").value = localStorage.getItem("quick_doctor") || "";
  if ($("apptService"))
    $("apptService").value = localStorage.getItem("quick_service") || "";
  localStorage.removeItem("quick_doctor");
  localStorage.removeItem("quick_service");
}
window.addEventListener("load", setupAppointmentDefaults);
function bookAppointment() {
  let a = {
    id: Date.now(),
    name: $("apptName")?.value || "Visitor",
    phone: $("apptPhone")?.value || "N/A",
    service: $("apptService")?.value || "General Consultation",
    doctor: $("apptDoctor")?.value || "Any Available Doctor",
    date: $("apptDate")?.value || new Date().toISOString().slice(0, 10),
    time: $("apptTime")?.value || "10:00",
    status: "Pending",
  };
  appointments.unshift(a);
  save();
  addAudit("CREATE_APPOINTMENT", `${a.name} booked ${a.service}`);
  renderAppointments();
  toast("Appointment booked successfully");
}
function renderAppointments() {
  const box = $("appointmentsList");
  if (!box) return;
  box.innerHTML = appointments.length
    ? `<div class="table-wrap"><table class="data-table"><tr><th>Patient</th><th>Service</th><th>Doctor</th><th>Date</th><th>Status</th><th>Action</th></tr>${appointments.map((a) => `<tr><td>${a.name}<br><small>${a.phone}</small></td><td>${a.service}</td><td>${a.doctor}</td><td>${a.date} ${a.time}</td><td><span class="status-pill warn">${a.status}</span></td><td><button class="btn secondary" onclick="updateAppointment(${a.id},'Confirmed')">Confirm</button> <button class="btn" onclick="updateAppointment(${a.id},'Completed')">Complete</button> <button class="btn red" onclick="updateAppointment(${a.id},'Cancelled')">Cancel</button></td></tr>`).join("")}</table></div>`
    : "<p>No appointments yet.</p>";
}
function updateAppointment(id, status) {
  let a = appointments.find((x) => x.id == id);
  if (a) {
    a.status = status;
    save();
    addAudit("UPDATE_APPOINTMENT", `${a.name} appointment ${status}`);
    renderAppointments();
    toast("Appointment " + status);
  }
}
function checkSymptoms() {
  let t = ($("symptomText")?.value || "").toLowerCase(),
    ans = "Enter symptoms to get AI-style guidance.";
  if (t.includes("fever") || t.includes("headache"))
    ans =
      "Possible: malaria, flu, or infection. Recommendation: drink fluids and visit a clinic for malaria testing.";
  else if (t.includes("cough") || t.includes("chest"))
    ans =
      "Possible respiratory infection. Seek care if breathing becomes difficult.";
  else if (t.includes("tooth") || t.includes("dental"))
    ans = "Possible dental infection. Book dental care.";
  else if (t.includes("stomach") || t.includes("vomit"))
    ans = "Possible food poisoning or infection. Drink ORS and visit a clinic.";
  if ($("symptomResult"))
    $("symptomResult").innerHTML =
      `<b>AI Health Guidance</b><p>${ans}</p><small>Not a replacement for professional medical advice.</small>`;
  addAudit("AI_SYMPTOM_CHECK", "User checked symptoms");
}
let selectedPhoto = "";

function loadPhoto(event){
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e){
    selectedPhoto = e.target.result;

    const preview = document.getElementById("photoPreview");
    if (preview) {
      preview.innerHTML = `<img src="${selectedPhoto}" alt="Patient Photo">`;
    }
  };

  reader.readAsDataURL(file);
}
function makePatientCard(){
  const p = {
    id: "SC" + Math.floor(100000 + Math.random() * 900000),
    name: $("pName") ? $("pName").value || "Mohamed Kamara" : "Mohamed Kamara",
    age: $("pAge") ? $("pAge").value || "28" : "28",
    blood: $("pBlood") ? $("pBlood").value || "O+" : "O+",
    phone: $("pPhone") ? $("pPhone").value || "+232 76 123456" : "+232 76 123456",
    address: $("pAddress") ? $("pAddress").value || "Freetown" : "Freetown",
    photo: selectedPhoto
  };

  patients.unshift(p);
  save();

  if ($("cardResult")) {
    $("cardResult").innerHTML = patientCardHTML(p);
  }

  renderPatients();
  addAudit("CREATE_PATIENT_CARD", p.name + " card generated");
  toast("Patient card generated successfully");
}
function patientCardHTML(p) {
  return `<div class="patient-card" id="printCard"><div class="patient-head"><span>✚ SmartCare SL PATIENT CARD</span><span>ID: ${p.id}</span></div><br><div class="patient-body"><div class="photo-box">${p.photo ? `<img src="${p.photo}">` : "👤"}</div><div><b>Name:</b> ${p.name}<br><b>Age:</b> ${p.age}<br><b>Blood:</b> ${p.blood}<br><b>Phone:</b> ${p.phone}<br><b>Address:</b> ${p.address}</div><div class="qr"></div></div></div>`;
}
function printCard() {
  let c = $("printCard");
  if (!c) {
    toast("Generate card first");
    return;
  }
  let w = window.open("", "_blank");
  w.document.write(
    `<html><head><title>Patient Card PDF</title><style>body{font-family:Tahoma;padding:40px}.patient-card{border:2px solid #059669;border-radius:18px;padding:20px;width:650px;margin:auto}.patient-head{display:flex;justify-content:space-between;color:#059669;font-weight:900}.patient-body{display:grid;grid-template-columns:110px 1fr 90px;gap:15px;align-items:center}.photo-box{height:110px;border-radius:14px;background:#dff7f0;display:grid;place-items:center;overflow:hidden}.photo-box img{width:100%;height:100%;object-fit:cover}.qr{width:88px;height:88px;background:repeating-linear-gradient(45deg,#111 0 5px,#fff 5px 10px)}</style></head><body>${c.outerHTML}<script>window.print()<\/script></body></html>`,
  );
  w.document.close();
}
function renderPatients() {
  const box = $("patientHistory");
  if (!box) return;
  box.innerHTML = patients.length
    ? patients
        .map((p) => `<div class="med-card">${patientCardHTML(p)}</div>`)
        .join("")
    : "<p>No patient cards generated yet.</p>";
}
function renderMedicines() {
  const box = $("medicineBox");
  if (!box) return;
  box.innerHTML = medicines
    .map(
      (m) =>
        `<div class="med-card ${m.stock < 10 ? "low-stock" : ""}"><h3>${m.name}</h3><p>${m.category}</p><b>Stock: ${m.stock}</b><br><br><span class="${m.stock < 10 ? "status-pill red" : "status-pill"}">${m.status}</span></div>`,
    )
    .join("");
}
function addReminder() {
  let r = {
    id: Date.now(),
    title: $("remTitle")?.value || "Medicine Reminder",
    date: $("remDate")?.value || "Today",
    note: $("remNote")?.value || "Take medicine on time",
  };
  reminders.unshift(r);
  save();
  renderReminders();
  addAudit("CREATE_REMINDER", r.title);
  toast("Reminder added");
}
function renderReminders() {
  const box = $("remList");
  if (!box) return;
  box.innerHTML = reminders.length
    ? reminders
        .map(
          (r) =>
            `<div class="em-item"><span>🔔 <b>${r.title}</b><br><small>${r.date}</small><br>${r.note}</span><span>›</span></div>`,
        )
        .join("")
    : `<div class="em-item">💊 Take medicine after meal <span>›</span></div><div class="em-item">📅 Appointment tomorrow <span>›</span></div>`;
}
function renderAudit() {
  const box = $("auditBox");
  if (!box) return;
  box.innerHTML = auditLogs.length
    ? auditLogs
        .map(
          (a) =>
            `<div class="audit-line"><div class="audit-dot"></div><div><b>${a.action}</b><br><small>${a.time} • ${a.user}</small><p>${a.detail}</p></div></div>`,
        )
        .join("")
    : "<p>No audit logs yet. Use the website features to generate activity logs.</p>";
}
function detailGrid(obj) {
  return `<div class="detail-grid">${Object.entries(obj)
    .filter(([k]) => k != "img" && k != "photo")
    .map(
      ([k, v]) =>
        `<div class="detail-item"><b>${k.toUpperCase()}</b><span>${v}</span></div>`,
    )
    .join("")}</div>`;
}
function showModal(title, content) {
  let m = $("modal");
  m.innerHTML = `<div class="modal-card"><div class="modal-head"><h2>${title}</h2><button class="close-btn" onclick="document.getElementById('modal').classList.add('hidden')">Close</button></div>${content}</div>`;
  m.classList.remove("hidden");
}
