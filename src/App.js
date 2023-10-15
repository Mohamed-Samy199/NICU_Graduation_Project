import Home from "./Component/Home/Home";
import Layout from "./Component/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import jwtDecode from "jwt-decode";
import { useEffect, useRef, useState } from "react";
import Profile from "./Component/Profile/Profile";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import { Offline } from "react-detect-offline";
import { createContext } from "react";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Contact from "./Component/Contact/Contact";
import AboutTwo from "./Component/AboutTwo/AboutTwo";
import { useTranslation } from "react-i18next";
import moon from "./Component/Assets/moon.svg";
import sun from "./Component/Assets/sun.svg";
import Process from "./Component/Process/Process";
import Mission from "./Component/Mission/Mission";
import Value from "./Component/Value/Value";
import AboutDetails from "./Component/AboutDetails/AboutDetails";
import AboutDoctors from "./Component/AboutDoctors/AboutDoctors";
import NotFound from "./Component/NotFound/NotFound";
import Nicu from "./Component/Nicu/Nicu";
import { nicu } from "./data";
import NicuDetails from "./Component/NicuDetails/NicuDetails";
import SampleChat from "./Component/SampleChat/SampleChat";
import alanBtn from "@alan-ai/alan-sdk-web";
import Blog from "./Component/Blog/Blog";
import { Modal, ModalHeader } from "reactstrap";
import Plxs from "./Component/Plx/Plx";
import { Widget } from "./Component/widget-1/Widget";
import io from "socket.io-client";
import Chat from "./Component/Chat/Chat";
import { ToastContainer } from "react-toastify";
import Measuer from "./Component/Measuer/Measuer";
import Donation from "./Component/Donation/Donation";
import "./App.css"; 

// connection backend socket io
const socket = io.connect("http://localhost:8080");

// localStorage nicu data
let data = localStorage.getItem("oneNicu5")
  ? JSON.parse(localStorage.getItem("oneNicu5"))
  : nicu;
localStorage.setItem("oneNicu5", JSON.stringify(data));

export const themeContext = createContext(null);

function App() {
  // popup
  const [model, setModel] = useState(false);
  const [modelOne, setModelOne] = useState(false);
  const [modelTwo, setModelTwo] = useState(false);
  const [modelThree, setModelThree] = useState(false);

  // chat socket
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  // alan ai
  const alanBtnInstance = useRef(null);
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          "43396893c62bfbba044e138284f0cb1f2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "gotoFaq") {
            console.log(commandData.faqId);
          } else if (commandData.command === "openMyYoutube") {
            window.open("https://www.youtube.com/", "_blank");
          } else if (commandData.command === "openGoogle") {
            window.open("https://www.google.com/", "_blank");
          } else if (commandData.command === "openHome") {
            window.location.href = "http://localhost:3000/home";
          } else if (commandData.command === "openAbout") {
            window.location.href = "http://localhost:3000/more";
          } else if (commandData.command === "openService") {
            window.location.href = "http://localhost:3000/service";
          } else if (commandData.command === "openBabyCare") {
            window.location.href = "http://localhost:3000/nicu";
          } else if (commandData.command === "openBlog") {
            window.location.href = "http://localhost:3000/blog";
          } else if (commandData.command === "openContact") {
            window.location.href = "http://localhost:3000/contact";
          }
        },
      });
    }
  }, []);

  // nicu data state
  const nicu = {
    nicu: data,
    index: 0,
  };

  // translate
  const [t, seti18next] = useTranslation();
  // light & dark mode
  const [theme, setTheme] = useState("light");
  const themeToggel = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  // token user login
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);
  const [userData, setuserDate] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setuserDate(decodedToken);
  }
  // routers
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout setuserDate={setuserDate} userData={userData} />,
      errorElement: <NotFound />,
      children: [
        {
          path: "home",
          element: (
            <ProtectedRoute userData={userData}>
              <Home t={t} />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <Process t={t} /> },
            { path: "mission", element: <Mission t={t} /> },
            { path: "value", element: <Value t={t} /> },
          ],
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute userData={userData}>
              <Profile userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute userData={userData}>
              <About userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "aboutDetails/:id/:type",
          element: (
            <ProtectedRoute userData={userData}>
              <AboutDetails userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "aboutDoctors/:id",
          element: (
            <ProtectedRoute userData={userData}>
              <AboutDoctors userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "more",
          element: (
            <ProtectedRoute userData={userData}>
              <AboutTwo userData={userData} t={t} />
            </ProtectedRoute>
          ),
        },
        {
          path: "service",
          element: (
            <ProtectedRoute userData={userData}>
              <Services userData={userData} t={t} />
            </ProtectedRoute>
          ),
        },
        {
          path: "blog",
          element: (
            <ProtectedRoute userData={userData}>
              <Blog userData={userData} t={t} />
            </ProtectedRoute>
          ),
        },
        {
          path: "contact",
          element: (
            <ProtectedRoute userData={userData}>
              <Contact userData={userData} t={t} />
            </ProtectedRoute>
          ),
        },
        {
          path: "chat",
          element: (
            <ProtectedRoute userData={userData}>
              <SampleChat userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "nicu",
          element: (
            <ProtectedRoute userData={userData}>
              <Nicu userData={userData} item={nicu.nicu} t={t} />
            </ProtectedRoute>
          ),
        },
        {
          path: "nicu/:id",
          element: (
            <ProtectedRoute userData={userData}>
              <NicuDetails userData={userData} t={t} />
            </ProtectedRoute>
          ),
        },
        {
          path: "measure",
          element: (
            <ProtectedRoute userData={userData}>
              <Measuer userData={userData} t={t} />
            </ProtectedRoute>
          ),
        },
        {
          path: "donation",
          element: (
            <ProtectedRoute userData={userData}>
              <Donation userData={userData} t={t} />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { index: true, element: <Register /> },

        { path: "plxs", element: <Plxs /> },
      ],
    },
  ]);

  return (
    <>
      <themeContext.Provider value={{ theme, themeToggel }}>
        <div id={theme}>
          {/*connet internet*/}
          <div>
            <Offline>
              {" "}
              <div className="offline"> You are offline (surprise!)</div>
            </Offline>
          </div>
          {/*popup map*/}
          <Modal size="lg" isOpen={model} toggle={() => setModel(!model)}>
            <ModalHeader toggle={() => setModel(!model)}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27484.135871581304!2d31.029264561463492!3d30.562948028629382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d6eb70a91047%3A0xc353387ed2f37809!2z2KzYp9mF2LnYqSDYp9mE2YXZhtmI2YHZitip!5e0!3m2!1sar!2seg!4v1689412508215!5m2!1sar!2seg" frameborder="0"
                loading="lazy"></iframe>
            </ModalHeader>
          </Modal>
          {/*popup widget toggle medical*/}
          <Modal
            size="lg"
            isOpen={modelOne}
            toggle={() => setModelOne(!modelOne)}
          >
            <ModalHeader toggle={() => setModelOne(!modelOne)}>
              <Widget />
            </ModalHeader>
          </Modal>
          {/*popup chat*/}
          <Modal
            size="lg"
            isOpen={modelTwo}
            toggle={() => setModelTwo(!modelTwo)}
          >
            <ModalHeader toggle={() => setModelTwo(!modelTwo)}>
              {/*chat socket io*/}
              {!showChat ? (
                <div className="joinChatContainer text-center">
                  <h3 className="color-blue">Join A Chat</h3>
                  <input
                    type="text"
                    placeholder="Join..."
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Room ID..."
                    onChange={(event) => {
                      setRoom(event.target.value);
                    }}
                  />
                  <button onClick={joinRoom}>Join A Room</button>
                </div>
              ) : (
                <Chat socket={socket} username={username} room={room} />
              )}
            </ModalHeader>
          </Modal>
          {/*popup profile*/}
          <Modal
            size="lg"
            isOpen={modelThree}
            toggle={() => setModelThree(!modelThree)}
          >
            <ModalHeader toggle={() => setModelThree(!modelThree)}>
              {
                <div className="profile pt-4 d-flex justify-content-center align-items-center">
                  <div
                    style={{ width: "250px", height: "250px" }}
                    className="rounded-circle mt-3 me-5 text-center"
                  >
                    <img
                      src={require("./Component/Assets/profile-picture.webp")}
                      alt="profile"
                      className="w-100 rounded-circle"
                    />
                    <h4 className="color-blue pt-4">My Profile</h4>
                  </div>
                  <div className="pro-data my-5 color-blue">
                    <h4>Name: Mohamed</h4>
                    <h4 className="py-2">Emali: moh246@gmail.com</h4>
                    <h4>Role: Patient</h4>
                  </div>
                </div>
              }
            </ModalHeader>
          </Modal>
          {/*toastfy*/}
          <ToastContainer />
          {/*routers*/}
          <RouterProvider router={routers} />
          {/*left buttom popup and toggle*/}
          <div className="toggle-buttons position-fixed">
            {/*light and dark mode toggle*/}
            <div className="btn-border">
              {theme === "dark" ? (
                <button
                  onClick={themeToggel}
                  checked={theme === "dark"}
                  className=" btn btn-teal"
                >
                  <img src={moon} className="mode" alt="moon" />
                </button>
              ) : (
                <button
                  onClick={themeToggel}
                  checked={theme === "light"}
                  className=" btn btn-teal"
                >
                  <img src={sun} className="mode" alt="sun" />
                </button>
              )}
            </div>
            {/*map popup*/}
            <div className="btn-one btn-border">
              <button className="btn btn-teal" onClick={() => setModel(true)}>
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
            {/*medical popup*/}
            <div className="btn-two two-btn btn-border">
              <button
                className="btn btn-teal"
                onClick={() => setModelOne(true)}
              >
                <i className="fa-solid fa-stethoscope"></i>
              </button>
            </div>
            {/*chat popup*/}
            <div className="btn-two btn-border">
              <button
                className="btn btn-teal"
                onClick={() => setModelTwo(true)}
              >
                <i className="fa-solid fa-message"></i>
              </button>
            </div>
            {/*profile*/}
            <div className="btn-four btn-border">
              <button
                className="btn btn-teal"
                onClick={() => setModelThree(true)}
              >
                <i class="fa-solid fa-user"></i>
              </button>
            </div>
            <div className="btn-fife ">
              {seti18next.language === "en" && (
                <button
                  className="btn btn-teal"
                  onClick={() => {
                    seti18next.changeLanguage("ar");
                  }}
                >
                  ar
                </button>
              )}
              {seti18next.language === "ar" && (
                <button
                  className="btn btn-teal"
                  onClick={() => {
                    seti18next.changeLanguage("en");
                  }}
                >
                  en
                </button>
              )}
            </div>
          </div>
          <SampleChat />
        </div>
      </themeContext.Provider>
    </>
  );
}
export default App;
